<template>
  <section class="col-span-12 row-span-1 grid grid-cols-12 grid-flow-row gap-6">
    <img :src="require('~/assets/img/placeholder.png')" class="col-span-3 row-span-2 rounded-full p-4">
    <h2 class="text-2xl text-green-600 row-span-1 col-span-9 flex my-auto">
      About Robbe
    </h2>
    <p class="text-md row-start-2 row-span-1 col-span-9 col-start-4">
      Some hype text and bla bla here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </p>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>

</style>
