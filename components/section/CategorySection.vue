<template>
  <section class="flex flex-col gap-5">
    <h3 class="font-bold font-poppins text-2xl text-center text-gray-900">
      {{ section.attributes.title }}
    </h3>
    <section class="grid sm:grid-cols-2 xs:grid-cols-1 gap-4">
      <article v-for="category in categories.data" :key="category.id"
               class="relative h-[450px] rounded-3xl overflow-hidden flex flex-col items-center justify-center object-contain">
        <img
            class="transition-all ease-in-out delay-150 duration-1000 hover:scale-125  relative w-full h-full object-cover object-center"
            :src="`${config.public.baseURL}${category.attributes.image.data[0].attributes.url}`"
            :alt="category.attributes.image.data[0].attributes.url"/>

        <article class="flex flex-col gap-2 absolute items-center"
                 v-if="category.attributes.linkCta && category.attributes.textCta">
          <h2 class="text-white font-inter font-medium text-5xl">{{ category.attributes.name }}</h2>
          <NuxtLink
              class="font-poppins text-white hover:bg-gray-700 text-sm px-5 py-[10px] rounded-lg border border-white hover:border-transparent ease-in-out duration-150"
              :to="`${category.attributes.linkCta}`">
            {{ category.attributes.textCta }}
          </NuxtLink>
        </article>
      </article>
    </section>
  </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
const {data: categories} = await useFetch(`${config.public.baseURL}/api/categories?filters[featured][$eq]=true&populate[0]=image.data`)
const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },
})
</script>
