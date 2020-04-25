<template>
  <footer>
    <div class="mb-24 md:mb-28 py-4 bg-green-400">
      <p class="text-sm text-center mx-4 text-gray-100">
        {{ legal.name }}, {{ legal.address }} - {{ legal.vat }}
      </p>
    </div>
    <div class="footer fixed bottom-0 py-4 md:py-6 inset-x-auto w-full h-24 md:h-28 bg-green-400 text-white md:text-black md:bg-white z-20">
      <div class="container grid grid-cols-3 mx-auto">
        <ContactButton v-for="option in contactOptions" :key="option.type" :info="option" />
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import { legal } from '~/assets/content/global'
import ContactButton from '~/components/ContactButton'

export default {
  name: 'Footer',
  components: {
    ContactButton
  },
  data () {
    return {
      legal
    }
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
