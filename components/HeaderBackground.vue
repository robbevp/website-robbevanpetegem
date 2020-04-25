<template>
  <div class="absolute md:-bottom-80 w-full left-0 overflow-hidden">
    <svg class="h-84 md:h-full min-w-120vw -ml-16 sm:-ml-8 md:ml-0 fill-gradient" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366.55 495.27">
      <defs>
        <linearGradient id="header-shape-gradient" gradientTransform="rotate(75)">
          <stop offset="0%" stop-color="var(--color-start)" />
          <stop offset="100%" stop-color="var(--color-stop)" />
        </linearGradient>
      </defs>
      <path d="M0-6H1366c.17,66.5-.17,225.5,0,292-314.09-97.33-557-5-601,10C559.53,366.05,533,449,374,483c-99.71,21.32-236.53-14.5-292-66C40,378,10,336-.5,271" transform="translate(0.5 6)"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackground'
}
</script>

<style>

@screen md {
  .md\:-bottom-80 {
    bottom: calc(100vh - 20rem)
  }
}

.fill-gradient {
  fill: url(#header-shape-gradient);
}

#header-shape-gradient {
  --color-start: theme('colors.teal.400');
  --color-stop: theme('colors.teal.600');
}

</style>
