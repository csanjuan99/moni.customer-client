<script setup lang="ts">
// composables
const route = useRoute()
const config = useRuntimeConfig()

// data
const url = ref(``)

if (!route?.query?.category) {
  url.value = `${config.public.baseURL}/api/products?populate[0]=media`
}else{
  url.value = `${config.public.baseURL}/api/products?populate[0]=media&&filters[category][name][$eq]=${route.query.category}`
}

const {data: market} = await useFetch(`${config.public.baseURL}/api/market?populate[banner][fields][0]=url&populate[banner][fields][1]=mime`)
const {data: products} = await useFetch(url.value)

watch(route, async (newUrl, oldUrl) => {
  console.log('change in route');
  
  if (route?.query?.category) {
    const newUrl = `${config.public.baseURL}/api/products?populate[0]=media&&filters[category][name][$eq]=${route.query.category}`
    const {data: product} = await useFetch(newUrl)
    products.value = product.value
  }else{
    const newUrl = `${config.public.baseURL}/api/products?populate[0]=media`
    const {data: product} = await useFetch(newUrl)
    products.value = product.value
  }

})


// methods

const mutateProducts = async (name:any,price?:any,antiquity?:any) =>{
  let query = '';
  if (!route?.query?.category) {
    query = '/api/products?populate[0]=media&populate[1]=tags'
  }else{
    query = `/api/products?populate[0]=media&populate[1]=tags&filters[category][name][$eq]=${route.query.category}`
  }
  name.forEach((filter:any) => {
    query += `&filters[tags][name][$eq]=${filter}`
  });
  console.log(price);
  
  if (price[0] || price[1] && price[0] != 0 && price[1] != 0) {
    price.forEach((filter:any,index:any) => {
      if (index === 0) {
        query += `&filters[price][$gte]=${filter}`
        return
      }
      query += `&filters[price][$lte]=${filter}`
    });
  }
  if (antiquity === 'newer') {
    query += `&sort[0]=publishedAt:desc`
  }else if(antiquity === 'older'){
    query += `&sort[0]=publishedAt:asc`
  }
  
  const {data: dataProducts} = await useFetch(`${config.public.baseURL}${query}`)
  products.value = dataProducts.value
}

const getClass = (index:any, secondIndex: any) => { 
  
  if((index%2) === 0) {
    if (secondIndex === 2) {
      return 'col-span-4'
    }else{
      return 'col-span-3'
    }
  }else{
    if (secondIndex === 0) {
      return 'col-span-4'
    }else{
      return 'col-span-3'
    }
  }
}
// computed

const count = computed(() => {
  return products?.value?.data?.length
})

const productsArray = computed(() => {
  const array = products?.value?.data;
    const transformedArray = [];
    let subArray = [];

    for (let i = 0; i < array.length; i++) {
      subArray.push(array[i]);

      if (subArray.length === 3 || i === array.length - 1) {
        transformedArray.push(subArray);
        subArray = [];
      }
    }

    return transformedArray;
})

</script>

<template>
  <div class="animate-slide-left">
    <SectionAppBannerSection :market="market" v-if="!route?.query?.category"/>
    <SectionAppNavProductSection
        :count="count"
        @mutateProducts="mutateProducts"
      />
    <section class="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-12 gap-4 p-5 col-start-2">
      <transition-group name="fade">
        <article v-for="(product,index) in productsArray" :key="product[index]" class="grid-cols-10 col-span-10 lg:col-start-2 gap-4 hidden md:grid" >
          <section v-for="(element,i) in product" :key="element?.id" class="col-span-3" :class="getClass(index,i)">
            <CardProductCard
              :product="element" 
            />
          </section>
        </article>
        <article v-for="(product) in products?.data" :key="product?.id" class="col-span-4 md:hidden">
            <CardProductCard
              :product="product" 
            />
        </article>
        <article key="default" v-show="count === 0" class="mx-auto w-full col-span-full text-center">
          No hemos encontrado productos con los filtros seleccionados
        </article>
      </transition-group>
    </section>
  </div>
</template>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
