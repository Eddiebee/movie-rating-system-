<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>();
</script>

<template>
  <header>
    <nav
      class="relative flex w-full items-center justify-between bg-green-400 py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    >
      <div class="flex w-full flex-wrap items-center justify-between px-6">
        <div
          class="grow basis-[100%] items-center lg:basis-auto"
          id="navbarSupportedContentY"
        >
          <ul class="mr-auto flex flex-col lg:flex-row">
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                href="#!"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
                >Movies Rating System</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div
      class="bg-green-50 py-20 px-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200"
    >
      <h1 class="mb-6 text-5xl font-bold">Movie Rating System</h1>
      <h3 class="mb-8 text-2xl font-light">...built with our beloved Vue.js</h3>
    </div>
  </header>
</template>

<style scoped></style>
