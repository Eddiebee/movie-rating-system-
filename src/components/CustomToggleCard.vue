<script setup lang="ts">
import StarRating from "vue-star-rating";
import WriteReview from "./WriteReview.vue";
import SuggestRelatedMovies from "./SuggestRelatedMovies.vue";
import BaseList from "./BaseList.vue";
import BaseButton from "./BaseButton.vue";
import { ref, defineProps, watch } from "vue";

const props = defineProps<{
  modelValue: Movie;
  movie: Movie;
}>();

let movieCopy = ref(props.movie);

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
  <div
    class="flex gap-5 flex-wrap bg-slate-50 py-5 px-4 transition-all ease-out duration-700"
  >
    <!-- rating component -->
    <div class="flex flex-col justify-center gap-5">
      <div>
        <star-rating
          :increment="0.5"
          :glow="3"
          :star-size="20"
          active-color="rgb(34,139,34)"
          inactive-color="rgb(211,211,211)"
          @update:rating="setRating"
        />
      </div>
      <base-button
        label="Add rating"
        @click="addRating()"
        :disabled="!rating"
      />
    </div>
    <!-- write review component -->
    <div class="flex-col">
      <base-list :list-items="movie.reviews" item-name="review" />
      <write-review :movie="movie" />
    </div>
    <!-- suggest related movies component -->
    <div class="flex-col">
      <base-list :list-items="movie.suggestions" item-name="suggestion" />
      <suggest-related-movies :movie="movie" />
    </div>
  </div>
</template>
