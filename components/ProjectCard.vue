<template>
  <section class="row-span-2 col-span-12 md:col-span-7 grid grid-cols-7 border border-gray-400 border-4 rounded-lg">
    <div class="col-span-4 p-4">
      <h2 class="text-2xl text-purple-600 pb-4">
        Project Name
      </h2>
      <p>
        Some description of the project here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
      </p>
    </div>
    <img :src="require('~/assets/img/placeholder.png')" class="w-full col-span-3 p-4 rounded-lg">
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
  }
}
</script>

<style>

</style>
