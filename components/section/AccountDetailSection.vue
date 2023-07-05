<template>
     <section class="p-8">
        <div class="grid grid-cols-4 md:grid-cols-12 gap-4 m-10">
            <div class="col-span-4 md:col-span-8 md:col-start-2">
                <p class="xs:text-sm md:text-xl md:mt-8 font-bold font-poppins text-gray-900 mt-3 mx-3 ">General information</p>

                <form action="#" class=" text-sm grid grid-cols-1 gap-4 p-3 mx-auto text-gray-900 font-poppins font-normal max-w-screen-md sm:grid-cols-2">
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
                </form>

                <p class="xs:text-sm md:text-xl md:mt-8 font-bold font-poppins text-gray-900 mt-3 mx-3 ">Password information</p>
                <form action="#" class=" text-sm grid grid-cols-1 gap-4 p-3 mx-auto text-gray-900 font-poppins font-normal max-w-screen-md sm:grid-cols-2 mb-5">
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
                </form>

                <div class=" p-4 rounded-md mb-10 mt-5">
                    <h3 class="text-lg font-semibold mb-1 text-gray-900">Password requirements:</h3>
                    <p class="text-gray-600">Ensure that these requirements are met:</p>
                    <ul class="list-none pl-6 text-gray-600">
                        <li>At least 10 characters (and up to 100 characters)</li>
                        <li>At least one lowercase character</li>
                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
                    </ul>
                </div>
                <button type="submit" class="py-3 px-5 mx-3 mt-10 md:col-span-2 xs:w-40 md:w-52 xs:my-auto flex items-center justify-center text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-gray-700 focus:bg-gray-00 focus:border-gray-500">
                    <span>Guardar dirección</span>
                </button>   
            </div>   
        </div>       
    </section>
</template>

<script>
export default {
  name: 'AccountDetailSection',
}
</script>