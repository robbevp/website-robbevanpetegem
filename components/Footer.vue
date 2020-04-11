<template>
  <footer class="footer fixed bottom-0 border-t-2 border-gray-400 py-6 inset-x-auto w-full h-28 bg-white">
    <div class="container grid grid-cols-4 mx-auto">
      <div class="col-span-1 col-start-2 flex">
        <a href="mailto:robbe@robbevanpetegem.be" target="_blank" class="">
          <button class="button rounded-full pr-2 flex">
            <EmailIcon class="icon p-3 rounded-full border-2 border-gray-400" width="36" height="36" />
            <span class="my-auto px-2">
              robbe@robbevanpetegem.be
            </span>
          </button>
        </a>
      </div>
      <div class="col-span-1 flex">
        <a href="tel:0032472591459" class="">
          <button class="button rounded-full pr-2 flex">
            <PhoneIcon class="icon p-3 rounded-full border-2 border-gray-400" width="36" height="36" />
            <span class="my-auto px-2">
              +32 472 59 14 59
            </span>
          </button>
        </a>
      </div>
      <div class="col-span-1 flex">
        <a href="https://www.linkedin.com/in/robbe-van-petegem/" target="_blank" class="">
          <button class="button rounded-full pr-2 flex">
            <LinkedinIcon class="icon p-3 rounded-full border-2 border-gray-400" width="36" height="36" />
            <span class="my-auto px-2">
              /in/robbe-van-petegem
            </span>
          </button>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import EmailIcon from 'mdi-vue/Email.vue'
import LinkedinIcon from 'mdi-vue/Linkedin.vue'
import PhoneIcon from 'mdi-vue/Phone.vue'

export default {
  name: 'Footer',
  components: {
    EmailIcon,
    LinkedinIcon,
    PhoneIcon
  }

}
</script>

<style>
.button {
  clip-path: circle(64px at 0);
  transition: clip-path 0.5s ease-in-out;
  transition-delay: 1s;
}

.button:hover {
  clip-path: circle(100%);
  transition-delay: 0s;
}

.button:hover .icon {
  @apply bg-green-400;
  @apply border-green-600;
  @apply text-white;
}

.footer {
  box-shadow: 0 -10px 15px -3px rgba(0, 0, 0, 0.1)
}

</style>
