<script setup lang="ts">
defineEmits(['mutateOrderModal'])

const props = defineProps({
    activeModalOrder: Boolean
})
</script>
<template>
    <div class="flex relative">
        <div :class="activeModalOrder ? 'flex flex-col gap-3':'hidden'" class="absolute z-30 px-3 pt-1 bg-white rounded-lg shadow w-52 md:w-80 -left-36 top-5">
          <article class="flex py-2 font-light border-b border-gray-200">
            <div class="flex flex-col p-5 w-full">
              <h2 class="w-full hover:bg-gray-300 text-left py-3 px-2 rounded-lg">Mas Recientes</h2>
              <h2 class="w-full hover:bg-gray-300 text-left py-3 px-2 rounded-lg">Mas Antiguos</h2>
            </div>
          </article>
        </div>
        <div :class="activeModalOrder ? 'flex':'hidden'" class="fixed left-0 top-0 z-20 px-3 pt-1 bg-black/40 rounded-lg shadow w-screen h-screen" @click="$emit('mutateOrderModal',false)"></div>
      </div>
</template>