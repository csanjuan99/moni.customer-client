<template>
    <section class="grid grid-cols-4 md:grid-cols-12 gap-4 px-6">
      <h1 class="font-poppins font-bold col-span-4 md:col-span-12 m-auto">Bolsa de compras</h1>
        <TableProductTable class="col-span-4 md:col-span-8 lg:col-span-7 lg:col-start-2"/>
        <SectionOrderSummarySection class="col-span-4 lg:col-span-3" :link="'/cart/formPersonal'" />
    </section>
  </template>
  <script setup lang="ts">
  </script>
  