<template>
    <nuxt-link v-if="linkCta" :to="linkCta" class="w-full">
        <button
            class="font-poppins inline-flex px-5 py-3 gap-2 rounded-lg text-base font-medium leading-normal transition-all ease-in-out duration-150 justify-center w-full"
            :class="getClass(type)"
            @click="handlerClick"
            >
            {{
                textCta
            }}
            <slot></slot>
        </button>
    </nuxt-link>
    <button
      v-else
      class="font-poppins inline-flex px-5 py-3 gap-2 rounded-lg text-base font-medium leading-normal transition-all ease-in-out duration-150 justify-center w-full"
      :class="getClass(type)"
      @click="handlerClick"
    >
      {{
        textCta
      }}
      <slot></slot>
    </button>
</template>

<script setup lang="ts">

const props = defineProps({
  type: {
    type: String,
    default: '1'
  },
  textCta: {
    type: String,
    default: ''
  },
  linkCta: {
    type: String,
  }
});

const getClass = (type:any)=> {
  switch (parseInt(type)) {
    case 1:
      return 'bg-white text-candles-heavy hover:bg-gray-200 hover:text-candles-dark active:bg-white active:text-candles-heavy active:ring-4 active:ring-candles-light'
    case 2:
      return 'bg-none border-2 border-candles-heavy text-candles-heavy hover:bg-candles-heavy hover:text-white active:bg-candles-heavy active:text-white active:ring-4 active:ring-candles-medium'
    case 3:
      return 'bg-candles-heavy text-white hover:bg-blue-400 hover:text-white active:bg-candles-heavy active:text-white active:ring-4 active:ring-candles-medium'
    case 4:
        return 'bg-none text-white border-2 border-white hover:bg-white hover:text-gray-600 active:bg-white active:text-gray-600 active:ring-4 active:ring-gray-400'
  }
}

const emits = defineEmits(['click'])

const handlerClick = ()=> {
  emits('click')
}
</script>