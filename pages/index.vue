<template>
  <main class="container mb-4 grid grid-cols-12 grid-flow-row col-gap-6 row-gap-16">
    <HeaderBackground class="text-teal-500 -z-10" />
    <Header class="py-10 mt-28 z-10" />
    <!-- There currently isn't a better way to render markdown. Since this content isn't user generated we have less to worry about an XSS attack -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section id="intro" class="row-start-2 row-span-1 col-span-12 sm:col-start-2 sm:col-span-10 md:col-start-2 md:col-span-7 lg:col-start-2 lg:col-span-5" v-html="$md.render(intro)" />
    <ProjectCard v-for="(project, index) in projects" :key="`project${index}`" :project="project" :class="{'md:col-start-4 lg:col-start-6': index % 2 === 0 }" />
    <About class="row-start-9" />
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import json from '~/assets/content/pages/index'
import About from '~/components/About'
import Header from '~/components/Header'
import HeaderBackground from '~/components/HeaderBackground'
import ProjectCard from '~/components/ProjectCard'

export default {
  components: {
    About,
    Header,
    HeaderBackground,
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
