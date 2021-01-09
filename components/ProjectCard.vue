<template>
  <section :id="title.replace(/\s+/g, '').toLowerCase()" class="row-span-2 col-span-12 md:col-span-9 lg:col-span-7 grid grid-cols-7 border border-gray-400 rounded-lg">
    <img
      v-if="imageURL"
      :srcset="image.set"
      :src="image.one"
      :alt="imageAlt"
      :title="imageAlt"
      loading="lazy"
      class="w-full my-auto col-span-7 md:col-span-3 md:order-2 p-4 rounded-lg"
    >
    <div class="col-span-7 md:col-span-4 md:order-1 p-4">
      <h2 class="text-2xl text-green-600 pb-4">
        {{ title }}
      </h2>
      <!-- There currently isn't a better way to render markdown. Since this content isn't user generated we have less to worry about an XSS attack -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$md.render(description)" />
    </div>
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
      return {
        one: require(`~/assets/img${this.imageURL}?resize&size=600`),
        set: require(`~/assets/img${this.imageURL}?resize&sizes=300[]=600&sizes[]=900&sizes[]=1200`)
      }
    }
  }
}
</script>

<style>

</style>
