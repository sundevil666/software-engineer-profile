import { describe, expect, it } from 'vitest'

import { profile } from '../content/profile'
import { siteMeta } from '../config/site'

describe('public profile content', () => {
  it('uses the approved identity and SEO metadata', () => {
    expect(profile.name).toBe('Serhii Tokmakov')
    expect(siteMeta.title).toContain(profile.name)
    expect(siteMeta.description.trim()).not.toBe('')
  })

  it('contains the approved experience and project baseline', () => {
    expect(profile.experience[0]?.period).toBe('Apr 2023 — Present')
    expect(profile.projects).toHaveLength(8)
    expect(new Set(profile.projects.map(project => project.id)).size).toBe(
      profile.projects.length,
    )
    expect(profile.projects.some(project => 'rankingSignals' in project)).toBe(false)
    expect(profile.contacts.github).toBe('https://github.com/sundevil666')
    expect(profile.contacts.telegram).toBe('https://t.me/SunDevil666')
    expect(profile.location).toBeNull()
    expect(profile.workPreferences).toBe(
      'Europe-based · CET/CEST · Open to remote opportunities worldwide · Employment, B2B, or freelance',
    )
    expect(siteMeta.title).toBe(
      'Serhii Tokmakov — Vue.js & TypeScript Frontend Developer',
    )
  })
})
