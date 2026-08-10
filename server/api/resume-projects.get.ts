import { profile } from '~/content/profile'
import {
  RankingConfigurationError,
  selectResumeProjects,
} from '~/server/utils/resume-project-ranking'

export default defineEventHandler(async (event) => {
  try {
    const projects = await selectResumeProjects(profile.projects)

    setResponseHeader(event, 'cache-control', 'public, max-age=300')

    return projects.map(project => project.id)
  }
  catch (error) {
    if (error instanceof RankingConfigurationError) {
      throw createError({
        statusCode: 503,
        statusMessage: error.message,
      })
    }

    throw error
  }
})
