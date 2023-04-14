<script setup lang="ts">
import CustomMovieListItem from "./CustomMovieListItem.vue";
import CustomToggleCard from "./CustomToggleCard.vue";
import { ref, defineProps } from "vue";
import { Movie } from "../movies";

const props = defineProps<{
  movies: Movie[];
}>();
</script>

<template>
  <tbody v-for="(movie, index) in movies">
    <custom-movie-list-item :movie="movie" :index="index">
      <template #toggleCard>
        <custom-toggle-card :movie="movie" :model-value="movie" />
      </template>
    </custom-movie-list-item>
  </tbody>
</template>
