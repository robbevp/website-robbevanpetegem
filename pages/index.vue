<template>
  <div>
    <main class="container mx-auto grid grid-cols-12 grid-flow-row gap-6 my-4">
      <Header />
      <section class="row-start-2 row-span-1 col-start-2 col-span-10 md:col-start-2 md:col-span-7 lg:col-start-2 lg:col-span-5 px-4 md:px-6">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </section>
      <ProjectCard v-for="(project, index) in projects" :key="`project${index}`" :project="project" :class="{'md:col-start-6': index % 2 === 0 }" />
      <About class="row-start-9" />
    </main>
  </div>
</template>

<script>
import About from '~/components/About'
import Header from '~/components/Header'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    About,
    Header,
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          name: 'Project 1',
          description: "Some description of the project here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          quote: '',
          imageUrl: 'placeholder.png',
          imageAlt: 'placeholderImage'
        },
        {
          name: 'Project 2',
          description: "Some description of the project here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          quote: 'A really nice quote from the client',
          imageUrl: 'placeholder.png',
          imageAlt: 'placeholderImage'
        },
        {
          name: 'Project 3',
          description: "Some description of the project here. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          quote: '',
          imageUrl: 'placeholder.png',
          imageAlt: 'placeholderImage'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Robbe Van Petegem | Digital Facilitator',
      meta: [
        { hid: 'description', name: 'description', content: 'Digital Facilitator' }
      ]
    }
  }
}
</script>

<style>

</style>
