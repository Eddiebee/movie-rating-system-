<script setup lang="ts">
import { ref } from "vue";
import { Movies, Review } from "../movies";

const props = defineProps<{
  movie: Movies;
}>();

const reviewInput = ref("");

const addReview = (review: string, movieId: string) => {
  const newReview: Review = { review, reviewer: "eddieabasi" };
  props.movie.reviews.push(newReview);
  reviewInput.value = "";
};
</script>

<template>
  <div class="flex flex-col justify-center gap-5 mt-2">
    <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
      <textarea
        class="peer block min-h-[auto] w-full rounded border-0 bg-emerald-50 px-3 pt-[1.5rem] text-black-600 text-sm leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="...amazing review"
        v-model="reviewInput"
      ></textarea>
      <label
        for="exampleFormControlTextarea1"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >...amazing review</label
      >
    </div>
    <button
      type="button"
      class="w-[10rem] weweweinline-block rounded bg-green-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)]"
      @click="addReview(reviewInput, movie._id)"
    >
      Add review
    </button>
  </div>
</template>
