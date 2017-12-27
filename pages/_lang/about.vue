<template>
<main>
  <header>
    <h1> {{ $t('page.about.title') }} </h1>
  </header>

  <!-- render data from contentful.com -->
  <ul>
    <li v-for="blogPost in blogPosts">
      <h3>{{ blogPost.fields.title }}</h3>
    </li>
  </ul>


</main>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()
// var blogPosts = ['1', '2']

export default {
  // html meta data for page
  head() {
    return {
      title: this.$t('page.about.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('page.about.meta.description'),
        },
      ],
    }
  },

  // `env` is available in the context object
  asyncData({ env, store }) {
    return Promise.all([
      // fetch all blogPosts sorted by creation date
      client.getEntries({
        locale: store.state.locale,
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      }),
    ])
      .then(([blogPosts]) => {
        // return data that should be available in the template
        return {
          blogPosts: blogPosts.items,
        }
      })
      .catch(console.error)
  },
}
</script>

<style scoped>

</style>

