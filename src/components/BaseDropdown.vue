<template>
  <button
    class="relative flex z-[2] flex items-center rounded bg-green-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
    type="button"
    id="button-addon1"
    data-te-ripple-init
    data-te-ripple-color="light"
  >
    <slot name="buttonContent"></slot>
  </button>
</template>
