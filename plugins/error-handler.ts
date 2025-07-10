export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
    // if (process.client) {
    //   console.log(..._args)
    // }
  })

  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error')
    // if (process.client) {
    //   console.log(..._args)
    // }
  })

  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // 处理错误，例如发送报告到服务
    console.error(error, instance, info, 'error')
  }
})
