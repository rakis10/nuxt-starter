<template>
  <div class="min-h-screen flex items-center justify-center ">
    <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold mb-6">
        Register
      </h1>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label
            for="name"
            class="block text-gray-700"
          >Name</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="form-input mt-1 block w-full"
            required
          >
        </div>
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
            Register
          </button>
          <router-link
            to="/login"
            class="text-gray-600 hover:underline"
          >
            Already have an account? Login
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const client = useSupabaseClient();
const name = ref('');
const email = ref('');
const password = ref('');

const register = async () => {
  const { data, error } = await client.auth.signUp({
    email: 'example@email.com',
    password: 'example-password',
    options: {
      data: {
        name: name.value,
      }
    }
  })
  if (error){

  }
};
</script>

<style>
.btn-primary {
  @apply bg-indigo-600 text-white hover:bg-indigo-700;
}
</style>
