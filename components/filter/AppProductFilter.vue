<script setup lang="ts">
import { emit } from "process"

const config = useRuntimeConfig()

const emits = defineEmits([
  'mutateProducts'
])

const {data: tags} = await useFetch(`${config.public.baseURL}/api/tags`)
const {data: groupTag} = await useFetch(`${config.public.baseURL}/api/tags?fields[0]=groupTag`)

const getNameTags = []

getNameTags.push(groupTag?.value.data?.map((tag) => { return tag.attributes.groupTag }))

const uniqueGroupTag = [ ...new Set(getNameTags[0]) ]


const activeModalFilter = ref(false)
const activeModalOrder = ref(false)

const mutateFilterModal = (e: boolean) => {
  activeModalFilter.value = e
}
const mutateOrderModal = (e: boolean) => {
  activeModalOrder.value = e
}

const mutateProducts = (name:any,price:any,antiquity:any)=>{
  emits('mutateProducts',name,price,antiquity)
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

      <ModalsAppFilterProductsModal :tags="tags" :uniqueGroupTag="uniqueGroupTag" :activeModalFilter="activeModalFilter" @mutateFilterModal="mutateFilterModal" @mutateProducts="mutateProducts" />
      
      <button
          title="Ordenar por"
          class="text-gray-800 font-poppins text-base font-medium flex items-center gap-1.5"
          name="order-by"
          @click="activeModalOrder = !activeModalOrder"
      >
        <IconArrowUpDown/>
        Ordenar por
      </button>
      <ModalsAppOrderProductModal :activeModalOrder="activeModalOrder" @mutateOrderModal="mutateOrderModal" @mutateProducts="mutateProducts" />
      
    </div>
  </div>
</template>

<style scoped>

</style>
