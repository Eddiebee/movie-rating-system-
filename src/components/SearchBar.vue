<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
  searchInput: string;
  showSearchDropdown: boolean;
  searchParameters: string[];
  selectedSearchParameter: string;
}>();

const selectedSearchP = ref(props.selectedSearchParameter);
</script>

<template>
  <div class="flex justify-center mt-4">
    <div class="mb-3 xl:w-96">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
          placeholder="Search Movies..."
          aria-label="Search"
          aria-describedby="button-addon1"
          v-model="searchInput"
        />
        <div class="relative" data-te-dropdown-ref>
          <button
            class="relative z-[2] flex items-center rounded-r bg-green-400 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
            @click="!showSearchDropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <ul
            class="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
            aria-labelledby="dropdownMenuButton1e"
            data-te-dropdown-menu-ref
            v-show="showSearchDropdown"
          >
            <li v-for="searchParameter in searchParameters">
              <span
                :class="`block w-full whitespace-nowrap cursor-pointer bg-transparent ${
                  searchParameter == selectedSearchParameter && 'text-green-500'
                } py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`"
                data-te-dropdown-item-ref
                @click="selectedSearchP = searchParameter"
                >{{ selectedSearchP.toUpperCase() }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
