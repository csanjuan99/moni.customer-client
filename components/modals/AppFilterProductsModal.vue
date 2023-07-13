<script setup lang="ts">

// data
const minPrice = ref(0)

const maxPrice = ref(0)

const emits = defineEmits([
  'mutateProducts',
  'mutateFilterModal'
])

// props
const props = defineProps({
  activeModalFilter: {
    type: Boolean,
  },
  tags: {
    type: Object,
  },
  uniqueGroupTag: {
    type: Array,
  }
})
// Methods

const mutateFilterModal = (e: boolean) => {
  emits('mutateFilterModal', e)
}

const aplicateFilters = ()=>{
  let prices = null
  prices = [minPrice.value,maxPrice.value]
  const filtersToAplicate:any = [];
  document.querySelectorAll('input[type=checkbox]:checked').forEach((el)=>{
    filtersToAplicate.push(el?.value)
  })

  emits('mutateProducts', filtersToAplicate,prices)
}

const mutateMinPrice = (e:any)=>{
  minPrice.value = e
}

const mutateMaxPrice = (e:any)=>{
  maxPrice.value = e
}

</script>
<template>
    <section class="flex relative">
        <div :class="activeModalFilter ? 'flex':'hidden'" class="flex-col gap-3 absolute z-30 p-3 bg-white rounded-lg shadow w-80 -left-24 top-5">
          <div class="flex items-center justify-between pt-2">
            <h6 class="text-sm font-medium text-black dark:text-white">Filtros</h6>
          </div>
          <div>
            <CardAppFilterTagCard v-for="(tag,index) in uniqueGroupTag" :key="index" :tag="tag" :tags="tags" />
            <CardAppFilterPriceCard @mutateMinPrice="mutateMinPrice" @mutateMaxPrice="mutateMaxPrice"/>
          </div>
          <div class="flex justify-center">
            <button name="Aplicar Filtros" class="py-2 bg-gray-800 text-white rounded-lg px-8" @click="aplicateFilters">
              Aplicar
            </button>
          </div>
        </div>
        <div :class="activeModalFilter ? 'flex':'hidden'" class="fixed left-0 top-0 z-20 px-3 pt-1 bg-black/40 rounded-lg shadow w-screen h-screen" @click="$emit('mutateFilterModal',false)"></div>
    </section>
</template>