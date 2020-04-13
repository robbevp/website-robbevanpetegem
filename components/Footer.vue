<template>
  <footer class="footer fixed bottom-0 border-t border-gray-200 py-4 md:py-6 inset-x-auto w-full h-24 md:h-28 bg-green-400 text-white md:text-black md:bg-white">
    <div class="container grid grid-cols-3 mx-auto">
      <ContactButton v-for="button in options" :key="button.icon" :info="button" />
    </div>
  </footer>
</template>

<script>
import ContactButton from '~/components/ContactButton'

export default {
  name: 'Footer',
  components: {
    ContactButton
  },
  data () {
    return {
      options: [
        {
          icon: 'email',
          text: 'robbe@​robbevanpetegem.be',
          url: 'mailto:robbe@robbevanpetegem.be',
          urlBlank: false
        },
        {
          icon: 'phone',
          text: '+32 472 59 14 59',
          url: 'tel:0032472591459',
          urlBlank: false
        },
        {
          icon: 'linkedin',
          text: '/in/robbe-van-petegem',
          url: 'https://www.linkedin.com/in/robbe-van-petegem/',
          urlBlank: true
        }
      ]
    }
  }

}
</script>

<style>

.footer {
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1)
}

</style>
