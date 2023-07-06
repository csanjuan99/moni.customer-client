<script setup lang="ts">

// composables
const config = useRuntimeConfig()
const cart = useCart()


// props
const props = defineProps({
  product: {
    type: Object,
    default: () => ({})
  },
})

// methods
const onAdd = (item: any) => {
  cart.add(item)
}


</script>

<template>
  <article
      class="flex flex-col gap-3.5 justify-between overflow-hidden relative rounded-3xl"
  >
    <label v-if="product.attributes.discount"
           class="font-poppins bg-green-600 text-white text-sm font-normal absolute top-10 right-10 z-10 px-5 py-2.5 rounded-xl">
      <span>Sale</span>
    </label>
    <NuxtLink :to="`/products/${product.attributes.slug}`" class="max-h-[550px] overflow-hidden rounded-3xl z-0 relative">
      <picture>
        <img
             class="h-full w-full hover:scale-125 object-cover transition-all ease-in-out duration-300 rounded-3xl"
             :src="`${config.public.baseURL}${product.attributes.media.data[0].attributes.url}`"
             alt="">
      </picture>
    </NuxtLink>
    <article class="flex flex-row justify-between p-2">
      <div class="flex flex-col items-start gap-2 h-max">
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
      <div class="flex gap-3 items-start">
          <IconLikeHeart />
        <button @click="onAdd(product)">
          <IconShoppingBag />
        </button>
      </div>
    </article>
  </article>
</template>

