<script setup lang="ts">
// composables
const config = useRuntimeConfig()

// data
const largeColumns = ref(4)
const smallColumns = ref(1)
const url = ref(`${config.public.baseURL}/api/products?populate[0]=media`)

const {data: market} = await useFetch(`${config.public.baseURL}/api/market?populate[banner][fields][0]=url&populate[banner][fields][1]=mime`)
const {data: products} = await useFetch(url.value)

// methods

const mutateProducts = async (name:any) =>{
  let query = '/api/products?populate[0]=media&populate[1]=tags';
  name.forEach(filter => {
    query += `&filters[tags][name][$eq]=${filter}`
  });
  
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
    <SectionAppBannerSection :market="market"/>
    <SectionAppNavProductSection
        :count="count"
        @mutateProducts="mutateProducts"
      />
    <div ref="grid" class="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-12 gap-4 p-5 col-start-2">
      <transition-group name="fade">
        <section v-for="(product,index) in productsArray" :key="index" class="grid-cols-10 col-span-10 lg:col-start-2 gap-4 hidden md:grid" >
          <section v-for="(element,i) in product" :key="i" class="col-span-3" :class="getClass(index,i)">
            <CardProductCard
              :product="element" 
            />
          </section>
        </section>

        <section v-for="(product,index) in products?.data" :key="index" class="col-span-4 md:hidden">
            <CardProductCard
              :product="product" 
            />
        </section>
      </transition-group>
    </div>
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
