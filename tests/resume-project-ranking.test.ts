import type { Project } from '../content/profile'

import { describe, expect, it } from 'vitest'

import {
  parseRankingRules,
  RankingConfigurationError,
  selectPublicResumeProjects,
  selectResumeProjects,
} from '../server/utils/resume-project-ranking'

const projects: Project[] = [
  { id: 'alpha', name: 'Alpha', summary: '', stack: [] },
  { id: 'beta', name: 'Beta', summary: '', stack: [] },
  { id: 'gamma', name: 'Gamma', summary: '', stack: [] },
]

describe('resume project ranking', () => {
  it('selects the configured limit in descending score order', async () => {
    const rules = parseRankingRules(JSON.stringify({
      limit: 2,
      weights: { impact: 10, recent: 3 },
      projects: {
        alpha: { signals: ['recent'] },
        beta: { signals: ['impact', 'recent'] },
        gamma: { signals: ['impact'] },
      },
    }))

    const selected = await selectResumeProjects(projects, rules)

    expect(selected.map(project => project.id)).toEqual(['beta', 'gamma'])
  })

  it('uses source order as the deterministic tie-breaker', async () => {
    const rules = parseRankingRules(JSON.stringify({
      limit: 3,
      weights: { equal: 1 },
      projects: {
        alpha: { signals: ['equal'] },
        beta: { signals: ['equal'] },
        gamma: { signals: ['equal'] },
      },
    }))

    const selected = await selectResumeProjects(projects, rules)

    expect(selected.map(project => project.id)).toEqual(['alpha', 'beta', 'gamma'])
  })

  it('rejects malformed JSON and invalid limits', () => {
    expect(() => parseRankingRules('{')).toThrow(RankingConfigurationError)
    expect(() => parseRankingRules(JSON.stringify({
      limit: 0,
      weights: { impact: 1 },
      projects: { alpha: { signals: ['impact'] } },
    }))).toThrow('Ranking limit must be an integer from 1 to 10.')
  })

  it('rejects unknown signals', () => {
    expect(() => parseRankingRules(JSON.stringify({
      limit: 1,
      weights: { impact: 1 },
      projects: { alpha: { signals: ['typo'] } },
    }))).toThrow('Ranking project "alpha" contains an unknown signal.')
  })

  it('fails when a public project has no private ranking rule', async () => {
    const rules = parseRankingRules(JSON.stringify({
      limit: 1,
      weights: { impact: 1 },
      projects: {
        alpha: { signals: ['impact'] },
        beta: { signals: ['impact'] },
      },
    }))

    await expect(selectResumeProjects(projects, rules)).rejects.toThrow(
      'Ranking configuration is missing project "gamma".',
    )
  })

  it('uses a safe public source-order fallback when private rules are absent', async () => {
    const fallbackProjects = Array.from({ length: 7 }, (_, index) => ({
      id: `project-${index}`,
      name: `Project ${index}`,
      summary: '',
      stack: [],
    }))

    expect(selectPublicResumeProjects(fallbackProjects)).toEqual(
      fallbackProjects.slice(0, 5),
    )
  })
})
