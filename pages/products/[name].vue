<script setup lang="ts">
  // setup
  const config = useRuntimeConfig();
  const route = useRoute()

  //data 

  const {data: details} = useFetch(`${config.public.baseURL}/api/products?filters[slug][$eq]=${route.params.name}&populate=*`)


  const isActiveColor = false; // Estado activo del elemento


</script>

<template>
  <section class="grid md:grid-cols-4 lg:grid-cols-12 mt-28 gap-4 px-10">
    <SectionAppPickImageSection class="md:col-span-2 lg:col-span-6 lg:col-start-2"/>
    <SectionAppDescriptionSection class="md:col-span-2 lg:col-span-4" />
  </section>
</template>
