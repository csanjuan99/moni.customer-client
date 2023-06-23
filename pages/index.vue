<template>
  <div class="w-full pt-24 flex flex-col gap-10">
    {{ cart.items}}
    <CarouselAppCarousel :data="carousel"/>
    <component
        v-if="sections"
        v-for="section in sections"
        :key="section.id"
        :is="component(section)"
        :section="section"/>
  </div>
</template>

<script setup lang="ts">
import RegistrationFormSection from "~/components/section/RegistrationFormSection.vue";
import ProductSection from "~/components/section/ProductSection.vue";
import CategorySection from "~/components/section/CategorySection.vue";
import { useCartStore } from "~/stores/cart";
import BrandSection from "~/components/section/BrandSection.vue";
import FeaturedSection from "~/components/section/FeaturedSection.vue";
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
      return BrandSection
    case 'discount':
      return RegistrationFormSection
      return null
    case 'featured':
      return FeaturedSection  
  }
}
</script>
