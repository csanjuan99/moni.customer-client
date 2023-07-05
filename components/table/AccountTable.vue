<template>
    <section class="w-full">
        <!--Mobile View-->
        <CardAppShoppingCard v-for="(product,index) in cart.items" :key="product.id" class="flex md:hidden" :product="product" :index="index" />
        <!--Desktop View -->
        <section class="hidden md:block rounded-lg border border-gray-200">
            <article
                    class="w-full grid sm:grid-cols-4 text-gray-500 font-inter uppercase text-xs font-semibold bg-gray-50 md:grid-cols-4 px-4 py-6 justify-items-center">
                <section class="justify-self-start uppercase">Producto</section>
                <section>Cantidad</section>
                <section>Precio Individual</section>
                <section>Acciones</section>
            </article>
            <article v-for="(product, index) in cart.items" :key="index"
                     class="hidden border-gray-200 border-b sm:grid md:grid-cols-4 px-4 py-6">
                <section class="flex flex-col lg:flex-row gap-2">
                    <img class="w-12 max-h-16"
                         :src="`${config?.public?.baseURL}${product?.attributes?.media?.data[0]?.attributes?.url}`"/>
                    <article class="flex flex-col">
                        <h3 class="font-poppins font-medium leading-[150%]">{{ product?.attributes?.name }}</h3>
                        <p class="font-poppins text-sm text-gray-500 leading-[150%]">
                            {{ product?.attributes?.description }}
                        </p>
                    </article>
                </section>
                <section class="flex justify-center items-center">
                    <ButtonCounterButtonApp :index="index" :quantity="product?.attributes?.quantity"/>
                </section>
                <section class="flex flex-col justify-center items-center">
                    <article class="flex flex-col gap-1">
                        <span :class="product?.attributes?.discount ? 'text-red-600 text-lg flex':'hidden'">
                            {{
                                useDiscount(
                                    product?.attributes?.price,
                                    product?.attributes?.discount
                                )
                            }} COP
                        </span>
                        <span :class="product?.attributes?.discount ? 'text-gray-500 line-through':''">
                            {{ useCurrency(product?.attributes?.price) }} COP
                        </span>
                    </article>
                </section>
                <section class="flex justify-center items-center">
                    <h3 class="text-red-600 text-xs hover:cursor-pointer flex gap-1 items-center font-poppins" @click="deleteProduct(product.id)">
                        <IconTrash />
                        Eliminar
                    </h3>
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
