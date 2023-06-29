<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="font-poppins font-bold text-2xl py-[42px] px-[10px]">Bolsa de compras</h1>
    <section class="grid grid-cols-12 sm:flex-row gap-3 sm:gap-4">
      <TableProductTable class="cols-span-6 col-start-2 col-end-8"/>
      <SectionOrderSummarySection class="col-span-4 col-start-8 col-end-12"/>
    </section>
  </section>
</template>
<script setup lang="ts">
</script>
