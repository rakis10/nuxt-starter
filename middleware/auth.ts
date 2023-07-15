export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser()

  if (!user.value && to.path === '/blogs') {
    return navigateTo('/')
  }else if (user.value && to.path === '/'){
      navigateTo('/blogs')
  }
})
