<template>
    <section class="w-full">
        <section class="block">
            <article
                    class="w-full grid sm:grid-cols-4 text-gray-500 font-inter uppercase text-xs font-semibold md:grid-cols-8 px-4 py-6 justify-items-center">
                <section class="justify-self-start uppercase">Foto</section>
                <section>Pedido</section>
                <section class="hidden md:flex"># de Productos</section>
                <section>Fecha</section>
                <section class="hidden md:flex">Total</section>
                <section class="hidden md:flex">Número de guía</section>
                <section class="hidden md:flex">Estado</section>
                <section>Acciones</section>
            </article>
            <article v-for="(product, index) in cart.items" :key="index"
                     class="grid grid-cols-4 md:grid-cols-8 px-4 py-6">
                <section class="flex flex-col lg:flex-row gap-2">
                    <img 
                        class="w-12 max-h-16"
                         :src="`${config?.public?.baseURL}${product?.attributes?.media?.data[0]?.attributes?.url}`"
                    />
                </section>
                <section class="flex justify-center items-center">
                    #2789
                </section>
                <section class="flex flex-col justify-center items-center">
                    {{ product?.attributes?.quantity }}
                </section>
                <section class=" hidden md:flex justify-center items-center">
                    Junio 12, 2021
                </section>
                <section class="hidden md:flex justify-center items-center">
                    120.000
                </section>
                <section class="hidden md:flex justify-center items-center">
                    Asignación En espera
                </section>
                <section class="hidden md:flex justify-center items-center">
                    En proceso
                </section>
                <section class="flex justify-center items-center">
                    <button class="bg-black text-white py-2 px-3 rounded-lg">
                        Ver más
                    </button>
                </section>
            </article>
        </section>
    </section>
</template>

<script setup lang="ts">
//Imports
import {useCartStore} from '~/stores/cart';

//Initializations
const config = useRuntimeConfig()
const cart = useCartStore()
const cartComposable = useCart()

// Methods
const deleteProduct = (id:any) => {
    cartComposable.remove(id)
}
</script>
