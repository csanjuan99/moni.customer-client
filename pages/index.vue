<template>
  <div class="w-full flex flex-col gap-10 animate-slide-left">
    <CarouselAppCarousel :data="carousel"/>
    <section class="grid grid-cols-4 md:grid-cols-12 gap-4 md:px-4 px-3">
      <component
          v-if="sections"
          v-for="section in sections"
          :key="section.id"
          :is="component(section)"
          :section="section"
          class="col-span-4 md:col-span-12 lg:col-span-10 md:col-start-1 lg:col-start-2 "
        />
    </section>
  </div>
</template>

<script setup lang="ts">
import RegistrationFormSection from "~/components/section/RegistrationFormSection.vue";
import ProductSection from "~/components/section/ProductSection.vue";
import CategorySection from "~/components/section/CategorySection.vue";
import BrandSection from "~/components/section/BrandSection.vue";

definePageMeta({
  layout: 'default',
})

const config = useRuntimeConfig()

const {data: home} = await useFetch(`${config.public.baseURL}/api/home?populate[0]=carousel.data.media&populate[1]=sections.products.media`)

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
    case 'brand':
      return BrandSection
    case 'discount':
      return RegistrationFormSection
    default:
      return null
  }
}


</script>
