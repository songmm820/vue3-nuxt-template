<template>
  <div class="container text-amber-300 p-2">
    <h1>首页 {{ runtimeConfig.public.apiBase }}</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>

<style lang="scss" scoped>
.container {
  background: red;
}
</style>
