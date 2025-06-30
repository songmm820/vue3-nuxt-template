<template>
  <div>
    <h1>关于页面</h1>
    <NuxtLink to="/">首页</NuxtLink>
  </div>
</template>
<script lang="ts" setup>
useHead({
  title: "About",
  meta: [
    {
      name: "description",
      content: "About page",
    },
  ],
  script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>
