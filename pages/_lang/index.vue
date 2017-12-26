<template>
<main>
  <header>
    <h1> {{ $t('page.index.title') }} </h1>
  </header>
</main>
</template>

<script>
export default {
  // html meta data for page
  head() {
    return {
      title: this.$t('page.index.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('page.index.meta.description'),
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/_vars.scss';
</style>
