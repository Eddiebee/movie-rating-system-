<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import BaseInput from "./BaseInput.vue";
import { ref, defineProps } from "vue";
import { Movie, Suggestion } from "../movies";

const props = defineProps<{
  movie: Movie;
}>();

const suggestionInput = ref<string>("");

const addSuggestion = (suggestion: string, movieId: string) => {
  if (suggestion) {
    const newSuggestion: Suggestion = { suggestion, suggestedBy: "eddieabasi" };
    props.movie.suggestions.push(newSuggestion);
    suggestionInput.value = "";
  } else {
    return;
  }
};
</script>

<template>
  <div class="flex flex-col justify-center gap-3 mt-2">
    <base-input
      v-model.trim="suggestionInput"
      label="Suggest Movies"
      class="w-[20rem]"
    />
    <base-button
      label="Suggest Related Movies"
      class="w-[15rem]"
      @click="addSuggestion(suggestionInput, movie._id)"
    />
  </div>
</template>
