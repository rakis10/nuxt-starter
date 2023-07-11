<script setup lang="ts">
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const colorMode = useColorMode()

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const colorModeIcon = computed(() => colorMode.preference === 'dark' ? 'i-heroicons-outline-moon' : 'i-heroicons-outline-sun')

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <div>
    <Title>Nuxt 3 x Supabase</Title>
    <div class="flex items-center md:justify-between justify-center">
      <div class="hidden md:block ms-5">
        <!--        <UButton-->
        <!--          label="Tasks"-->
        <!--          variant="transparent"-->
        <!--          to="/tasks"-->
        <!--        />-->
        <NuxtLink
          variant="transparent"
          to="/blogs"
        >
          Blog
        </NuxtLink>
        <NuxtLink
          variant="transparent"
          to="/story"
        >
          Story
        </NuxtLink>
        <NuxtLink
          variant="transparent"
          to="/tasks"
          class="ms-5"
        >
          Tasks
        </NuxtLink>
        <NuxtLink
          variant="transparent"
          to="/register"
          class="ms-5"
        >
          Register
        </NuxtLink>
        <NuxtLink
          variant="transparent"
          to="/login"
          class="ms-5"
        >
          Login
        </NuxtLink>
      </div>
      <div class="flex items-center">
        <UButton
          variant="transparent"
          :icon="colorModeIcon"
          @click="toggleDark"
        />
        <UButton
          v-if="user"
          class="u-text-white"
          variant="transparent"
          @click="logout"
        >
          Logout
        </UButton>
      </div>
    </div>
  </div>
</template>
