<template>
    <section
        class="z-40 absolute top-0 bg-black opacity-25 w-full h-screen flex md:grid md:grid-cols-5 sm:grid-cols-4 lg:grid-cols-12 items-center">
        <article
            class="bg-white col-span-2 md:col-span-5 lg:col-start-4 col-start-2 col-end-5 md:col-start-2 md:col-end-4 
            lg:col-end-9 w-full h-full md:h-max flex flex-col md:justify-center z-50 rounded-lg max-h-[903px]">
            <section class="flex justify-between items-center p-6 border border-b-gray-300 rounded-t-lg">
                <article class="flex gap-4 items-center ">
                    <svg class="w-[42px] h-[42px] text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <h1 class="text-lg font-semibold font-poppins text-gray-900"> Resumen de compra</h1>
                </article>
                <article class="flex gap-4 items-center hover:cursor-pointer">
                    <h3 class="font-inter text-xs underline text-gray-900">Regresar al inicio</h3>
                    <svg class="w-[20px] h-[20px] text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="m9.414 8 5.293-5.293a1 1 0 1 0-1.414-1.414L8 6.586 2.707 1.293a1 1 0 0 0-1.414 1.414L6.586 8l-5.293 5.293a1 1 0 1 0 1.414 1.414L8 9.414l5.293 5.293a1 1 0 0 0 1.414-1.414L9.414 8Z" />
                    </svg>
                </article>
            </section>
            <section class="p-6 text-lg font-semibold font-poppins text-gray-900">
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Número de pedido: </h2>
                    <h2>#27871</h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Fecha de pedido: </h2>
                    <h2>Mayo 11, 2023</h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 text-right border-b-gray-300">
                    <h2>Número de guía:</h2>
                    <h2 class="text-right">Coordinadora <br> #3727982749279</h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Producto:</h2>
                    <h2>Blusa denim, talla s </h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Cantidad:</h2>
                    <h2>1</h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Envío:</h2>
                    <h2>7.000 COP</h2>
                </article>
                <article class="flex justify-between items-center border-b py-3 border-b-gray-300">
                    <h2>Método de pago</h2>
                    <h2 class="text-right">Crédito Visa <br>
                        **** **** **** 4567</h2>
                </article>
                <article class="flex justify-between py-[15px] items-center text-xl font-bold">
                    <h1>Total:</h1>
                    <h1>190.000 COP</h1>
                </article>
            </section>
            <section class="flex flex-col md:grid md:grid-cols-2 font-xs text-base font-medium font-poppins p-6 gap-12 md:gap-5">
                <article>
                    <h1>DIRECCIÓN DE FACTURACIÓN</h1>
                    <br>
                    <p>
                        MARÍA FERNANDA SOLANO RODRIGUEZ <br>
                        CRA 25 #36-68APTO 302 /EDIF JUAN PABLO <br>
                        Bucaramanga <br>
                        Santander <br>
                        680002 <br>
                        3177040591 <br>
                        fernandarodriguez9907@gmail.com
                    </p>
                </article>
                <article>
                    <h1>DIRECCIÓN DE FACTURACIÓN</h1>
                    <br>
                    <p>
                        MARÍA FERNANDA SOLANO RODRIGUEZ <br>
                        CRA 25 #36-68APTO 302 /EDIF JUAN PABLO <br>
                        Bucaramanga <br>
                        Santander <br>
                        680002 <br>
                    </p>
                </article>
            </section>
        </article>
    </section>
</template>