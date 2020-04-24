<template>
  <aside id="about" class="col-span-12 row-span-1 grid grid-cols-12 grid-flow-row gap-6">
    <img :src="image" :alt="imageAlt" class="col-span-12 sm:col-span-4 lg:col-span-3 lg:col-start-2 row-span-1 sm:row-span-2 rounded-full w-full max-w-sm flex mx-auto sm:my-auto p-4" loading="lazy">
    <h2 class="text-2xl text-teal-600 text-center sm:text-left row-span-1 col-span-12 sm:col-span-5 sm:flex sm:my-auto">
      {{ title }}
    </h2>
    <div class="text-md sm:row-start-2 row-span-1 col-span-12 sm:col-start-5 lg:col-start-5 lg:col-end-12 sm:col-end-13 px-4 sm:pl-0" v-html="$md.render(description)" />
  </aside>
</template>

<script>
import { about as aboutContent } from '~/assets/content/pages/index'

export default {
  name: 'About',
  data () {
    return {
      ...aboutContent
    }
  },
  computed: {
    image () {
      return require(`~/assets/img${this.imageUrl}`)
    }
  }
}
</script>

<style>

</style>
