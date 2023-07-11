<script setup lang="ts">
import {BlogComponent} from "#components";
import LoginNext from "~/components/login/LoginNext.vue";

const blog = ref([])
export type TBlog = {
  title: string
  description: string
}

const newTask = ref<TBlog>({
  title: '',
  description: '',
})

async function addBlog() {
  const uvidime = await $fetch('/api/blogs/', {
    method: 'POST',
    body: newTask.value
  })
  console.log(uvidime)
  getBlogs()
}

async function getBlogs() {
  const {data: lol} = await $fetch('/api/blogs/')

  // blog.value = lol
  // console.log(lol)
}

onMounted(() => {
  getBlogs()
})
</script>

<template>
  <div class="mt-10">
    <LoginNext />
    <div class="card w-96 bg-base-100 shadow-xl">
      <form
        class=" gap-2 my-2"
        @submit.prevent="addBlog"
      >
        <UInput
          v-model="newTask.title"
          class="w-full"
          size="xl"
          variant="white"
          type="text"
          name="name"
          placeholder="Title"
          autofocus
          autocomplete="off"
        />
        <UInput
          v-model="newTask.description"
          class="w-full"
          size="xl"
          variant="white"
          type="text"
          name="desc"
          placeholder="Make a coffee"
          autocomplete="off"
        />
        <UButton
          type="submit"
          variant="white"
        >
          Add
        </UButton>
      </form>
    </div>
    <div
      v-for="item in blog"
      :key="item.title"
    >
      <BlogComponent
        :name="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>
