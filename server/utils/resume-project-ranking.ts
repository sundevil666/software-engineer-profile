import type { Project } from '../../content/profile'

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import process from 'node:process'

export interface ProjectRankingRule {
  adjustment: number
  signals: string[]
}

export interface RankingRules {
  limit: number
  projects: Record<string, ProjectRankingRule>
  weights: Record<string, number>
}

export class RankingConfigurationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RankingConfigurationError'
  }
}

const localRulesPath = resolve(process.cwd(), '.private/resume-project-ranking.json')
const publicProjectLimit = 5

export function selectPublicResumeProjects(projects: ReadonlyArray<Project>) {
  return projects.slice(0, publicProjectLimit)
}

export async function selectResumeProjects(
  projects: ReadonlyArray<Project>,
  suppliedRules?: RankingRules,
) {
  const rules = suppliedRules ?? await loadRankingRules()

  if (!rules) return selectPublicResumeProjects(projects)

  assertEveryProjectIsConfigured(projects, rules)

  return projects
    .map((project, index) => ({
      index,
      project,
      score: scoreProject(project.id, rules),
    }))
    .sort((left, right) => right.score - left.score || left.index - right.index)
    .slice(0, rules.limit)
    .map(({ project }) => project)
}

export async function loadRankingRules(): Promise<RankingRules | undefined> {
  const environmentRules = process.env.RESUME_PROJECT_RANKING

  if (environmentRules) return parseRankingRules(environmentRules)

  try {
    return parseRankingRules(await readFile(localRulesPath, 'utf8'))
  }
  catch (error) {
    if (error instanceof RankingConfigurationError) throw error
    return undefined
  }
}

export function parseRankingRules(value: string): RankingRules {
  let parsed: unknown

  try {
    parsed = JSON.parse(value)
  }
  catch {
    throw new RankingConfigurationError('Resume project ranking must be valid JSON.')
  }

  if (!isRecord(parsed)) {
    throw new RankingConfigurationError('Resume project ranking must be an object.')
  }

  const limit = parsed.limit
  const weights = parsed.weights
  const projects = parsed.projects

  if (!Number.isInteger(limit) || Number(limit) < 1 || Number(limit) > 10) {
    throw new RankingConfigurationError('Ranking limit must be an integer from 1 to 10.')
  }

  if (!isNumericRecord(weights) || Object.keys(weights).length === 0) {
    throw new RankingConfigurationError('Ranking weights must contain numeric values.')
  }

  if (!isRecord(projects) || Object.keys(projects).length === 0) {
    throw new RankingConfigurationError('Ranking projects must be configured.')
  }

  const projectRules = Object.fromEntries(
    Object.entries(projects).map(([projectId, rule]) => [
      projectId,
      parseProjectRule(projectId, rule, weights),
    ]),
  )

  return {
    limit: Number(limit),
    projects: projectRules,
    weights,
  }
}

function scoreProject(projectId: string, rules: RankingRules) {
  const projectRule = rules.projects[projectId]

  if (!projectRule) {
    throw new RankingConfigurationError(
      `Ranking configuration is missing project "${projectId}".`,
    )
  }

  return projectRule.signals.reduce(
    (total, signal) => total + rules.weights[signal],
    projectRule.adjustment,
  )
}

function assertEveryProjectIsConfigured(
  projects: ReadonlyArray<Project>,
  rules: RankingRules,
) {
  for (const project of projects) {
    if (!rules.projects[project.id]) {
      throw new RankingConfigurationError(
        `Ranking configuration is missing project "${project.id}".`,
      )
    }
  }
}

function parseProjectRule(
  projectId: string,
  value: unknown,
  weights: Record<string, number>,
): ProjectRankingRule {
  if (!isRecord(value) || !Array.isArray(value.signals)) {
    throw new RankingConfigurationError(
      `Ranking project "${projectId}" must contain a signals array.`,
    )
  }

  const signals = value.signals

  if (!signals.every(signal => typeof signal === 'string' && signal in weights)) {
    throw new RankingConfigurationError(
      `Ranking project "${projectId}" contains an unknown signal.`,
    )
  }

  const adjustment = value.adjustment ?? 0

  if (typeof adjustment !== 'number' || !Number.isFinite(adjustment)) {
    throw new RankingConfigurationError(
      `Ranking project "${projectId}" adjustment must be numeric.`,
    )
  }

  return { adjustment, signals }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isNumericRecord(value: unknown): value is Record<string, number> {
  return isRecord(value) && Object.values(value).every(
    item => typeof item === 'number' && Number.isFinite(item),
  )
}
