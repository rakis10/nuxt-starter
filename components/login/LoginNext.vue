<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6">
        Login
      </h1>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700"
          >Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            class="form-input mt-1 block w-full"
            required
          >
        </div>
        <div class="mb-4">
          <label
            for="password"
            class="block text-gray-700"
          >Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            class="form-input mt-1 block w-full"
            required
          >
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="btn btn-primary"
          >
            Login
          </button>
          <router-link
            to="/register"
            class="text-gray-600 hover:underline"
          >
            Don't have an account? Register
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref()
const password = ref()


</script>

<style>
.btn-primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700;
}
</style>
