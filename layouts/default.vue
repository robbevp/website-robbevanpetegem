<template>
  <div>
    <nuxt class="mb-28" />
    <Footer />
  </div>
</template>

<script>
import settings from '~/assets/content/global.json'
import Footer from '~/components/Footer'

export default {
  components: {
    Footer
  },
  data () {
    return {
      ...settings
    }
  },
  head () {
    return {
      title: this.seo.title,
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description }
      ]
    }
  }
}
</script>
<style>

</style>
