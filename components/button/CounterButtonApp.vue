<template>
    <article class="w-[59px] max-h-[18px] flex items-center justify-center bg-gray-100 gap-1 rounded-md">
        <article 
        class="hover:cursor-pointer" @click="`${quantity >= 2 ? quantity-- : null}`">-</article>
        <article>{{ quantity }}</article>
        <article class="hover:cursor-pointer" @click="quantity++">+</article>
    </article>
</template>
<script setup lang="ts">
const props = defineProps({
    quantity: {
        type: Number,
        default: 1
    }
})
</script>