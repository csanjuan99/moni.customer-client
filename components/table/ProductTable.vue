<template>
    <section class="min-w-[1562px] min-h-[672px] overflow-auto">
        <article v-for="(item, index) in cart.items" :key="index">
            <section class="flex gap-2">
                <img class="max-w-12 max-h-16"
                    :src="`${config.public.baseURL}${item.attributes.media.data[0].attributes.url}`" />
                <article class="flex flex-col">
                    <h3 class="font-poppins font-medium leading-[150%]">{{ item.attributes.name }}</h3>
                    <p class="font-poppins text-sm text-gray-500 leading-[150%]">{{ item.attributes.description }}</p>
                </article>
            </section>
            <section>
                Talla: S
            </section>
            <section>
                <article class="w-14 flex items-center justify-center bg-gray-100 gap-1 rounded-md">
                    <article class="hover:cursor-pointer" @click="`${quantity >= 2 ? quantity-- : null}`">-</article>
                    <article>{{ quantity }}</article>
                    <article class="hover:cursor-pointer" @click="quantity++">+</article>
                </article>
            </section>
        </article>
    </section>
</template>
<script setup lang="ts">

/**
 * TODO: Destroy Item Method when Quantity is 0 or minor
 * Bacsially we need remove this item to State in Pinia
 * TODO:
 */

//Imports
import { useCartStore } from '~/stores/cart';

//Initializations
const config = useRuntimeConfig()
const cart = useCartStore()

//Item State
const quantity = ref(1)
</script>