<template>
  <div class="flex flex-col h-screen">
    <DefaultLayoutHeader />
    <main class="flex-1">
      <slot />
    </main>
    <DefaultLayoutFooter />
  </div>
</template>

<script setup lang="ts">
import DefaultLayoutHeader from '~/components/DefaultLayoutHeader.vue'
import DefaultLayoutFooter from '~/components/DefaultLayoutFooter.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Nuxt3 Starter` : 'Nuxt3 Starter'
  },
})
</script>
