<script setup lang="ts">
import {types} from "~/types/media.types";

const config = useRuntimeConfig()


const props = defineProps({
  market: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="relative hidden md:block">
    <img
        v-if="
          market.data.attributes.banner.data.attributes.mime === types.IMAGE_JPEG
          ||
          market.data.attributes.banner.data.attributes.mime === types.IMAGE_PNG"
        :src="`${config.public.baseURL}${market.data.attributes.banner.data.attributes.url}`"
        :alt="market.data.attributes.banner.data.attributes.url">
    <video
        v-else
        :src="`${config.public.baseURL}${market.data.attributes.banner.data.attributes.url}`"
        :alt="market.data.attributes.banner.data.attributes.url"
        autoplay
        loop
        muted
        playsinline
        class="w-full h-44 object-cover"/>
    <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 class="text-3xl text-white">
        {{ market.data.attributes.title }} / Todos
      </h1>
      <h2 class="text-5xl font-semibold text-white">{{ market.data.attributes.subtitle }}</h2>
    </section>
  </article>
</template>

<style scoped>

</style>
