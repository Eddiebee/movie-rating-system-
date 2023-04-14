<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();
</script>

<template>
  <input
    type="search"
    class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
    placeholder="Search Movies..."
    aria-label="Search"
    aria-describedby="button-addon1"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
