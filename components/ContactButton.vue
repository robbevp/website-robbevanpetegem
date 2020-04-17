<template>
  <div class="col-span-1 flex">
    <a :href="info.url" :target="urlTarget" :rel="urlRel" class="w-full md:w-auto md:mx-auto">
      <button class="button flex mx-auto w-16 h-16 md:hover:w-full md:focus:w-full transition-all md:delay-1000 md:hover:delay-0 md:focus:delay-0 md:duration-500 md:ease-in-out rounded-full overflow-hidden md:border-2 border-green-600 md:border-gray-400 hover:border-green-600 active:border-green-800 focus:border-green-600 outline-none">
        <EmailIcon v-if="info.icon === 'email'" class="icon p-3 rounded-full md:transition-all md:delay-1200 md:duration-200 md:hover:delay-0 md:focus:delay-0 md:ease-out" width="36" height="36" />
        <LinkedinIcon v-else-if="info.icon === 'linkedin'" class="icon p-3 rounded-full md:transition-all md:delay-1200 md:duration-200 md:hover:delay-0 md:focus:delay-0 md:ease-out" width="36" height="36" />
        <PhoneIcon v-else-if="info.icon === 'phone'" class="icon p-3 rounded-full md:transition-all md:delay-1200 md:duration-200 md:hover:delay-0 md:focus:delay-0 md:ease-out" width="36" height="36" />
        <span class="my-auto pl-2 pr-5 lg:whitespace-no-wrap hidden md:block" :class="{ 'whitespace-no-wrap': info.text.length < 20 }">
          {{ info.text }}
        </span>
      </button>
    </a>
  </div>
</template>

<script>
import EmailIcon from 'mdi-vue/Email.vue'
import LinkedinIcon from 'mdi-vue/Linkedin.vue'
import PhoneIcon from 'mdi-vue/Phone.vue'

export default {
  name: 'ContactButton',
  components: {
    EmailIcon,
    LinkedinIcon,
    PhoneIcon
  },
  props: {
    info: {
      type: Object,
      required: true,
      validator (value) {
        return [
          'email',
          'linkedin',
          'phone'
        ].includes(value.icon)
      }
    }
  },
  computed: {
    urlTarget () {
      return this.info.urlBlank ? '_blank' : '_self'
    },
    urlRel () {
      return this.info.urlBlank ? 'noopener' : ''
    }
  }
}
</script>

<style>

.button:hover .icon {
  @apply bg-green-400;
  @apply text-white;
  transition-delay: 0ms;
}

.button:focus .icon {
  @apply bg-green-400;
  @apply text-white;
  transition-delay: 0ms;
}

.button:active .icon {
  @apply bg-green-600;
}
</style>
