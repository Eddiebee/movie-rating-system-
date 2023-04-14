<script setup lang="ts">
import StarRating from "vue-star-rating";
import WriteReview from "./WriteReview.vue";
import SuggestRelatedMovies from "./SuggestRelatedMovies.vue";
import BaseList from "./BaseList.vue";
import BaseButton from "./BaseButton.vue";
import { ref, defineProps } from "vue";
import { Movie } from "../movies";

const props = defineProps<{
  modelValue: Movie;
  movie: Movie;
}>();

let rating = ref<number>(0);

const setRating = (r: number) => {
  rating.value = r;
};

const addRating = () => {
  if (rating.value) {
    const avgRating = Number(
      ((rating.value + props.movie.rating) / 2).toFixed(2)
    );
    props.movie.rating = avgRating;
    rating.value = 0;
  } else {
    return;
  }
};
</script>

<template>
  <td colspan="5" class="gap-5 py-5 px-2">
    <div class="md:flex md:justify-evenly md:items-center">
      <!-- rating component -->
      <div class="flex-col justify-center gap-5 mb-4">
        <star-rating
          :increment="0.5"
          :glow="3"
          :star-size="20"
          active-color="rgb(34,139,34)"
          inactive-color="rgb(211,211,211)"
          @update:rating="setRating"
        />
        <base-button
          label="Add rating"
          @click="addRating()"
          :disabled="!rating"
          class="mt-2"
        />
      </div>
      <!-- write review component -->
      <div class="justify-center gap-5">
        <write-review :movie="movie" class="w-[20rem]" />
        <base-list :list-items="movie.reviews" item-name="review" />
      </div>
      <!-- suggest related movies component -->
      <div class="flex-col justify-center">
        <suggest-related-movies :movie="movie" />
        <base-list :list-items="movie.suggestions" item-name="suggestion" />
      </div>
    </div>
  </td>
</template>
