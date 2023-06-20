<template>
  <carousel class="w-full" :items-to-show="1">
    <slide class="relative w-full h-full" v-for="item in data" :key="data.id">
      <article
          v-if="item.attributes.textCta || item.attributes.linkCta || item.attributes.description"
          :class="[
              item.attributes.positionX === 'right' ? 'xl:right-44 items-end text-end' : '',
              item.attributes.positionX === 'left' ? 'xl:left-44 items-start text-start' : '',
              item.attributes.positionY === 'top' ? 'xl:top-24' : '',
              item.attributes.positionY === 'bottom' ? 'xl:bottom-24' : '',
              ]"
          class="absolute z-20 w-max xl:h-64 flex flex-col gap-5">
        <span class="text-5xl text-white font-normal font-inter w-1/2">
          {{ item.attributes.description }}
        </span>
        <NuxtLink class="font-medium font-poppins px-5 py-3 bg-white rounded-lg w-max hover:bg-gray-100 ease-in-out duration-150"
                  :to="item.attributes.linkCta">
          {{ item.attributes.textCta }}
        </NuxtLink>
      </article>
      <img v-if="item.attributes.media.data.attributes.mime.includes('image')" class="w-full h-[650px] object-cover"
           :src="`${config.public.baseURL}${item.attributes.media.data.attributes.url}`"
           :alt="item.attributes.media.data.attributes.name">
      <video class="w-full h-[650px] object-cover" v-else autoplay muted loop
             :src="`${config.public.baseURL}${item.attributes.media.data.attributes.url}`"/>
    </slide>
  </carousel>
</template>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel'

export default defineComponent({
  setup() {
    const config = useRuntimeConfig()
    return {
      config,
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  }
})
</script>
