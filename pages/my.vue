<script setup lang="ts">
// definePageMeta({
//   middleware: 'auth'
// })
const colorMode = useColorMode()
const client = useSupabaseClient()
const {data: tasks} = await useAsyncData('tasks', async () => {
  const {data} = await client.from('tasks').select('*')
  console.log(tasks)
  return data
})
</script>

<template>
  <div class="p-10">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
