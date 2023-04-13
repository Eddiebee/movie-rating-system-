<script setup lang="ts">
import { defineProps } from "vue";
import { Movie } from "../movies";

const props = defineProps<{
  movie: Movie;
  index: number;
}>();
</script>

<template>
  <div>
    <!-- table row -->
    <div>
      <tr
        class="border-b bg-emerald-50 dark:border-neutral-500 dark:bg-neutral-700 transition duration-400 ease-in-out hover:bg-emerald-100 cursor-pointer flex-wrap"
      >
        <td class="whitespace-nowrap px-6 py-4">
          {{ index + 1 }}
        </td>
        <td class="whitespace-nowrap px-6 py-4">
          {{ movie.title }}
        </td>
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
    </div>
    <!-- card stuff -->
    <slot name="toggleCard"></slot>
  </div>
</template>
