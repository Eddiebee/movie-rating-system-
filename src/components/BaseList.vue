<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  listItems: [];
  itemName: string;
}>();
</script>

<template>
  <ul class="w-96 px-2 bg-emerald-100" v-for="item in listItems">
    <li
      class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
    >
      {{ item[itemName] ?? item  }}
    </li>
  </ul>
</template>
