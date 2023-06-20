<template>
  <section class="flex flex-col gap-5">
    <h3 class="font-bold font-poppins text-2xl text-center text-gray-900">
      {{ section.attributes.title }}
    </h3>
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },
})
</script>
