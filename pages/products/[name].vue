<script setup lang="ts">
  // setup
  const config = useRuntimeConfig();
  const route = useRoute()

  //data 

  const {data: details} = useFetch(`${config.public.baseURL}/api/products?filters[slug][$eq]=${route.params.name}&populate=*`)


  const isActiveColor = false; // Estado activo del elemento


</script>

<template>
  <section class="flex xs:gap-4 md:gap-20 xs:p-[10px] md:px-9 md:py-10 xs:flex-col md:flex-row mt-28">
    <SectionAppPickImageSection />
    <SectionAppDescriptionSection />
  </section>
</template>
