<template>
  <section class="flex flex-col gap-5 w-full">
    <h3 class="font-bold font-poppins text-2xl text-center">
      {{ section.attributes.title }}
    </h3>
    <carousel class="relative" :breakpoints="breakpoints">
      <slide class="relative" v-for="(product,index) in section.attributes.products.data" :key="index">
        <CardProductCard :product="product"/>
      </slide>
    </carousel>
    <span class=" mx-auto">
      <ButtonAppButton :textCta="section.attributes.textCta" :linkCta="section.attributes.linkCta" type="2" />
    </span>
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

<style>
.carousel__track{
  gap: 12px;
}
</style>