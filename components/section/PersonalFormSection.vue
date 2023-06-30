<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="grid grid-cols-1 lg:grid-cols-3">
                <div class="col-span-2 mb-8 lg:mb-0">
                    <div class="grid grid-cols-1 lg:gap-8 p-3 lg:grid-cols-1">
                        <div>
                            <h2 class="xs:text-sm font-poppins font-bold leading-normal text-gray-900 m-1">Envío</h2>
                            <p class="xs:text-xs font-poppins leading-normal text-gray-900 m-1">Recíbelo entre lunes 15 y jueves 18</p>
                        </div>
                        <div class="col-span-2 flex items-center ">
                            <p class="xs:text-sm font-poppins font-semibold text-green-600 self-end m-1">9.000 COP</p>
                        </div>
                    <div class="col-span-3 underline decoration-1">
                        <p class="xs:text-xs font-inter font-semibold text-gray-900 m-1">Política de envíos y devoluciones</p>
                    </div>
                </div>
                    <div class="p-3">
                        <div class="p-3 rounded-md border border-black">
                            <p class="xs:text-xs font-poppins font-normal">¿Ya tienes cuenta? <span class="xs:text-xs font-inter font-semibold underline decoration-1 text-gray-900">Iniciar sesión</span></p>
                        </div>    
                    </div>


                    <p class="xs:text-sm font-bold font-poppins text-gray-900 mt-3 mx-3 ">Información de Envío</p>

                    <form action="#" class="grid grid-cols-1 p-3 gap-2 mx-auto text-gray-900 font-poppins font-normal max-w-screen-md sm:grid-cols-2">
                      <div>
                          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Primer Nombre</label>
                          <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Thomas" required>
                      </div>
                      <div>
                          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                          <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Lean" required>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                      </div>
                      <div>
                          <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pais</label>
                          <input type="text" id="country" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Estados unidos" required>
                      </div>
                      <div>
                          <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departamento</label>
                          <input type="text" id="department" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Santander" required>
                      </div>
                      <div>
                          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                          <input type="text" id="city" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="San francisco" required>
                      </div>
                      <div>
                          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Direccion</label>
                          <input type="text" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tu direccion completa" required>
                      </div>
                      <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                          <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                      <div>
                          <label for="zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zip/Codigo postal </label>
                          <input type="number" id="zip" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                    </form>

                    <div class=" pt-8 items-center gap-2 self-stretch"> <input type="checkbox"  v-model="prueba" class="xs:text-xs font-inter text-gray-900 font-medium checked:bg-gray-900 mx-2"><span>La dirección de facturación es igual a la del envío.</span></div>

                    <div>
                        <p v-if="prueba" class="xs:text-sm font-bold font-poppins text-gray-900 mt-3 mx-3 ">Datos de facturación</p>
                    </div>

                    <form v-if="prueba" action="#" class="grid grid-cols-1 p-3 gap-2  text-gray-900 font-poppins font-normal mx-auto max-w-screen-md sm:grid-cols-2">
                        <div>
                          <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Primer Nombre</label>
                          <input type="text" id="first-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Thomas" required>
                      </div>
                      <div>
                          <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                          <input type="text" id="last-name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Lean" required>
                      </div>
                      <div>
                          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tu email</label>
                          <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
                      </div>
                      <div>
                          <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pais</label>
                          <input type="text" id="country" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Estados unidos" required>
                      </div>
                      <div>
                          <label for="department" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Departamento</label>
                          <input type="text" id="department" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Santander" required>
                      </div>
                      <div>
                          <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                          <input type="text" id="city" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="San francisco" required>
                      </div>
                      <div>
                          <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Direccion</label>
                          <input type="text" id="address" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Tu direccion completa" required>
                      </div>
                      <div>
                          <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                          <input type="number" id="phone-number" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                      <div>
                          <label for="zip" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Zip/Codigo postal </label>
                          <input type="number" id="zip" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required>
                      </div>
                    </form>
                </div>
                
                <div class="grid grid-cols-1 col-span-1 gap-8 px-6 py-4 sm:grid-cols-2 lg:grid-cols-1">
                        <div class="grid grid-cols-2 gap-y-2 font-poppins">
                            <h2 class="col-span-2 xs:text-base text-gray-900 font-semibold">Order summary</h2>
                            <p class="xs:text-sm text-gray-500 font-normal">subtotal</p>
                            <p class="xs:text-base text-right text-gray-900 font-semibold">$247</p>
                            <p class="xs:text-sm text-gray-500 font-normal">Shipping estimate</p>
                            <p class="xs:text-base text-right text-gray-900 font-semibold">$8</p>
                            <p class="xs:text-sm text-gray-500 font-normal">Descuentos</p>
                            <p class="xs:text-base text-right text-gray-900 font-semibold">-$48</p>
                            <p class="xs:text-sm text-gray-500 font-normal">order total</p>
                            <p class="xs:text-base text-right text-gray-900 font-semibold">$303</p>
                        </div>
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-800 sm:w-fit hover: focus:ocus:  focus:  dark: ">Send message</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PersonalFormSection',
    data:() => ({
        prueba: " ",
    })
}
</script>