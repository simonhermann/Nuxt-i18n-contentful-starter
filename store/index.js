// internationalization
// from https://nuxtjs.org/examples/i18n/
// docs: http://kazupon.github.io/vue-i18n/

export const state = () => ({
  locales: ['en', 'de'],
  locale: 'de',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
}
