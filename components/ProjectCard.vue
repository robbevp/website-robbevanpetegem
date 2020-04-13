<template>
  <section class="row-span-2 col-span-12 md:col-span-7 grid grid-cols-7 border border-gray-400 border-4 rounded-lg mx-4 md:mx-0">
    <div class="col-span-4 p-4">
      <h2 class="text-2xl text-purple-600 pb-4">
        {{ project.name }}
      </h2>
      <p>
        {{ project.description }}
      </p>
    </div>
    <img v-if="project.imageUrl" :src="image" :alt="project.imageAlt" class="w-full col-span-3 p-4 rounded-lg">
    <q v-if="project.quote" class="col-span-7 text-center text-2xl italic font-light pt-2 pb-4">
      {{ project.quote }}
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
  computed: {
    image () {
      if (!this.project.imageUrl) { return }
      return require(`~/assets/img/${this.project.imageUrl}`)
    }
  }
}
</script>

<style>

</style>
