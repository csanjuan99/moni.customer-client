<template>
    <section class="flex flex-col">
        <button 
         @click="isShow = 'block'"
        class="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button">{{ size }}
        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
    </button>
    <!-- Dropdown menu -->
    <div :class="isShow" class="z-10 absolute bg-white divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    @mouseenter="isShow = 'block'" @mouseleave="isShow = 'hidden'" @click="isShow = 'hidden'">
        <ul class="py-2 text-sm text-gray-700">
            <li @click="size = 'S'">
                <h3 class="block px-4 py-2 hover:bg-gray-100">S</h3>
            </li>
            <li @click="size = 'M'">
                <h3 class="block px-4 py-2 hover:bg-gray-100">M</h3>
            </li>
            <li @click="size = ' L'">
                <h3 class="block px-4 py-2 hover:bg-gray-100">L</h3>
            </li>
        </ul>
    </div>
    </section>
</template>
<script setup lang="ts">
const size = ref('S')
const isShow = ref('hidden')
</script>