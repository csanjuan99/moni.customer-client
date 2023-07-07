<template>
    <section v-if="data" class="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4">
      <div class="col-span-4 md:col-span-1 xs:w-full order-2 md:order-1  ">
        <div class="thumbnail-images flex xs:flex-row md:flex-col gap-3 md:gap-4 justify-start items-center overflow-y-auto md:overflow-x-auto md:h-96">
          <div v-for="(image, index) in thumbnailImages" :key="index" class="w-full" @click="selectImage(image)">
            <img :src="image" alt="Thumbnail Image" class="w-full h-32 rounded-lg object-cover cursor-pointer " :class="image===selectedImage ? 'border-2 border-black':''" />
          </div>
        </div>
      </div>
      <div class="col-span-4 w-full order-1 md:order-2">
        <div class="main-image m-auto">
          <img :src="selectedImage" alt="Main Image" class="w-full rounded-lg object-cover max-h-[350px] md:max-h-[550px]" />
        </div>
      </div>
      <div class="col-span-1 gap-6 hidden md:flex md:flex-col order-3">
        <button
        type="button"
        class="text-white items-start"
        >
          <IconLikeHeart />
        </button>
        <button type="button" class=" text-white items-start">
          <IconShare />
        </button>
      </div>
    </section>
</template>

<script setup lang="ts">

  const config = useRuntimeConfig();
  
  // Props

  const props = defineProps({
    data: {
      type: Array,
      // default: () => [],
      required: true
    }
  })
  
  // Data

  // const thumbnailImages = props?.data?.map((image:any) => {
  //       return config?.public?.baseURL+image?.attributes?.url
  //   })
  
  const thumbnailImages = computed(() => props?.data?.map((image:any) => {
        return config?.public?.baseURL+image?.attributes?.url
    }))
  const selectedImage = computed(() => thumbnailImages.value[0])
  
  // ref(config?.public?.baseURL+props?.data[0]?.attributes.url)

  // Methods
  
  const selectImage = (image:any)=> {
        selectedImage.value = image;
    }
</script>

<style scoped>
::-webkit-scrollbar {
  width: 1px; /* Ancho de la barra de desplazamiento */
}
/* Estilo para la pista de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background-color: transparent; /* Color de fondo de la pista */
  border-radius: 1.5rem; /* Redondeo de la pista */
}
/* Estilo para la barra de desplazamiento */
::-webkit-scrollbar-thumb {
  background-color: rgb(209 213 219); /* Color de la barra de desplazamiento */
  border-radius: 1.5rem; /* Redondeo de la barra de desplazamiento */
}
</style>