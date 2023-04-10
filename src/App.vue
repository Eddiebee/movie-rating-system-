<script setup lang="ts">
import Header from "./components/Header.vue";
import SearchBar from "./components/SearchBar.vue";
import FilterMenu from "./components/FilterMenu.vue";
import _ from "lodash";
import { movies } from "./movies";
import { ref } from "vue";

// search functionality
let moviesData = ref(movies);
let searchInput = ref("");
const searchParameters = ref(["title", "date"]);
let selectedSearchParameter = ref("title");
let showSearchDropdown = ref<boolean>(false);

const headings = ["title", "rating", "genre.name", "releaseYear"];

// filter functionality
const showDropdown = ref<boolean>(false);

const genres = ["action", "comedy", "thriller"];

let selectedGenres = ref<Array<String>>([]);

// sort functionality
let iteratees = ref<String[]>([]);
let sortOrders = ref<String[]>([]);

const handleSort = (iteratee: String, sortOrder: String) => {
  if (iteratees.value.includes(iteratee)) {
    const iterateeIndex = iteratees.value.indexOf(iteratee);
    if (sortOrders.value[iterateeIndex] === "asc") {
      sortOrders.value[iterateeIndex] = "desc";
    } else {
      sortOrders.value[iterateeIndex] = "asc";
    }
  } else {
    iteratees.value.push(iteratee);
    sortOrders.value.push(sortOrder);
  }
};

const filteredMovies = () => {
  console.log();
  let filteredMoviesData = moviesData.value.filter((movie) => {
    if (selectedSearchParameter.value === "title") {
      return movie.title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase());
    } else {
      return movie.releaseYear.includes(searchInput.value);
    }
  });

  if (selectedGenres.value.length) {
    filteredMoviesData = filteredMoviesData.filter((movie) =>
      selectedGenres.value.includes(movie.genre.name.toLowerCase())
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
  <Header />
  <!-- <SearchBar/> -->
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
            @click="showSearchDropdown = !showSearchDropdown"
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
                  searchParameter == selectedSearchParameter && 'text-green-400'
                } py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`"
                data-te-dropdown-item-ref
                @click="selectedSearchParameter = searchParameter"
                >{{ searchParameter.toUpperCase() }}</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- <FilterMenu/> -->
  <div class="flex justify-center">
    <div>
      <div class="relative" data-te-dropdown-position="dropend">
        <button
          class="flex items-center whitespace-nowrap rounded bg-green-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
          type="button"
          id="dropdownMenuButton1e"
          data-te-dropdown-toggle-ref
          aria-expanded="false"
          data-te-ripple-init
          data-te-ripple-color="light"
          @click="showDropdown = !showDropdown"
        >
          Genre
          <span class="ml-2 w-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-filter-right"
              viewBox="0 0 16 16"
            >
              <path
                d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
              />
            </svg>
          </span>
        </button>
        <ul
          class="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
          aria-labelledby="dropdownMenuButton1e"
          data-te-dropdown-menu-ref
          v-show="showDropdown"
        >
          <li v-for="genre in genres">
            <span
              :class="`block w-full whitespace-nowrap cursor-pointer bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 ${
                selectedGenres.includes(genre) && 'text-green-400'
              }  hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`"
              data-te-dropdown-item-ref
              @click="
                () => {
                  if (selectedGenres.includes(genre)) {
                    selectedGenres = selectedGenres.filter(
                      (selectedGenre) =>
                        selectedGenre.toLowerCase() !== genre.toLowerCase()
                    );
                  } else {
                    selectedGenres.push(genre.toLowerCase());
                  }
                }
              "
              >{{ genre.toUpperCase() }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Movies Table -->
  <div class="container mx-auto">
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead
                class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600"
              >
                <tr>
                  <th scope="col" class="px-6 py-4 cursor-pointer">#</th>
                  <th
                    scope="col"
                    class="px-6 py-4 cursor-pointer"
                    v-for="heading in headings"
                  >
                    {{ heading.toUpperCase() }}
                    <img
                      src="./assets/arrowUp.svg"
                      class="inline"
                      alt="Sort in ascending order"
                      v-if="sortOrders[iteratees.indexOf(heading)] === 'asc'"
                      @click="
                        () => {
                          handleSort(heading, 'asc');
                        }
                      "
                    />
                    <img
                      src="./assets/arrowDown.svg"
                      class="inline"
                      alt="Sort in ascending order"
                      v-else
                      @click="handleSort(heading, 'desc')"
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b bg-emerald-50 dark:border-neutral-500 dark:bg-neutral-700 transition duration-400 ease-in-out hover:bg-emerald-100 cursor-pointer"
                  v-for="(movie, index) in filteredMovies()"
                  :key="movie._id"
                >
                  <td class="whitespace-nowrap px-6 py-4">{{ index + 1 }}</td>
                  <td class="whitespace-nowrap px-6 py-4">{{ movie.title }}</td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ movie.rating }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ movie.genre.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    {{ movie.releaseYear }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Not Found -->
  <div
    class="flex justify-center text-black-500 text-lg font-semibold tracking-wide"
    v-if="!filteredMovies().length"
  >
    <p>oops... no movies found!</p>
  </div>
</template>
