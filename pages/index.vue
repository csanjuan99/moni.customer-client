<template>
  <div class="w-full flex flex-col gap-10">
    <CarouselAppCarousel :data="carousel"/>
    {{ cart.items}}
    <component
        v-if="sections"
        v-for="section in sections"
        :key="section.id"
        :is="component(section)"
        :section="section"/>
  </div>
</template>

<script setup lang="ts">
import ProductSection from "~/components/section/ProductSection.vue";
import CategorySection from "~/components/section/CategorySection.vue";
import { useCartStore } from "~/stores/cart";

definePageMeta({
  layout: 'default',
})

const config = useRuntimeConfig()
const cart = useCartStore()

const {data: home} = useFetch(`${config.public.baseURL}/api/home?populate[0]=carousel.data.media&populate[1]=sections.products.media`)

const carousel = computed(() => {
  return home?.value?.data?.attributes?.carousel?.data?.attributes?.data?.data
})

const sections = computed(() => {
  return home?.value?.data?.attributes?.sections?.data
})

const component = (section) => {
  switch (section.attributes.type) {
    case 'product':
      return ProductSection
    case 'category':
      return CategorySection
    default:
      return null
  }
}


</script>
