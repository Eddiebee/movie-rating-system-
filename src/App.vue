<script setup lang="ts">
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue'
import FilterMenu from './components/FilterMenu.vue'
import { movies } from './movies';
</script>

<template>
  <Header/>
  <SearchBar/>
  <FilterMenu/>
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead
            class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Title 
                <img src="./assets/arrowUp.svg" class="inline" alt="Sort in ascending order" />
                <img src="./assets/arrowDown.svg" class="inline" alt="Sort in ascending order" />
              </th>
              <th scope="col" class="px-6 py-4">Rating</th>
              <th scope="col" class="px-6 py-4">Genre</th>
              <th scope="col" class="px-6 py-4">Release Year</th>
              <th scope="col" class="px-6 py-4">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-emerald-50 dark:border-neutral-500 dark:bg-neutral-700" v-for="movie, index in movies">
              <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ movie.title  }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ movie.rating }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ movie.genre.name }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ movie.releaseYear }}</td>
              <td class="whitespace-nowrap px-6 py-4">{{ movie.rating }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
