<script setup lang="ts">
// composables
const config = useRuntimeConfig()

// props
const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  },
})

// data
const sizes = [
  {
    name: 'xs',
    value: 'xs'
  },
  {
    name: 's',
    value: 's'
  },
  {
    name: 'm',
    value: 'm'
  },
  {
    name: 'l',
    value: 'l'
  },
  {
    name: 'xl',
    value: 'xl'
  },
]

const isShow = ref(false)


</script>

<template>
  <article
      class="flex flex-col gap-3.5 justify-between overflow-hidden relative"
  >
    <label v-if="product.attributes.discount"
           class="font-poppins bg-green-600 text-white text-sm font-normal absolute top-10 right-10 z-10 px-5 py-2.5 rounded-xl">
      <span>Sale</span>
    </label>
    <NuxtLink :to="`/products/${product.attributes.slug}`" class="h-auto overflow-hidden rounded-3xl z-0 relative">
      <picture>
        <img :class="isShow ? 'scale-125':''"
             class="h-full w-full object-cover transition-all  ease-in-out duration-300 rounded-3xl"
             :src="`${config.public.baseURL}${product.attributes.media.data[0].attributes.url}`"
             alt="" @mouseover="() => { isShow = true }" @mouseleave="() => { isShow = false }">
      </picture>
      <div :class="isShow ? 'visible':'invisible'"
           class="absolute bottom-0 left-0 w-full px-2 md:px-6 2xl:px-10 py-10 ease-in-out duration-100"
           @mouseover="() => { isShow = true }" @mouseleave="() => { isShow = false }">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <h2>Agregar a la bolsa</h2>
          <div class="flex rounded-full mt-4 justify-center">
            <div v-for="(element,index) in sizes" :key="index"
                 class="flex items-center justify-center w-10 h-10 text-black hover:text-white hover:bg-gray-400 rounded-full mx-2">
              <span class="uppercase">{{ element.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
    <article class="flex flex-row justify-between p-2">
      <div class="flex flex-col items-start gap-2 h-max"
           @mouseover="() => { isShow = true }"
           @mouseleave="() => { isShow = false }">
        <h3 class="font-poppins text-xl text-gray-900">
          {{ product.attributes.name }}
        </h3>
        <div class="flex items-center gap-2 2xl:gap-2 text-sm">
          <span class="font-poppins font-semibold text-red-600 " v-if="product.attributes.discount">
            {{
              useDiscount(
                  product.attributes.price,
                  product.attributes.discount
              )
            }}
          </span>
          <span :class="[product.attributes.discount ? 'line-through text-gray-400': '']"
                class="font-poppins text-gray-900 py-1.5">
              {{ useCurrency(product.attributes.price) }}
          </span>
          <label v-if="product.attributes.discount"
                 class="font-poppins bg-green-600 text-white font-medium px-3.5 py-1.5 rounded-xl">
            <span>- {{ product.attributes.discount }} %</span>
          </label>
        </div>
      </div>
      <div class="flex gap-3">
        <svg fill="none" class="w-6 xl:w-8" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
        <svg fill="none" class="w-6 xl:w-8" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
        </svg>
      </div>
    </article>
  </article>
</template>

