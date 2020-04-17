<template>
  <footer class="footer fixed bottom-0 border-t border-gray-200 py-4 md:py-6 inset-x-auto w-full h-24 md:h-28 bg-green-400 text-white md:text-black md:bg-white">
    <div class="container grid grid-cols-3 mx-auto">
      <ContactButton v-for="option in contactOptions" :key="option.type" :info="option" />
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactButton from '~/components/ContactButton'

export default {
  name: 'Footer',
  components: {
    ContactButton
  },
  computed: {
    ...mapGetters({ contactOptions: 'contactOptions/contactOptions' })
  }
}
</script>

<style>

.footer {
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1)
}

</style>
