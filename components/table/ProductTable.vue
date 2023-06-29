<template>
    <section class="flex w-full">
        <section class="rounded-lg border border-gray-200 shadow-sm">
            <article
            class="w-full hidden md:grid md:grid-cols-4 text-gray-500 font-inter uppercase text-xs font-semibold bg-gray-50 lg:grid-cols-5 px-4 py-6 justify-items-center">
                    <section class="justify-self-start">PRODUCT</section>
                    <section>TALLA</section>
                    <section>QUANTITY</section>
                    <section>TOTAL PRICE</section>
            </article>
            <article v-for="(item, index) in cart.items" :key="index" class="border-gray-200 border-b flex flex-col sm:grid md:grid-cols-4 lg:grid-cols-5 px-4 py-6">
                <section class="flex gap-2">
                    <img class="w-24 lg:w-auto lg:max-w-12 lg:max-h-16"
                        :src="`${config.public.baseURL}${item.attributes.media.data[0].attributes.url}`" />
                    <article class="flex flex-col max-h-[60px]">
                        <h3 class="font-poppins font-medium leading-[150%]">{{ item.attributes.name }}</h3>
                        <p class="font-poppins text-sm text-gray-500 leading-[150%]">{{ item.attributes.description }}</p>
                    </article>
                </section>
                <section class="flex font-poppins font-medium leading-[150%] justify-center items-center">
                    <DropdownSizeDropdownApp/>
                </section>
                <section class="flex justify-center items-center">
                    <ButtonCounterButtonApp :quantity="quantity" />
                </section>
                <section class="flex flex-col justify-center items-center">
                    <h2 :class="item.attributes.discount ? 'line-through font-inter text-gray-500' : ''"
                        class="font-poppins">
                        {{ item.attributes.price * quantity }}
                    </h2>
                    <h2 v-if="item.attributes.discount" class="font-poppins">
                        {{ discount(item.attributes.price * quantity, item.attributes.discount) }}
                    </h2>
                </section>
                <section class="flex justify-center items-center">
                    <h3 class="text-red-600 text-xs hover:cursor-pointer flex gap-1 items-center font-poppins" @click="">
                        <svg class="w-[14px] h-[14px] text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 18 20">
                            <path
                                d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                        </svg> Remove
                    </h3>
                </section>
            </article>
        </section>
    </section>
</template>
<script setup lang="ts">
//Imports
import { useCartStore } from '~/stores/cart';

//Initializations
const config = useRuntimeConfig()
const cart = useCartStore()

//States
const quantity = ref(1)

//Methods
const discount = (price: number, discount?: number) => {
    if (!discount) return;
    return (price - (price * discount) / 100)
}
</script>
