<template>
  <UApp :locale="en">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { en } from '@nuxt/ui/locale'
</script>
