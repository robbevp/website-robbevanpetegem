<template>
  <main class="container mx-auto grid grid-cols-12 grid-flow-row gap-6 my-4">
    <Header />
    <section id="intro" class="row-start-2 row-span-1 col-start-2 col-span-10 md:col-start-2 md:col-span-7 lg:col-start-2 lg:col-span-5 px-4 md:px-6" v-html="$md.render(intro)" />
    <ProjectCard v-for="(project, index) in projects" :key="`project${index}`" :project="project" :class="{'md:col-start-6': index % 2 === 0 }" />
    <About class="row-start-9" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import json from '~/assets/content/pages/index'
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
      ...json
    }
  },
  computed: {
    ...mapGetters({ projects: 'projects/projects' })
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
