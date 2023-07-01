<template>
    <article class="flex justify-evenly max-w-sm gap-5">
        <div class="flex items-center lg:w-full">
            <label for="simple-search" class="sr-only">Search</label>
            <div @click="$emit('mutateIsShowFilter')">
              <button class="relative md:w-20 justify-end flex">
                  <span class="md:absolute inset-y-0 left-0 flex items-center cursor-pointer">
                      <IconMagnifyingGlass />
                  </span>
                  <span class="hidden md:flex">Search</span>
                </button>
            </div>
          </div>

          <div class="flex gap-3">
            <span class="w-6 hidden md:flex items-center">
              <IconLikeHeart />
            </span>
            <div class="relative flex">
              <span class="flex items-center" @click="$emit('mutateIsShowshopping')">
               <IconShoppingBag />
              </span>
              <div v-if="cart.items.length > 0" class="absolute -right-2 -top-1" @click="$emit('mutateIsShowshopping')">
                <span class="relative inline-flex rounded-full h-5 text-white w-5 bg-red-500 justify-center items-center">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span>{{ cart.items.length }}</span>
                </span>
              </div>
            </div>
            <span class="hidden md:flex items-center">
              <IconProfile />
            </span>
          </div>
    </article>
</template>

<script>
import { useCartStore } from "~/stores/cart";
export default {
    name: "AppNavbarIcons",
    props: {
        isShowFilter: {
            type: Boolean,
            required: true,
        },
        isShowshopping: {
            type: Boolean,
            required: true,
        },
    },
    emits: ['mutateIsShowFilter','mutateIsShowshopping'],
    data: () => ({
        cart:  useCartStore(),
    }),

}
</script>