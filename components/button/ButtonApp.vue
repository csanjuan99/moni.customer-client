<template>
    <section >
        <a href="#" class=" inline-flex px-5 py-3 gap-2 rounded-lg text-base font-medium leading-normal text-[#111928] bg-white hover:text-[#007880] focus:text-[#007880] hover:bg-[#E5E7EB]">Registrarse <ButtonIconApp class=" my-auto hover:text-[#007880] focus:text-[#007880]"/></a>
   </section>
</template>

<script>

import ButtonIconApp from '@/components/icon/ButtonIconApp.vue';
export default {
    name: 'ButtonApp',
    components: {
        ButtonIconApp
    }
} 
</script>