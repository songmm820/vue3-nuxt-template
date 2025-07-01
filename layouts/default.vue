<template>
  <header>header</header>
  <slot />
  <footer>footer</footer>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt3 Starter` : 'Nuxt3 Starter'
  },
})
</script>
