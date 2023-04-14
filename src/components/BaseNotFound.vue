<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  show: boolean;
}>();
</script>

<template>
  <div
    class="flex justify-center text-black-500 text-lg font-semibold tracking-wide"
    v-if="show"
  >
    <p>no movies found!</p>
  </div>
</template>
/
