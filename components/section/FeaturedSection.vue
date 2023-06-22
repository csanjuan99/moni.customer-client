<template>
    <ProductSection :section="section"/>
</template>
<script setup lang="ts">
import ProductSection from './ProductSection.vue';
const config = useRuntimeConfig()
const{data: products} = useFetch(`${config.public.baseURL}api/products?filters[featured][$eq]=true&populate[0]=media`)
const props = defineProps({
    section: {
        type: Object,
        default: () => ({})
    },
})
</script>