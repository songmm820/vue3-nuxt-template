<template>
  <div class="text-amber-300 p-2">
    <h1>首页 {{ runtimeConfig.public.apiBase }}</h1>
    <NuxtLink to="/about">关于页面</NuxtLink>

    <div class="flex gap-2">
      <UButton
        v-for="locale in locales"
        :key="locale.code"
        @click="setLocale(locale.code)"
      >
        {{ locale.name }}
      </UButton>

      <h1>{{ $t('welcome') }}</h1>
    </div>
  </div>

  <UButton>按钮</UButton>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
const { locales, setLocale } = useI18n()

useHead({
  title: '首页',
})
</script>
