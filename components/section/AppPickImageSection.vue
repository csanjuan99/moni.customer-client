<template>
    <section class="flex w-full md:flex-row xs:flex-col-reverse gap-3">
        <div class="md:w-1/6 xs:w-full">
        <div class="thumbnail-images flex xs:flex-row md:flex-col gap-4 justify-start items-center overflow-y-auto md:overflow-x-auto md:h-96">
          <div v-for="(image, index) in thumbnailImages" :key="index" class="flex-shrink-0" @click="selectImage(image)">
            <img :src="image" alt="Thumbnail Image" class="w-16 h-16 rounded-lg object-cover cursor-pointer " :class="image===selectedImage ? 'border-2 border-black':''" />
          </div>
        </div>
      </div>
      <div class="xs:w-full md:w-3/4">
        <div class="main-image m-auto">
          <img :src="selectedImage" alt="Main Image" class="rounded-lg" />
        </div>
      </div>
      <div class="flex-col gap-6 hidden md:flex">
        <button
        type="button"
        class="text-neutral-color-0 items-start"
        >
        <svg width="29" height="26" viewBox="0 0 29 26" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.51382 5.16693C1.85305 4.34797 2.35025 3.60385 2.97706 2.97706C3.60385 2.35025 4.34797 1.85305 5.16693 1.51382C5.98588 1.1746 6.86363 1 7.75006 1C8.63649 1 9.51424 1.1746 10.3332 1.51382C11.1521 1.85305 11.8963 2.35025 12.5231 2.97706L14.5001 4.95406L16.4771 2.97706C17.7429 1.71118 19.4598 1.00002 21.2501 1.00002C23.0403 1.00002 24.7572 1.71118 26.0231 2.97706C27.2889 4.24294 28.0001 5.95984 28.0001 7.75006C28.0001 9.54028 27.2889 11.2572 26.0231 12.5231L14.5001 24.0461L2.97706 12.5231C2.35025 11.8963 1.85305 11.1521 1.51382 10.3332C1.1746 9.51424 1 8.63649 1 7.75006C1 6.86363 1.1746 5.98588 1.51382 5.16693Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
        <button type="button" class="items-start">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0261 20.013C13.3291 19.407 13.5001 18.723 13.5001 18C13.5001 17.277 13.3291 16.593 13.0261 15.987M13.0261 20.013C12.5727 20.9196 11.8264 21.6466 10.9083 22.0761C9.9901 22.5056 8.95381 22.6126 7.96728 22.3796C6.98075 22.1466 6.10177 21.5874 5.47274 20.7926C4.8437 19.9977 4.50146 19.0137 4.50146 18C4.50146 16.9864 4.8437 16.0024 5.47274 15.2075C6.10177 14.4127 6.98075 13.8535 7.96728 13.6205C8.95381 13.3875 9.9901 13.4945 10.9083 13.924C11.8264 14.3535 12.5727 15.0805 13.0261 15.987M13.0261 20.013L22.9741 24.9871M13.0261 15.987L22.9741 11.013M22.9741 24.9871C22.4402 26.0548 22.3524 27.2909 22.7299 28.4235C23.1074 29.556 23.9194 30.4922 24.9871 31.026C26.0549 31.5599 27.291 31.6478 28.4235 31.2703C29.5561 30.8928 30.4922 30.0808 31.0261 29.013C31.56 27.9453 31.6478 26.7092 31.2703 25.5766C30.8928 24.4441 30.0809 23.5079 29.0131 22.974C28.4844 22.7097 27.9088 22.5521 27.3192 22.5102C26.7296 22.4683 26.1375 22.5429 25.5767 22.7298C24.4442 23.1073 23.508 23.9193 22.9741 24.9871ZM22.9741 11.013C23.2385 11.5417 23.6043 12.013 24.0509 12.4002C24.4974 12.7874 25.0158 13.0829 25.5765 13.2697C26.1372 13.4566 26.7292 13.5312 27.3187 13.4892C27.9083 13.4473 28.4838 13.2897 29.0124 13.0253C29.541 12.7609 30.0123 12.3951 30.3995 11.9486C30.7867 11.502 31.0822 10.9836 31.2691 10.4229C31.4559 9.86222 31.5305 9.2702 31.4886 8.68068C31.4466 8.09115 31.289 7.51565 31.0246 6.98705C30.4907 5.91949 29.5546 5.10773 28.4222 4.73036C27.2899 4.35299 26.0539 4.44092 24.9864 4.9748C23.9188 5.50868 23.1071 6.44478 22.7297 7.57717C22.3523 8.70957 22.4402 9.94549 22.9741 11.013Z" stroke="#111928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
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
      required: true
    }
  })
  
  // Data

  const thumbnailImages = props?.data?.map((image:any) => {
        return config.public.baseURL+image?.attributes?.url
    })

  const selectedImage = ref(config.public.baseURL+props?.data[0]?.attributes.url)

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