<template>
  <section class="flex flex-col gap-5">
    <h3 class="font-bold font-poppins text-2xl text-center text-gray-900">
      {{ section.attributes.title }}
    </h3>
    <carousel class="relative" :breakpoints="breakpoints">
      <slide class="relative md:px-2" v-for="(product,index) in section.attributes.products.data" :key="index">
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
  },
  props: {
    section: {
      type: Object,
      default: () => ({})
    },
  },
  data: () => ({
    breakpoints: {
      1440: {
        itemsToShow: 4,
        snapAlign: 'center',
      },
      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
      768: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      200: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    },
  })
})
</script>
