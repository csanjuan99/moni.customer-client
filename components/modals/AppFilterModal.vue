<template>
    <section v-if="isShow" class="bg-white absolute top-28 left-0 w-11/12 m-5 lg:mx-10 2xl:ml-20 z-50 rounded-xl py-10 px-4 md:px-28 flex flex-col gap-8">
      <div class="relative w-full flex items-center justify-center gap-4">
          <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <IconMagnifyingGlass :small="true"/>  
              </div>
              <input type="text" v-model="searchData" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-[#BECFF0] focus:border-[#BECFF0] block w-full pl-10 p-2.5 " placeholder="Busca el producto por nombre..." required @keyup="searchProduct">
              <div :class="searchData ? 'visible':'invisible'" class="cursor-pointer z-50 absolute inset-y-0 right-0 items-center flex mr-3" @click="clearData" >
                <IconCancel />
              </div>
          </div>
          <span>
            <ButtonAppButton :textCta="'Buscar'" type="3" />
          </span>
      </div>
      <div>
        <h2 class="font-medium mb-2" v-if="!searchData">Busquedas Recientes</h2>
        <p v-for="(data,index) in searchNames?.data" :key="index" class="py-1">{{ data?.attributes?.name }}</p>
      </div>
    </section>
    <section v-if="isShow" class="w-screen h-full bg-black/50 fixed top-0 left-0" @click="mutateIsShowFilter"></section>
</template>

<script setup lang="ts">

const config = useRuntimeConfig()

// props

const props = defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
});
// emits
const emits = defineEmits(['mutateIsShowFilter']);

// data
const searchData = ref('');
const searchNames = ref([]);

// methods

const searchProduct = async () => {
  if (searchData.value === '') {
    searchNames.value = []
    return
  }
  const {data: search} = await useFetch(`${config.public.baseURL}/api/products?filters[name][$contains]=${searchData.value}`)
  searchNames.value = search.value
}

const mutateIsShowFilter = () => {
  emits('mutateIsShowFilter');
}

const clearData = () => {
  searchData.value = ''
  searchProduct()
}

</script>