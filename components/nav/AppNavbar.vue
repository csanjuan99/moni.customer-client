<script setup lang="ts">
// composables
const config = useRuntimeConfig();
// props
const props = defineProps({
  y: {
    type: Number,
    required: true,
  }
})

//data
const isShowFilter = ref(false);
const isShowSale = ref(false);
const isShowshopping = ref(false);
const {data: routes} = useFetch(`${config.public.baseURL}/api/routes?fields[0]=src&fields[1]=name`);
const {data: configs} = useFetch(`${config.public.baseURL}/api/config?fields[0]=companyName&populate[companyLogo][fields][0]=name&populate[companyLogo][fields][1]=url`);

// methods

const mutateIsShowshopping = () => {
  isShowshopping.value = !isShowshopping.value;
}
const mutateIsShowFilter = () => {
  isShowFilter.value = !isShowFilter.value;
}

const mutateIsShowSale = (status : boolean) => {
  if (status) {
    isShowSale.value = true;
    return;
  }else{
    isShowSale.value = false;
    return;
  }
}

</script>

<template>
  <nav :class="[ y > 0 ? '': 'bg-white']"
       class="fixed top-0 left-0 w-full transition-all duration-200 ease-in-out z-50">
    <div class="flex items-center justify-between w-full h-full py-8 bg-white px-7 z-50 relative">
      <div class="flex justify-between w-full">
        <article class="flex items-center gap-10 z-50">
          <div>
            <img
                v-if="configs.data.attributes.companyLogo"
                :src="`${config.public.baseURL}${configs.data.attributes.companyLogo.data.attributes.url}`"
                :alt="configs.data.attributes.companyLogo.data.attributes.name">
            <h1 v-else>
              {{ configs.data.attributes.companyName }}
            </h1>
          </div>
          <ul class="hidden md:flex items-center gap-5">
            <li v-for="route in routes.data" :key="route.id">
              <NuxtLink v-if="route.attributes.src === '/products'" class="font-medium text-base font-poppins" :to="route.attributes.src" @mouseenter="mutateIsShowSale(true)">
                {{ route.attributes.name }}
              </NuxtLink>
              <NuxtLink v-else class="font-medium text-base font-poppins" :to="route.attributes.src" @mouseenter="mutateIsShowSale(false)">
                {{ route.attributes.name }}
              </NuxtLink>
            </li>
          </ul>
        </article>
        <article class="flex gap-10 z-50">

          <div class="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" class="bg-white border-none text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-b focus:border-gray-300 block w-full pl-10 p-2.5" readonly placeholder="Buscar" @click=" () => { isShowFilter = !isShowFilter }" />
            </div>
          </div>
          
          <div class="flex gap-3">
            <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
            </svg> 
            <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" @click=" () => { isShowshopping = !isShowshopping }">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
            </svg>
            <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </article>
      </div>
      <ModalsAppFilterModal :isShow="isShowFilter" @mutateIsShowFilter="mutateIsShowFilter"/>
      <ModalsAppShoppingBagModal :isShow="isShowshopping" @mutateIsShowshopping="mutateIsShowshopping"/>
      <ModalsAppSaleModal :isShow="isShowSale" @mutateIsShowSale="mutateIsShowSale"/>
    </div>
  </nav>
</template>
