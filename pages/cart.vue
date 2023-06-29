<template>
  <section class="flex flex-col justify-center items-center">
    <h1 class="font-poppins font-bold text-2xl py-[42px] px-[10px]">Bolsa de compras</h1>
    <section class="grid grid-cols-4 md:grid-cols-11 lg:grid-cols-12 gap-3 sm:gap-4">
      <TableProductTable class="col-span-4 md:cols-span-5 md:col-start-2 md:col-end-8 lg:cols-span-6 lg:col-start-2 lg:col-end-9"/>
      <SectionOrderSummarySection class="col-span-4 md:col-span-4 md:col-start-8 md:col-end-11 lg:col-span-3 lg:col-start-9 lg:col-end-12"/>
    </section>
  </section>
</template>
<script setup lang="ts">
</script>
