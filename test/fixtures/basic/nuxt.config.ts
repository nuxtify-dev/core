import nuxtifyCore from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    nuxtifyCore,
  ],
  nuxtifyCore: {
    announcement: {
      show: true,
      chipText: 'News',
      message: 'This is a test announcement!',
    },
  },
})
