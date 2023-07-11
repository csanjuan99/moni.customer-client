<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})


const emits = defineEmits([
  'mutateProducts'
])

const mutateProducts= (name:any)=>{
  emits('mutateProducts',name)
}
</script>

<template>
  <section class="grid md:grid-cols-10 lg:grid-cols-12 gap-4 p-5">
    <FilterAppProductFilter @mutateProducts="mutateProducts" class="col-span-6 lg:col-start-2"/>
    <article class="flex gap-5 col-start-11 justify-end">
      <span class="hidden md:block text-gray-800 text-base font-normal font-poppins">
        {{ count }} resultados
      </span>
    </article>
  </section>
</template>

<style scoped>

</style>
