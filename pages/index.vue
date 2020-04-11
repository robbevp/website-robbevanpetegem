<template>
  <div>
    <main class="container mx-auto grid grid-cols-12 grid-flow-row gap-6 my-4">
      <section class="row-span-1 col-span-6">
        <h1 class="text-4xl">
          Robbe Van Petegem
        </h1>
        <h2 class="subtitle text-green-600 text-2xl">
          Digital Facilitator
        </h2>
      </section>
      <section class="row-start-2 row-span-1 col-span-5">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </section>
      <ProjectCard class="row-start-3 md:col-start-6" />
      <ProjectCard class="row-start-5" />
      <ProjectCard class="row-start-7 md:col-start-6" />
      <About class="row-start-9" />
    </main>
  </div>
</template>

<script>
import About from '~/components/About'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    About,
    ProjectCard
  }
}
</script>

<style>

</style>
