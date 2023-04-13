<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  modelValue: string;
  parameters: string[];
}>();
</script>

<template>
  <ul
    class="absolute z-[1000] float-left m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
    aria-labelledby="dropdownMenuButton1e"
    data-te-dropdown-menu-ref
  >
    <li v-for="parameter in parameters">
      <span
        :class="`block w-full whitespace-nowrap cursor-pointer bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 ${
          modelValue == parameter && 'text-emerald-400'
        }  hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600`"
        data-te-dropdown-item-ref
        @click="$emit('update:modelValue', parameter)"
        >{{ parameter.toUpperCase() }}</span
      >
    </li>
  </ul>
</template>
