<template>

    <section v-if="isShow" class="bg-white absolute mx-8 md:mx-0 md:right-4 right-0 top-32 md:w-[428px] w-11/12 z-50 rounded-xl py-5 flex flex-col gap-8">
        <header class="flex justify-between items-center border-b border-black-300 pb-3 px-3">
            <span>
                Bolsa de compras
            </span>
            <span>
                <IconCancel @click="$emit('mutateIsShowshopping')"/>
            </span>
        </header>
        <main class="px-14 overflow-scroll max-h-96 flex flex-col gap-6">
            <CardAppShoppingCard v-for="(product) in cart.items" :key="product.id" :product="product" @calculateSubtotal="calculateSubtotal"/>
            <section v-if="cart.items.length < 1" class="flex flex-col items-center gap-5">
                 <span>
                    No hay productos en la bolsa :(
                 </span>
                 <button class="bg-gray-800 text-white w-full py-3 px-5 rounded-lg">
                    Ver más productos
                </button>
            </section>
        </main>
        <footer v-if="cart.items.length > 0" class="px-14 flex flex-col gap-3 border-t border-gray-500 py-9">
            <article class="flex justify-between font-semibold text-lg">
                <span>Subtotal</span>
                <span>{{ useCurrency(total) }} COP</span>
            </article>
            <article class="flex flex-col gap-6 w-full">
                <span class="text-justify text-sm">
                    Impuesto incluído y envío calculado en el momento de la compra.
                </span>
                <button class="bg-gray-800 text-white w-full py-3 px-5 rounded-lg">
                    Ir a pagar
                </button>
            </article>
        </footer>
    </section>
    <section v-if="isShow" class="w-screen h-full bg-black/50 fixed top-0 left-0" @click="$emit('mutateIsShowshopping')"></section>
</template>

<script>
import {useCartStore} from "~/stores/cart";
import { useSubtotal } from "~/composables/useSubtotal";

export default {
    name: "AppFilterModal",
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data: ()=> ({
        cart: useCartStore(),
        total:0,
        subtotal:[],    
    }),
    emits: ['mutateIsShowshopping'],
    methods: {
        calculateSubtotal(price,quantity,index){
            this.subtotal[index] = price * quantity;
            const parcial = this.subtotal.reduce((a ,b )=> a + b)
            this.total = parcial
            useSubtotal(this.total)
        }
    }
}
</script>