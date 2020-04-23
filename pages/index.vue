<template>
  <main class="container my-4 grid grid-cols-12 grid-flow-row gap-6">
    <Header class="py-5 mt-24" />
    <section id="intro" class="row-start-2 row-span-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-7 lg:col-start-2 lg:col-span-5 md:px-4" v-html="$md.render(intro)" />
    <ProjectCard v-for="(project, index) in projects" :key="`project${index}`" :project="project" :class="{'md:col-start-4 lg:col-start-6': index % 2 === 0 }" />
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
