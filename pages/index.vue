<template>
  <div>
    <h1>首页 {{ runtimeConfig.public.apiBase }}</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>
  </div>
</template>
<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
console.log();
</script>
