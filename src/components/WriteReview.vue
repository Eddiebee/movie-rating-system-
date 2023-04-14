<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
import { Movie, Review } from "../movies";

const props = defineProps<{
  movie: Movie;
}>();

const reviewInput = ref("");

const addReview = (review: string) => {
  if (review) {
    const newReview: Review = { review, reviewer: "eddieabasi" };
    props.movie.reviews.push(newReview);
    reviewInput.value = "";
  } else {
    return;
  }
};
</script>

<template>
  <div class="flex flex-col justify-center mt-2">
    <div class="relative mb-3 xl:w-96">
      <textarea
        class="peer block min-h-[auto] w-full rounded border border-solid border-neutral-300 bg-emerald-50 px-3 pt-[1.5rem] text-black-600 text-sm leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="...amazing review"
        v-model.trim="reviewInput"
      ></textarea>
      <label
        for="exampleFormControlTextarea1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >...amazing review</label
      >
    </div>
    <base-button
      @click="addReview(reviewInput)"
      class="w-[10rem] bg-green-400"
      label="Add Review"
    />
  </div>
</template>
