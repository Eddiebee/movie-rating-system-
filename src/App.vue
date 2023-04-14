<script setup lang="ts">
import Header from "./components/Header.vue";
import BaseDropdown from "./components/BaseDropdown.vue";
import BaseDropdownList from "./components/BaseDropdownList.vue";
import BaseInput from "./components/BaseInput.vue";
import BaseNotFound from "./components/BaseNotFound.vue";
import CustomMovieList from "./components/CustomMovieList.vue";
import FilterIcon from "./assets/icons/FilterIcon.vue";
import ChevronDownIcon from "./assets/icons/ChevronDownIcon.vue";
import ArrowUpIcon from "./assets/icons/ArrowUpIcon.vue";
import ArrowDownIcon from "./assets/icons/ArrowDownIcon.vue";
import _ from "lodash";
import sort from "./utils/sort";
import { movies } from "./movies";
import { ref } from "vue";

// search functionality
let moviesData = ref(movies);
let searchInput = ref<string>("");
const searchParameters = ref(["title", "date"]);
let selectedSearchParameter = ref("title");
let showSearchDropdown = ref<boolean>(false);

const headings = ["title", "rating", "genre.name", "releaseYear"];
const formattedHeadings = ["title", "rating", "genre", "release year"];

const showFilterDropdown = ref<boolean>(false);

const genres = ["action", "comedy", "thriller"];

let selectedGenre = ref<string>("");

// sort feature
let iteratees = ref<any[]>([]);
let sortOrders = ref<any[]>([]);

const handleSort = (iteratee: string, sortOrder: string) => {
  const { sorted, orders } = sort(
    iteratee,
    sortOrder,
    iteratees.value,
    sortOrders.value
  );

  iteratees.value = sorted;
  sortOrders.value = orders;
};

// filter feature
const filteredMovies = () => {
  let filteredMoviesData = moviesData.value.filter((movie) => {
    if (selectedSearchParameter.value === "title") {
      return movie.title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    } else {
      return movie.releaseYear.includes(searchInput.value);
    }
  });

  if (selectedGenre.value) {
    filteredMoviesData = filteredMoviesData.filter((movie) =>
      selectedGenre.value.includes(movie.genre.name.toLowerCase())
    );
  }

  if (iteratees.value.length && sortOrders.value.length) {
    filteredMoviesData = _.orderBy(
      filteredMoviesData,
      iteratees.value,
      sortOrders.value
    );
  }

  return filteredMoviesData;
};
</script>

<template>
  <Header title="Movie Rating System" msg="...built with our beloved Vue.js" />
  <!-- custom search input -->
  <div class="flex justify-center mt-4">
    <div class="mb-3 xl:w-96">
      <div class="relative mb-4 flex w-full flex-wrap items-center gap-4">
        <base-input v-model="searchInput" label="Search" type="search" />
        <div class="relative" data-te-dropdown-position="dropend">
          <base-dropdown
            @click="showSearchDropdown = !showSearchDropdown"
            class="ml-[-6rem]"
          >
            <template #buttonContent>
              <chevron-down-icon />
            </template>
          </base-dropdown>
          <base-dropdown-list
            v-model="selectedSearchParameter"
            v-show="showSearchDropdown"
            :parameters="searchParameters"
            @click="showSearchDropdown = !showSearchDropdown"
            class="ml-[-6rem]"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Filter Menu -->
  <div class="flex justify-center">
    <div class="relative" data-te-dropdown-position="dropend">
      <base-dropdown @click="showFilterDropdown = !showFilterDropdown">
        <template #buttonContent>
          Genre
          <span class="ml-2 w-1.5">
            <filter-icon />
          </span>
        </template>
      </base-dropdown>
      <base-dropdown-list
        v-model="selectedGenre"
        :parameters="genres"
        v-show="showFilterDropdown"
        @click="showFilterDropdown = !showFilterDropdown"
      />
    </div>
  </div>
  <!-- Movies Table -->
  <div class="container mx-auto">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">#</th>
                  <th
                    scope="col"
                    class="px-6 py-4 cursor-pointer"
                    v-for="(heading, index) in headings"
                  >
                    <span
                      v-if="sortOrders[iteratees.indexOf(heading)] === 'asc'"
                      @click="handleSort(heading, 'asc')"
                      >{{ formattedHeadings[index].toUpperCase() }}
                      <arrow-up-icon class="inline"
                    /></span>
                    <span v-else @click="handleSort(heading, 'desc')">
                      {{ formattedHeadings[index].toUpperCase() }}
                      <arrow-down-icon class="inline" />
                    </span>
                  </th>
                </tr>
              </thead>
              <!-- tbody -->
              <custom-movie-list :movies="filteredMovies()" />
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- If Data Not Found -->
  <base-not-found :show="!filteredMovies().length" />
</template>
