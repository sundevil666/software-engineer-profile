import { describe, expect, it } from 'vitest'

import { siteMeta } from '../config/site'

describe('site metadata', () => {
  it('provides non-empty temporary SEO metadata', () => {
    expect(siteMeta.title.trim()).not.toBe('')
    expect(siteMeta.description.trim()).not.toBe('')
  })
})
