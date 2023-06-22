<template>
  <SectionProductSection :section="data" :breakpoints="breakpoints"/>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
const {data: products} = await useFetch(`${config.public.baseURL}/api/products?filters[featured][$eq]=true&populate[0]=media`)

const breakpoints = {
  1280: {
    itemsToShow: 7,
    snapAlign: 'left',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'left',
  },
  768: {
    itemsToShow: 2,
    snapAlign: 'left',
  },
  200: {
    itemsToShow: 1,
    snapAlign: 'left',
  },
}


const props = defineProps({
  section: {
    type: Object,
    default: () => ({})
  },
})

const data = computed(() => ({
      ...props.section,
      attributes: {
        ...props.section.attributes,
        products: {
          data: products?.value?.data,
        }
      }
    })
)

</script>
