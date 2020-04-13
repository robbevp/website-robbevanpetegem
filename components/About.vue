<template>
  <aside class="col-span-12 row-span-1 grid grid-cols-12 grid-flow-row gap-6">
    <img :src="image" :alt="imageAlt" class="col-span-12 sm:col-span-4 md:col-span-3 row-span-1 sm:row-span-2 rounded-full w-full max-w-sm flex mx-auto sm:my-auto p-4">
    <h2 class="text-2xl text-green-600 text-center sm:text-left row-span-1 col-span-12 sm:col-span-5 sm:flex sm:my-auto">
      {{ title }}
    </h2>
    <p class="text-md sm:row-start-2 row-span-1 col-span-12 sm:col-start-5 md:col-start-4 sm:col-end-13 pl-4 pr-4 sm:pl-0">
      {{ description }}
    </p>
  </aside>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      title: 'About Robbe',
      description: "Some hype text and bla bla here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      imageUrl: 'placeholder.png',
      imageAlt: 'A photo of Robbe'
    }
  },
  computed: {
    image () {
      return require(`~/assets/img/${this.imageUrl}`)
    }
  }
}
</script>

<style>

</style>
