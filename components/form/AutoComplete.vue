<script setup lang="ts">
import {debounce} from "perfect-debounce";
import {serverSupabaseClient} from "#supabase/server";
import {Database} from "~/types/supabase";

// interface IProps {
//   api: string,
// }
//
// const props = defineProps<IProps>();

const searchQuery = ref('');
const selectedValue = ref();
const searchResults = ref([]);
const client = useSupabaseClient<Database>()
const loadDebouncer = debounce(handleSearch, 500);
type TBlog = Database['public']['Tables']['blog']['Row']

function selectOption(option: TBlog) {


  selectedValue.value = searchQuery.value = option.title
  searchResults.value = [];
}

async function handleSearch() {
  // const { data, error } = await supabase
  //     .from('products')
  //     .select('id, name')
  //     .ilike('name', `%${searchQuery.value}%`)
  //     .limit(10);
  // const {: uvidime} = await $fetch('/api/blogs', {
  //   method: 'GET',
  //   params: {name: searchQuery.value}
  // })
  const {data: blog} = await client
      .from('blog')
      .select('*').like('title', `${searchQuery.value}%`)

  // const data = uvidime.blog
  // if (error) {
  //   console.error(error);
  //   return;
  // }

  searchResults.value = blog || [];
}

</script>
<template>
  <div class="flex-col">
    <div class="combobox">
      <input
        id="search"
        v-model="searchQuery"
        type="text"
        placeholder="Type here..."
        @input="loadDebouncer"
      >
      <ul
        v-if="searchResults.length"
        class="dropdown"
      >
        <li
          v-for="option in searchResults"
          :key="option.title"
          class="dropdown-item"
          @click="selectOption(option)"
        >
          {{ option.title }}
        </li>
      </ul>
    </div>
    <BlogComponent
      v-if="selectedValue"
      :name="selectedValue.name"
      :description="selectedValue.description"
    />
  </div>
</template>
<style>
.combobox {
  position: relative;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.dropdown-item {
  padding: 0.5rem;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f2f2f2;
}
</style>