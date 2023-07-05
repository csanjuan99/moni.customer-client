<script setup lang="ts">

const activeModalFilter = ref(false)
const activeModalOrder = ref(false)

const mutateFilterModal = (e: boolean) => {
  activeModalFilter.value = e
}
const mutateOrderModal = (e: boolean) => {
  activeModalOrder.value = e
}

</script>

<template>
  <div>
    <div class="flex items-center gap-5">
      <button
          name="filter"
          title="filtrar"
          class="text-gray-800 font-poppins text-base font-medium flex items-center gap-1.5"
        >
        <div class="flex gap-1.5" @click="()=>{ activeModalFilter = !activeModalFilter }">
          <IconAdjustmentsVertical/>
          Filtrar
        </div>
        
      </button>

      <ModalsAppFilterProductsModal :activeModalFilter="activeModalFilter" @mutateFilterModal="mutateFilterModal"/>
      
      <button
          title="Ordenar por"
          class="text-gray-800 font-poppins text-base font-medium flex items-center gap-1.5"
          name="order-by"
          @click="activeModalOrder = !activeModalOrder"
      >
        <IconArrowUpDown/>
        Ordenar por
      </button>
      <ModalsAppOrderProductModal :activeModalOrder="activeModalOrder" @mutateOrderModal="mutateOrderModal"/>
      
    </div>
  </div>
</template>

<style scoped>

</style>
