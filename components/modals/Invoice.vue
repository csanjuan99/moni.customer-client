<template>
    <section :class="active ? 'block':'hidden'">
        <section class="grid grid-cols-4 md:grid-cols-12 gap-4 items-center w-screen h-screen overflow-auto">
            <article class="bg-white col-span-4 md:col-start-4 md:col-span-6 w-screen md:w-full flex flex-col md:justify-center z-50 rounded-lg">
                <section class="flex justify-between items-center p-6 border border-b-gray-300 rounded-t-lg">
                    <article class="flex gap-4 items-center ">
                        <IconCheckLike />
                        <h1 class="text-lg font-semibold font-poppins text-gray-900"> Resumen de compra</h1>
                    </article>
                    <article class="flex gap-4 items-center hover:cursor-pointer">
                        <nuxt-link to="/">
                            <h3 class="hidden font-inter text-xs underline text-gray-900 md:block">Regresar al inicio</h3>
                        </nuxt-link>
                        <nuxt-link to="/">
                            <IconCancel />
                        </nuxt-link>
                    </article>
                </section>
                <section class="p-6 text-base md:text-lg font-semibold text-gray-900">
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Número de pedido: </h2>
                        <h2>#27871</h2>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Fecha de pedido: </h2>
                        <h2>Mayo 11, 2023</h2>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 text-right border-b-gray-300">
                        <h2 class="text-left">Número de guía:</h2>
                        <aside>
                            <h2>Coordinadora</h2>
                            <h2> #3727982749279</h2>
                        </aside>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Producto:</h2>
                        <h2>Blusa denim</h2>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Cantidad:</h2>
                        <h2>1</h2>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Envío:</h2>
                        <h2>7.000 COP</h2>
                    </article>
                    <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                        <h2 class="text-left">Método de pago</h2>
                        <h2 class="text-right">Crédito Visa <br>
                            **** **** **** 4567</h2>
                    </article>
                    <article class="flex justify-between py-[15px] items-center text-xl font-bold">
                        <h1 class="text-left">Total:</h1>
                        <h1>190.000 COP</h1>
                    </article>
                </section>
                <section
                    class="flex flex-col md:grid md:grid-cols-2 text-base font-medium font-poppins p-6 gap-12 md:gap-5 w-full">
                    <article>
                        <h1>DIRECCIÓN DE FACTURACIÓN</h1>
                        <p>
                            MARÍA FERNANDA SOLANO RODRIGUEZ
                        </p>
                        <p>
                            CRA 25 #36-68APTO 302 /EDIF JUAN PABLO
                        </p>
                       <p>
                           Bucaramanga
                       </p> 
                       <p>
                           Santander
                       </p>
                       <p>
                           680002
                       </p>
                       <p>
                           3177040591
                       </p>
                        <p>
                            fernandarodriguez9907@gmail.com
                        </p>
                    </article>
                </section>
            </article>
        </section>
        <nuxt-link to="/">
            <div class="z-10 absolute top-0 bg-black opacity-25 w-screen h-screen">
            </div>
        </nuxt-link>
    </section>
</template>

<script setup lang="ts">

defineEmits(['mutateActiveModal'])

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    },
})
</script>