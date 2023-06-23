<template>
  <section class="flex flex-col gap-5 px-5">
    <h3 class="font-bold font-poppins text-2xl text-center text-gray-900">
      {{ section.attributes.title }}
    </h3>
    <section id="category" class="grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
      <!-- h-[450px]  -->
      <article
        class="relative rounded-3xl overflow-hidden flex flex-col items-center justify-center object-contain">
        <CardCategoryCard v-for="(category, index) in categories" :key="index" :data="category" />
      </article>
    </section>
  </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
const { data: categories } = await useFetch(`${config.public.baseURL}/api/categories?filters[featured][$eq]=true&populate[0]=image.data`)
const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },
})
</script>
