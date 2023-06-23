<template>
<section class="bg-[#111928] dark:bg-gray-900 rounded-3xl">
    <div class="">
        <div class="mx-auto max-w-screen-2xl text-center px-6 py-14 gap-14">
            <h1 class="mb-4 xs:text-2xl md:text-6xl 2xl:text-6xl  font-inter tracking-tight font-bold leading-10 text-center  text-white">Regístrate y obtén un 10% de descuento</h1>
            <p class="mb-4 xs:text-sm xs:mt-3 md:text-3xl 2xl:px-72 font-inter leading-8 text-center text-white mt-6">Regístrate para obtener acceso anticipado a la venta, novedades, promociones y más.</p>
            <ButtonApp class="
            mt-14  xs:mt-8
            "/>
        </div>   
    </div>
</section>
</template>

<script>

import ButtonApp from '@/components/button/ButtonApp.vue';
export default {
    name: 'RegistrationFormSection',
    components: {
        ButtonApp
    }
} 
</script>