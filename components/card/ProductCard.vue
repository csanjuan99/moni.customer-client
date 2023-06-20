<script setup lang="ts">
import {useCurrency} from "../../composables/useCurrency";

const config = useRuntimeConfig()

const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  },
})

const calculateDiscount = (price: number, discount: number) => {
  return price - (price * discount / 100)
}

</script>

<template>
  <article
      class="flex flex-col gap-3.5 justify-between overflow-hidden relative"
  >
    <label v-if="product.attributes.discount"
           class="font-poppins bg-green-600 text-white text-sm font-normal absolute top-10 right-10 z-10 px-5 py-2.5 rounded-xl">
      <span>Sale</span>
    </label>
    <NuxtLink :to="`/products/${product.attributes.slug}`" class="h-auto overflow-hidden rounded-3xl z-0">
      <picture>
        <img class="h-full transition-all hover:scale-125 ease-in-out duration-300 rounded-3xl"
             :src="`${config.public.baseURL}${product.attributes.media.data[0].attributes.url}`"
             alt="">
      </picture>
    </NuxtLink>
    <div class="flex flex-col items-start gap-2 h-max">
      <h3 class="font-poppins text-xl text-gray-900">
        {{ product.attributes.name }}
      </h3>
      <div class="flex items-center gap-5">
        <span class="font-poppins font-semibold text-red-600" v-if="product.attributes.discount">
          {{
            useCurrency(
                calculateDiscount(
                    product.attributes.price,
                    product.attributes.discount
                )
            )
          }}
        </span>
        <span :class="[product.attributes.discount ? 'line-through text-gray-400': '']"
              class="font-poppins text-gray-900">
            {{ useCurrency(product.attributes.price) }}
        </span>
        <label v-if="product.attributes.discount"
               class="font-poppins bg-green-600 text-white text-sm font-medium px-3.5 py-1.5 rounded-xl">
          <span>- {{ product.attributes.discount }} %</span>
        </label>
      </div>
    </div>
  </article>
</template>

