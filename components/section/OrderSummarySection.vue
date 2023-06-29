<template>
    <section class="flex flex-col gap-11 sticky">
        <section>
            <h1 class="font-poppins font-semibold text-gray-900">Order Summary</h1>
            <section class="flex flex-col gap-4">
                <section class="grid grid-cols-2 ">
                    <article class="text-left">
                        <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200">
                             Subtotal
                        </section>
                        <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200">
                            Shipping estimate
                        </section>
                        <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200">
                            Descuentos
                        </section>
                        <section class="font-poppins text-sm font-medium text-gray-500 border-b border-gray-200">
                            Descuentos de
                        </section>
                        <section class="font-poppins text-sm font-semibold text-gray-900">
                            Order total
                        </section>
                    </article>
                    <article class="flex flex-col justify-end ">
                        <section class="font-poppins text-sm text-right font-medium text-gray-500 border-b border-gray-200">
                            $ 247
                        </section>
                        <section class="font-poppins text-sm text-right font-medium text-gray-500 border-b border-gray-200">
                            $8
                        </section>
                        <section class="font-poppins text-sm text-right font-medium text-gray-500 border-b border-gray-200">
                            -48
                        </section>
                        <section class="font-poppins text-sm text-right font-medium text-gray-500 border-b border-gray-200">
                           -48
                        </section>
                        <section class="font-poppins text-sm text-right text-gray-900 font-semibold">
                            $303
                        </section>
                    </article>
                </section>
                <NuxtLink
                    class="hover:cursor-pointer w-full text-sm font-medium flex gap-2 text-white font-poppins px-[10px] py-5 bg-gray-800 justify-center rounded-lg ">
                    <svg class="w-[20px] h-[20px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 18 21">
                        <path
                            d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                    </svg>
                    Ir a pagar
                </NuxtLink>
            </section>
        </section>
        <section class="flex flex-col">
            <h2 class="text-sm font-medium font-poppins text-gray-900 rounded-lg">Código de descuento</h2>
            <article class="flex gap-2">
                <input
                    class="w-full h-auto text-sm bg-gray-50 border border-gray-300 py-3 px-4 text-inter text-gray-500 rounded-lg"
                    type="text" placeholder="Input text" />
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
