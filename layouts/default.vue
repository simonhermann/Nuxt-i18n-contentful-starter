<template>
  <div>
    <noscript>
      Please enable Javascript in your browser.
    </noscript>

    <Navigation></Navigation>

    <nuxt/>
    
  </div>
</template>

<style lang="scss" scoped>
@import '~assets/styles/_vars.scss';

noscript {
  margin: 0 auto 1rem;
  display: block;
  width: 100%;
  text-align: center;
  background-color: rgb(139, 15, 15);
  color: white;
  font-weight: bold;
  font-size: 0.7em;
}
</style>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
  },
  head() {
    return {
      htmlAttrs: {
        // set html lang tag
        lang: this.$store.state.locale,
      },
    }
  },
}
</script>
