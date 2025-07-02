export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // 处理错误，例如发送报告到服务
    console.error(error, instance, info, 'error')
  }
})
