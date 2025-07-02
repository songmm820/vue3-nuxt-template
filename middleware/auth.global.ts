/**
 * 全局路由鉴权
 *
 */
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  console.log('全局路由鉴权', to, from)
})
