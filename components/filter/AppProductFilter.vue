<script setup lang="ts">

</script>

<template>
  <div>
    <div class="flex items-center gap-5">
      <button
          name="filter"
          title="filtrar"
          class="text-gray-800 font-poppins text-base font-medium flex items-center gap-1.5">
        <IconAdjustmentsVertical/>
        Filtrar
      </button>
      <button
          title="Ordenar por"
          class="text-gray-800 font-poppins text-base font-medium flex items-center gap-1.5"
          name="order-by"
      >
        <IconArrowUpDown/>
        Ordenar por
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
