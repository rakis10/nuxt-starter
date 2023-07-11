<script setup lang="ts">
interface IProps {
  name: string,
  description: string,
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="p-10">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        >
      </figure>
      <div class="card-body">
        <h2
          class="card-title"
          v-text="props.name"
        />
        <p v-text="props.description" />
        <div class="card-actions justify-end">
          <button
            class="btn btn-primary"
            @click="getBlogs"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
