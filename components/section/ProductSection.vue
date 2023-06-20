<template>
  <section class="flex flex-col gap-5">
    <h3 class="font-bold font-poppins text-2xl text-center text-gray-900">
      {{ section.attributes.title }}
    </h3>
    <carousel :items-to-show="4" class="relative">
      <slide class="relative" v-for="product in section.attributes.products.data" :key="product.id">
        <CardProductCard :product="product"/>
      </slide>
    </carousel>
    <NuxtLink
        class="block mx-auto py-3 border text-gray-800 font-medium border-gray-800 px-5 rounded-lg hover:text-white hover:bg-gray-800 ease-in-out duration-200"
        :to="section.attributes.linkCta" v-if="section.attributes.textCta">
      {{ section.attributes.textCta }}
    </NuxtLink>
  </section>
</template>

<script lang="ts">
import ProductCard from "~/components/card/ProductCard.vue";
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";

export default defineComponent({
  setup() {
    const config = useRuntimeConfig()
    return {
      config,
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    CardProductCard: ProductCard,
  },
  props: {
    section: {
      type: Object,
      default: () => ({})
    },
  }
})
</script>
