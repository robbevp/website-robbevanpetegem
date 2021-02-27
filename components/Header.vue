<template>
  <header class="row-span-1 col-span-12 md:col-start-2 md:col-span-10">
    <h1 class="text-4xl pb-4 leading-10 text-white">
      {{ title }}
    </h1>
    <h2 class="subtitle text-gray-100 text-2xl pb-4">
      {{ subtitle }}
    </h2>
  </header>
</template>

<script>
import json from "~/assets/content/global";

export default {
  name: "Header",
  data() {
    return {
      ...json,
    };
  },
};
</script>

<style></style>
