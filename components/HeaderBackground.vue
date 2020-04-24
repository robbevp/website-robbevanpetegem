<template>
  <div class="absolute background w-full left-0 overflow-hidden">
    <svg class="min-h-80 h-full min-w-120vw -ml-20 sm:-ml-8 md:ml-0 fill-gradient" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366.55 501.98">
      <defs>
        <linearGradient id="header-shape-gradient" gradientTransform="rotate(75deg)">
          <stop offset="0%" stop-color="var(--color-start)" />
          <stop offset="100%" stop-color="var(--color-stop)" />
        </linearGradient>
      </defs>
      <path d="M0,0H1366c.17,66.5-.17,225.5,0,292-314.09-97.33-499.55-53.42-629.5,2-106.68,45.49-197.16,173.47-363,202C304.42,507.89,154.23,512.92,63,402,39.16,373,4.4,299.05-.5,277" transform="translate(0.5)" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'HeaderBackground'
}
</script>

<style>

.background {
  bottom: calc(100vh - 20rem);
}

.fill-gradient {
  fill: url(#header-shape-gradient);
}

#header-shape-gradient {
  --color-start: theme('colors.teal.400');
  --color-stop: theme('colors.teal.700');
}

</style>
