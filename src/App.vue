<script setup lang="ts">
import Header from './components/Header.vue';
import SearchBar from './components/SearchBar.vue'
import FilterMenu from './components/FilterMenu.vue'
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
              class="border-b bg-emerald-50 dark:border-neutral-500 dark:bg-neutral-700">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Terminator</td>
              <td class="whitespace-nowrap px-6 py-4">2.5</td>
              <td class="whitespace-nowrap px-6 py-4">Action</td>
              <td class="whitespace-nowrap px-6 py-4">2018</td>
              <td class="whitespace-nowrap px-6 py-4">5.0</td>
            </tr>
            <tr
              class="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
              <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
              <td class="whitespace-nowrap px-6 py-4">Die Hard</td>
              <td class="whitespace-nowrap px-6 py-4">4.5</td>
              <td class="whitespace-nowrap px-6 py-4">Action</td>
              <td class="whitespace-nowrap px-6 py-4">2019</td>
              <td class="whitespace-nowrap px-6 py-4">4.0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
