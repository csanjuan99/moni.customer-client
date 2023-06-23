<template>
  <carousel class="w-full" :items-to-show="1">
    <slide class="relative w-full h-full" v-for="item in data" :key="data.id">
      <article
          v-if="item.attributes.textCta || item.attributes.linkCta || item.attributes.description"
          :class="[
              item.attributes.positionX === 'right' ? 'lg:right-44 xs:items-center xs:text-center lg:items-end lg:text-end' : '',
              item.attributes.positionX === 'left' ? 'lg:left-44 xs:items-center xs:text-center items-start lg:text-start' : '',
              item.attributes.positionY === 'top' ? 'top-24' : '',
              item.attributes.positionY === 'bottom' ? 'bottom-24' : '',
              ]"
          class="absolute z-20 w-max xl:h-64 flex flex-col gap-5">
        <span class="lg:text-5xl text-3xl w-1/4 text-white font-normal font-inter xs:w-1/2">
          {{ item.attributes.description }}
        </span>
        <NuxtLink class="font-medium font-poppins px-5 py-3 bg-white rounded-lg w-max hover:bg-gray-100 ease-in-out duration-150 hover:text-primary-500"
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
