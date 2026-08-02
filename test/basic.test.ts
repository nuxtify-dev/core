import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page and respects announcement route filtering', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const indexHtml = await $fetch('/')
    expect(indexHtml).toContain('<div>basic</div>')
    expect(indexHtml).toContain('NEWS')
    expect(indexHtml).toContain('This is a test announcement!')

    // Route on include list (wildcard) -> Should display
    const blogPostHtml = await $fetch('/blog/my-post')
    expect(blogPostHtml).toContain('NEWS')
    expect(blogPostHtml).toContain('This is a test announcement!')

    // Route on both include and exclude lists (wildcard overlap) -> Should NOT display
    const blogDraftHtml = await $fetch('/blog/drafts/post-1')
    expect(blogDraftHtml).not.toContain('This is a test announcement!')

    // Route not on include list -> Should NOT display
    const adminHtml = await $fetch('/admin/dashboard')
    expect(adminHtml).not.toContain('This is a test announcement!')

    const aboutHtml = await $fetch('/about')
    expect(aboutHtml).not.toContain('This is a test announcement!')
  })
})
