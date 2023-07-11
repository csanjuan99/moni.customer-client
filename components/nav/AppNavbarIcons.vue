<template>
    <article class="grid grid-cols-3">
        <div class="flex items-center lg:w-full">
            <label for="simple-search" class="sr-only">Search</label>
            <div @click="$emit('mutateIsShowFilter')">
              <button class="relative md:w-20 justify-end flex">
                  <span class="md:absolute inset-y-0 left-0 flex items-center cursor-pointer">
                      <IconMagnifyingGlass />
                  </span>
                  <span class="hidden md:flex">Buscar</span>
                </button>
            </div>
        </div>

        <div class="flex gap-3 col-start-3 justify-end">
          <button class="w-6 hidden md:flex items-center">
            <IconLikeHeart />
          </button>
          <div class="relative flex">
            <button class="flex items-center" @click="$emit('mutateIsShowshopping')">
              <IconShoppingBag />
            </button>
            <div v-if="cart.items.length > 0" class="absolute -right-2 -top-1 cursor-pointer" @click="$emit('mutateIsShowshopping')">
              <span class="relative inline-flex rounded-full h-5 text-white w-5 bg-red-500 justify-center items-center">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span>{{ cart.items.length }}</span>
              </span>
            </div>
          </div>
          <button class="hidden md:flex items-center">
              <nuxt-link to="/account/orders">
              <IconProfile />
            </nuxt-link>
          </button>
        </div>
    </article>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const props = defineProps({
    isShowFilter: {
        type: Boolean,
        required: true,
    },
    isShowshopping: {
        type: Boolean,
        required: true,
    },
});
defineEmits(["mutateIsShowFilter","mutateIsShowshopping"]);
const cart = useCartStore();


</script>