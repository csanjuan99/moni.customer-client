<script setup lang="ts">
import {useCartStore} from '~/stores/cart';
const cart = useCartStore()

// Data

const shipping = 10000;

const props = defineProps({
    link: {
        type: String,
        default: '/'
    }
})

// Methods
const getDiscount = (typeNumber) => {
    let discount = 0 
    cart.items.map((item) => {
        if(item.attributes.discount){
            discount = discount+((item.attributes.price*(item.attributes.discount/100))*item.attributes.quantity)
        }
    }) 
    if (typeNumber) {
        return discount
    }   
    return useCurrency(discount)
}
const getSubtotal = (typeNumber) => {
    let subtotal = 0 
    cart.items.map((item) => {
            subtotal = subtotal+(item.attributes.price*item.attributes.quantity)
    })    
    if (typeNumber) {
        return subtotal
    }
    return useCurrency(subtotal)
}

const getTotal = () =>{
    const subtotal = getSubtotal('typeNumber')
    const discount = getDiscount('typeNumber')
    // const discount = parcialDiscount*
    const totalParcial = subtotal-discount+shipping
    return totalParcial
}
</script>
<template>
    <section class="flex flex-col gap-11 sticky">
        <section>
            <h1 class="font-poppins font-semibold text-gray-900">Resumen de la compra</h1>
            <section class="flex flex-col gap-4">
                <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200 flex justify-between py-2">
                    <p>
                        Subtotal
                    </p>
                    <p>
                        {{ getSubtotal() }}
                    </p>
                </section>
                <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200 flex justify-between py-2">
                    <p>
                        Envio Estimado
                    </p>
                    <p>
                        {{ useCurrency(shipping) }}
                    </p>
                </section>
                <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200 flex justify-between py-2">
                    <p>
                        Descuentos
                    </p>
                    <p>
                       - {{ getDiscount() }}
                    </p>
                </section>
                <section class="font-poppins text-sm font-semibold text-gray-900 flex justify-between">
                    <p>
                        Valor Total
                    </p>
                    <p>
                        {{  useCurrency(getTotal()) }}
                    </p>
                </section>
                <NuxtLink
                    :to="link"
                    class="hover:cursor-pointer
                     w-full text-sm font-medium flex gap-2 text-white font-poppins px-[10px] py-5 bg-gray-800 justify-center rounded-lg ">
                    <button>
                        <IconShoppingCartIcon />
                    </button>
                    Ir a pagar
                </NuxtLink>
            </section>
        </section>
        <section class="flex flex-col">
            <h2 class="text-sm font-medium font-poppins text-gray-900 rounded-lg">Código de descuento</h2>
            <article class="flex gap-2">
                <input
                    class="w-full h-auto text-sm bg-gray-50 border border-gray-300 py-3 px-4 text-inter text-gray-500 rounded-lg"
                    type="text" placeholder="---- ---- ---- ----" />
                <button
                    class="text-white text-sm font-poppins font-medium rounded-lg leading-tight bg-gray-800 items-center py-[10px] px-5">Aplicar</button>
            </article>
            <span class="font-inter text-gray-500 text-sm leading-tight">Si tienes un cupon o codigo escribelo aquí</span>
        </section>
        <section>
            <h2 class="text-sm font-poppins font-medium text-gray-900 ">Métodos de pago</h2>
        </section>
    </section>
</template>