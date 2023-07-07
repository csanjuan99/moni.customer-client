<script setup lang="ts">
  // setup
  const config = useRuntimeConfig();
  const route = useRoute()

  //data 

  const {data: details} = await useFetch(`${config.public.baseURL}/api/products?filters[slug][$eq]=${route.params.name}&populate=*`)

</script>

<template>
  <section class="grid md:grid-cols-4 lg:grid-cols-12 gap-4 px-3 md:px-10 animate-slide-left">
    <SectionAppPickImageSection class="md:col-span-2 lg:col-span-6 lg:col-start-2" :data="details?.data[0]?.attributes?.media?.data"/>
    <SectionAppDescriptionSection class="md:col-span-2 lg:col-span-4" :data="details?.data[0]"/>
  </section>
</template>
