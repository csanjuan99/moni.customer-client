<template>
    <section>
        <article
            class="text-xs font-semibold bg-gray-100 font-poppins text-gray-500 w-full h-auto px-5 py-[10px] grid grid-cols-4 lg:grid-cols-8 justify-center items-center">
            <section>
                <h3>
                    Foto
                </h3>
            </section>
            <section>
                <h3>
                    Pedido
                </h3>
            </section>
            <section class="hidden lg:block">
                <h3 >
                    # de Productos
                </h3>
            </section>
            <section>
                <h3>
                    Fecha
                </h3>
            </section>
            <section class="hidden lg:block">
                <h3>
                    Total
                </h3>
            </section>
            <section class="hidden lg:block">
                <h3>
                    Número de guía
                </h3>
            </section>
            <section class="hidden lg:block">
                <h3>
                    Estado
                </h3>
            </section>
            <section>
                <h3>
                    Acciones
                </h3>
            </section>
        </article>
        <article v-for="(product, index) in products" :key="index">
            <section class="w-full h-auto px-5 py-2 grid grid-cols-4 lg:grid-cols-8 justify-center columns-auto items-center">
                <section>
                    <img :src="product" class="w-[60px] h-auto">
                </section>
                <section>
                    <h3>#2789</h3>
                </section>
                <section class="hidden lg:block">
                    2
                </section>
                <section>
                    Marzo 3, 2023
                </section>
                <section class="hidden lg:block">
                    180.000 COP
                </section>
                <section class="hidden lg:block">
                    Coordinadora
                    #7362382390
                </section>
                <section class="hidden lg:block">
                    <h1 :class="[
                        state === 'En Proceso' ? 'text-gray-900 text-base font-medium' : '',
                        state === 'Enviado' ? 'text-primary-600 text-base font-medium' : '',
                        state === 'Entregado' ? 'text-green-500 text-base font-medium' : '',
                    ]">
                        {{ state }}
                    </h1>
                </section>
                <section>
                    <button class="py-2 px-3 bg-black rounded-lg flex justify-center items-center">
                        <span class="text-sm font-medium font-poppins text-white">
                            Ver más
                        </span>
                    </button>
                </section>
            </section>
        </article>
    </section>
</template>
<script setup lang="ts">
const products: Array<string> = [
    "https://strapi.monii.store/uploads/dress_c062e21241.png",
    "https://strapi.monii.store/uploads/green_tshirt_e72e5d0b33.png",
    "https://strapi.monii.store/uploads/flowers_shirt_c044c100ed.png"
]
const status: Array<string> = [
    "En Proceso",
    "Enviado",
    "Entregado"
]
const state = status[Math.floor(Math.random() * status.length)]
</script>