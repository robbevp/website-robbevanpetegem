<template>
  <section :id="title" class="row-span-2 col-span-12 md:col-span-7 grid grid-cols-7 border border-gray-400 border-4 rounded-lg mx-4 md:mx-0">
    <div class="col-span-4 p-4">
      <h2 class="text-2xl text-purple-600 pb-4">
        {{ title }}
      </h2>
      <div v-html="$md.render(description)" />
    </div>
    <img v-if="imageURL" :src="image" :alt="imageAlt" class="w-full col-span-3 p-4 rounded-lg">
    <q v-if="quote" class="col-span-7 text-center text-2xl italic font-light pt-2 pb-4">
      {{ quote }}
    </q>
  </section>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      ...this.project
    }
  },
  computed: {
    image () {
      if (!this.imageURL) { return }
      return require(`~/assets/img${this.imageURL}`)
    }
  }
}
</script>

<style>

</style>
