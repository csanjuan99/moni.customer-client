<script setup lang="ts">
// composables
const config = useRuntimeConfig()

// data
const largeColumns = ref(4)
const smallColumns = ref(1)


const {data: market} = await useFetch(`${config.public.baseURL}/api/market?populate[banner][fields][0]=url&populate[banner][fields][1]=mime`)
const {data: products} = await useFetch(`${config.public.baseURL}/api/products?populate[0]=media`)

// methods
const onChangeColumn = (e: Event | any) => {
  const {largeColumns: newLargeColumns, smallColumns: newSmallColumns} = e
  largeColumns.value = newLargeColumns
  smallColumns.value = newSmallColumns
}
// computed
const count = computed(() => {
  return products.value.data.length
})

</script>

<template>
  <div>
    <SectionAppBannerSection :market="market"/>
    <SectionAppNavProductSection
        :count="count"
        :large-columns="largeColumns"
        :small-columns="smallColumns"
        @update:columns="(e) => { onChangeColumn(e) }"/>
    <div ref="grid" class="grid grid-cols-12 gap-4 p-5">
      <transition-group name="fade">
        <CardProductCard
            v-show="largeColumns === 4"
            class="hidden lg:flex col-span-3"
            v-for="product in products.data" :key="product.id"
            :product="product"/>
        <CardProductCard
            v-show="largeColumns === 3"
            class="hidden lg:flex col-span-4"
            v-for="product in products.data" :key="product.id"
            :product="product"/>
        <CardProductCard
            v-show="smallColumns === 2"
            class="lg:hidden col-span-6"
            v-for="product in products.data" :key="product.id"
            :product="product"/>
        <CardProductCard
            v-show="smallColumns === 1"
            class="lg:hidden col-span-12"
            v-for="product in products.data" :key="product.id"
            :product="product"/>
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
