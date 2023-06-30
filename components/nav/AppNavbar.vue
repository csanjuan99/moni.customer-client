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
const navbarMobile = ref(false);
const isShowshopping = ref(false);
const {data: routes} = useFetch(`${config.public.baseURL}/api/routes?fields[0]=src&fields[1]=name`);
const {data: product} = useFetch(`${config.public.baseURL}/api/products?filters[discount][$null]&populate[0]=media`);
const {data: configs} = useFetch(`${config.public.baseURL}/api/config?fields[0]=companyName&populate[companyLogo][fields][0]=name&populate[companyLogo][fields][1]=url`);
const {data: categories} = useFetch(`${config.public.baseURL}/api/categories?populate=subcategories`);

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

const closeMenu = () => {
  navbarMobile.value = false;
}

</script>

<template>
  <nav :class="[ y > 0 ? '': 'bg-white']"
       class="fixed top-0 left-0 w-full transition-all duration-200 ease-in-out z-50">
    <div class="flex items-center justify-between w-full h-full py-8 bg-white px-7 z-50 relative">

      <NavAppNavbarDesktop 
        :routes="routes" 
        :configs="configs" 
        :navbarMobile="navbarMobile" 
        :isShowFilter="isShowFilter" 
        :isShowshopping="isShowshopping"
        @mutateIsShowFilter="mutateIsShowFilter"
        @mutateIsShowshopping="mutateIsShowshopping"
        @mutateIsShowSale="mutateIsShowSale"
      />

      <ModalsAppFilterModal 
        :isShow="isShowFilter" 
        @mutateIsShowFilter="mutateIsShowFilter"
      />
      <ModalsAppShoppingBagModal 
        :isShow="isShowshopping" 
        @mutateIsShowshopping="mutateIsShowshopping"
      />
      <ModalsAppSaleModal 
        :isShow="isShowSale" 
        :product="product"
        :categories="categories.data" 
        @mutateIsShowSale="mutateIsShowSale" 
      />

      <ModalsAppNavbarMobile 
        :isShow="navbarMobile" 
        :routes="routes.data" 
        :categories="categories.data" 
        @closeMenu="closeMenu"
      />
    </div>
  </nav>
</template>
