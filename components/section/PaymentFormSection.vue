<template>
    <section>
        <div>   
            <div id="accordion-arrow-icon" data-accordion="open">
                <div>
                    <h2 id="accordion-arrow-icon-heading-1">
                        <button type="button" class="xs:text-xs flex items-center w-full px-3 py-4 font-medium font-poppins text-left text-gray-900 bg-gray-50 rounded-lg border-gray-300 border rounded-t-xl" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
                            <div class="bg-white rounded-full border-gray-300 border w-12 h-12 flex justify-center items-center focus:border-black focus:border-4">
                                <IconCreditCard />

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
                                <IconPse />
                                <!-- <img src="~/image/BotonPSE 1.png" alt="" class="mx-auto rounded-full w-10 h-10"> -->
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
    </section>
</template>

<script setup lang="ts">
// import shoppingCart from '@/components/icon/ShoppingCartIcon.vue';
import { Accordion } from 'flowbite'

onMounted(() => {
    // create an array of objects with the id, trigger element (eg. button), and the content element
    const accordionItems = [
        {
            id: 'accordion-arrow-icon-heading-1',
            triggerEl: document.querySelector('#accordion-arrow-icon-heading-1'),
            targetEl: document.querySelector('#accordion-arrow-icon-body-1'),
            active: true
        },
        {
            id: 'accordion-arrow-icon-heading-2',
            triggerEl: document.querySelector('#accordion-arrow-icon-heading-2'),
            targetEl: document.querySelector('#accordion-arrow-icon-body-2'),
            active: false
        },
        // {
        //     id: 'accordion-example-heading-3',
        //     triggerEl: document.querySelector('#accordion-example-heading-3'),
        //     targetEl: document.querySelector('#accordion-example-body-3'),
        //     active: false
        // }
    ];
    // options with default values
    const options = {
        alwaysOpen: true,
        activeClasses: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
        inactiveClasses: 'text-gray-500 dark:text-gray-400',
        onOpen: (item:any) => {
        },
        onClose: (item:any) => {
        },
        onToggle: (item:any) => {
        },
    };
    if (document.querySelector('#accordion-arrow-icon-heading-1')) {
        /*
        * accordionItems: array of accordion item objects
        * options: optional
        */
        const accordion = new Accordion(accordionItems, options);
        // open accordion item based on id
        accordion.open('accordion-arrow-icon-heading-2');
    }
});
</script>