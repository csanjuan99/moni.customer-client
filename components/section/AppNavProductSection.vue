<script setup lang="ts">
const props = defineProps({
  count: {
    type: Number,
    required: true
  },
  largeColumns: {
    type: Number,
    required: true
  },
  smallColumns: {
    type: Number,
    required: true
  }
})

const emits = defineEmits([
  'update:columns'
])
</script>

<template>
  <section class="w-full justify-between flex items-center gap-2.5 my-4 px-5">
    <FilterAppProductFilter/>
    <article class="flex gap-5">
      <span class="hidden md:block text-gray-800 text-base font-normal font-poppins">
        {{ count }} resultados
      </span>
      <button
          title="Ver de a 3 productos"
          name="grid-three"
          :class="[largeColumns === 3 ? 'text-gray-800' : 'text-gray-400']"
          class="hidden lg:block hover:text-gray-800"
          @click="() => {
            $emit('update:columns', { largeColumns: 3, smallColumns: 1 })
          }">
        <IconGridThree/>
      </button>
      <button
          title="Ver de a 4 productos"
          name="grid-four"
          :class="[largeColumns === 4 ? 'text-gray-800' : 'text-gray-400']"
          class="hidden lg:block hover:text-gray-800"
          @click="() => {
            $emit('update:columns', { largeColumns: 4, smallColumns: 1 })
           }"
      >
        <IconGridFour/>
      </button>
      <button
          title="Ver de a 1 producto"
          name="grid-one"
          :class="[smallColumns === 1 ? 'text-gray-800' : 'text-gray-400']"
          class="lg:hidden hover:text-gray-800"
          @click="() => {
            $emit('update:columns', { smallColumns: 1, largeColumns })
          }">
        <IconGridOne/>
      </button>
      <button
          title="Ver de a 2 productos"
          name="grid-two"
          :class="[smallColumns === 2 ? 'text-gray-800' : 'text-gray-400']"
          class="lg:hidden hover:text-gray-800"
          @click="() => {
            $emit('update:columns', { smallColumns: 2, largeColumns })
          }">
        <IconGridTwo/>
      </button>
    </article>
  </section>
</template>

<style scoped>

</style>
