<template>
    <section v-if="isShow" class="bg-white absolute top-28 left-0 w-11/12 m-5 lg:mx-10 2xl:ml-20 z-50 rounded-xl py-10 px-4 md:px-28 flex flex-col gap-8">
      <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <div :class="searchData ? 'visible':'invisible'" class="cursor-pointer z-50 absolute inset-y-0 right-0 items-center flex pr-3" @click="()=>{searchData = ''}" >
          <svg fill="none" class="w-5 h-5 text-gray-500" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <input type="text" v-model="searchData" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-gray-500 block w-full pl-10 p-2.5" placeholder="Escribe aqui" required>
      </div>
      <div>
        <h2 class="font-medium mb-2">Mas buscado</h2>
        <p v-for="(element,index) in mostWanted" :key="index" class="py-1">{{ element.name }}</p>
      </div>
    </section>
    <section v-if="isShow" class="w-screen h-full bg-black/50 fixed top-0 left-0" @click="$emit('mutateIsShowFilter')"></section>
</template>

<script>
export default {
    name: "AppFilterModal",
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    emits: ['mutateIsShowFilter'],
    data: ()=> ({
        mostWanted: [{name: "Pantalones"}, {name: "Camisas"}, {name: "Zapatos"}, {name: "Accesorios"}],
        searchData: ''
    })
}
</script>