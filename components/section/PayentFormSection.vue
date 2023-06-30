<template>
    <section class="">
        <div class="grid grid-cols-4 md:grid-cols-12 gap-4 p-8">
            <div class="col-span-4 md:col-span-6 md:col-start-2">   
                <div id="accordion-arrow-icon" data-accordion="open">
                    <div>
                        <h2 id="accordion-arrow-icon-heading-1">
                            <button type="button" class="xs:text-xs flex items-center w-full px-3 py-4 font-medium font-poppins text-left text-gray-900 bg-gray-50 rounded-lg border-gray-300 border rounded-t-xl" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                                <div class="bg-white rounded-full border-gray-300 border w-12 h-12 flex justify-center items-center focus:border-black focus:border-4">
                                    <img src="../image/card.png" alt="" class="mx-auto rounded-full w-10 h-10">
                                </div>
                                <div class="px-3">
                                    <p class="mb-1 text-gray-900">Nueva Tarjeta</p>
                                    <p class="text-gray-500">Crédito, Visa débito o MasterCard débito</p>
                                </div>
                            </button>
                        </h2>

                        <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
                            <div class="p-5 mt-3 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <form action="#" class=" text-sm grid grid-cols-1 gap-4 p-3 mx-auto text-gray-900 font-poppins font-normal max-w-screen-md sm:grid-cols-2">
                                    <div class="md:col-span-6">
                                        <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Titular de la tarjeta*</label>
                                        <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  required>
                                    </div>
                                    <div class="md:col-span-6">
                                        <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero de Tarjeta*</label>
                                        <input type="number" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="---- ---- ---- -----" required>
                                    </div>
                                    <div class="md:col-span-6">
                                        <label for="expiration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha de caducidad*</label>
                                        <div class="grid grid-cols-2 gap-2  ">
                                            <select id="expiration-year" class="shadow-sm mb-2 col-span-4 md:col-span-2 md:col-end-2  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                                <option value="" disabled selected>Año</option>
                                                <option value="2021">21</option>
                                                <option value="2022">22</option>
                                                <option value="2023">23</option>
                                            </select>
                                            <select id="expiration-month" class="shadow-sm mb-2 col-span-4 md:col-span-2 md:col-start-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                                <option value="" disabled selected>Mes</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="">
                                        <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Codigo cvv*</label>
                                        <input type="text" id="country" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="---" required>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <h2 id="accordion-arrow-icon-heading-2">
                            <button type="button" class="xs:text-xs flex items-center w-full px-3 py-4 font-medium font-poppins text-left text-gray-900 bg-gray-50 rounded-lg border-gray-300 border rounded-t-xl" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="true" aria-controls="accordion-arrow-icon-body-2">
                                <div class="bg-white rounded-full border-gray-300 border w-12 h-12 flex justify-center items-center focus:border-black focus:border-4">
                                    <img src="../image/BotonPSE 1.png" alt="" class="mx-auto rounded-full w-10 h-10">
                                </div>
                                <div class="px-3">
                                    <p class="mb-1 text-gray-900">PSE</p>
                                    <p class="text-gray-500">El pago se acreditará al instante</p>
                                </div>
                            </button>
                        </h2>
                        <div id="accordion-arrow-icon-body-2" aria-labelledby="accordion-arrow-icon-heading-2">
                            <div class="p-5 mt-3 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <form action="#" class=" text-sm grid grid-cols-1 gap-4 p-3 mx-auto text-gray-900 font-poppins font-normal max-w-screen-md sm:grid-cols-2">
                                    <div class="md:col-span-6">
                                        <label for="bank" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Banco*</label>
                                        <select id="bank" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
                                            <option value="" disabled selected>Elige un banco</option>
                                            <option value="banco1">Banco 1</option>
                                            <option value="banco2">Banco 2</option>
                                            <option value="banco3">Banco 3</option>
                                            <!-- Agrega las opciones de los bancos restantes -->
                                        </select>
                                    </div>
                                    <div class="md:col-span-6">
                                        <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre del titular de la cuenta bancaria*</label>
                                        <input type="number" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
                                    </div>
                                    <div class="grid grid-cols-2 gap-2 md:col-span-6 ">
                                        <div>
                                            <label for="expiration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tipo de documento*</label>
                                            <div>
                                                <select id="expiration-year" class="shadow-sm mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                                    <option value="" disabled selected></option>
                                                    <option value="2021">21</option>
                                                    <option value="2022">22</option>
                                                    <option value="2023">23</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero de documento*</label>
                                        <input type="number" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
                                        </div>
                                    </div>
                                    <div class="md:col-span-6">
                                        <label for="expiration" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Telefono movil*</label>
                                        <div class="grid grid-cols-2 gap-2 ">
                                            <select id="expiration-year" class="shadow-sm mb-2 md:col-end-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                                <option value="" disabled selected>+ 57</option>
                                                <option value="2021">21</option>
                                                <option value="2022">22</option>
                                                <option value="2023">23</option>
                                            </select>
                                            <select id="expiration-month" class="shadow-sm mb-2 md:col-start-1 md:col-span-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light">
                                                <option value="" disabled selected>Numero telefonico</option>
                                                <option value="01">01</option>
                                                <option value="02">02</option>
                                                <option value="03">03</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-4 xs:py-4 xs:px-6 ">
                <div class="grid grid-cols-2 gap-y-2 font-poppins mb-4">
                    <h2 class="col-span-2 xs:text-base md:text-base text-gray-900 font-semibold">Order summary</h2>
                    <p class="xs:text-sm text-gray-500 font-normal">subtotal</p>
                    <p class="xs:text-base text-right text-gray-900 font-semibold">$247</p>
                    <p class="xs:text-sm text-gray-500 font-normal">Shipping estimate</p>
                    <p class="xs:text-base text-right text-gray-900 font-semibold">$8</p>
                    <p class="xs:text-sm text-gray-500 font-normal">Descuentos</p>
                    <p class="xs:text-base text-right text-green-600 font-semibold">-$48</p>
                    <p class="xs:text-sm text-gray-900 font-semibold">order total</p>
                    <p class="xs:text-base text-right text-gray-900 font-semibold">$303</p>
                </div>
                <button type="submit" class="py-3 px-5 xs:w-full md:w-full xs:my-auto flex items-center justify-center text-sm font-medium text-center text-white rounded-lg bg-gray-900 sm:w-fit hover:bg-gray-700 focus:bg-gray-00 focus:border-gray-500">
                    <shoppingCart class="w-4 h-4 mr-2" />
                    <span>Ir a pagar</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import shoppingCart from '@/components/icon/ShoppingCartIcon.vue';
export default {
    name: 'PaymentFormSection',
    components: {
        shoppingCart
    },
}
</script>