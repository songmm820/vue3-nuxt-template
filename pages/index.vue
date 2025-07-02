<template>
  <div class="text-amber-300 p-2">
    <h1>首页 {{ runtimeConfig.public.apiBase }}</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>
  </div>

  <UButton>按钮</UButton>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()

useHead({
  title: '首页',
})
</script>
