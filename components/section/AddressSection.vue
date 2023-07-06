<template>
    <div>
        <div class="xs:mx-auto flex md:flex-row flex-col md:justify-between">
            <div class="flex flex-col">
                <div>
                    <h2 class="xs:text-base text-gray-900 font-poppins font-semibold">Dirección de Envío</h2>
                    <p class="xs:text-sm mt-4 text-gray-900 font-poppins font-medium ">MARÍA FERNANDA SOLANO RODRIGUE</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">mariasol9907@gmail.com</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">CRA 25 #36-68</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">APTO 302 /EDIF JUAN PABLO</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">Bucaramanga</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">Santander</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">+57 3177040589</p>
                    <p class="xs:text-sm text-gray-900 font-poppins font-medium ">680002</p>
                </div>
                <div class="col-span-2 xs:mt-6 md:col-span-4">
                    <button type="submit" class="py-3 px-5 md:w-64 text-xs font-medium font-poppins text-center text-white rounded-lg bg-black sm: hover: focus:" @click="$emit('mutateEdit')">Editar dirección</button>
                </div>
            </div>

            <div class="col-span-2 md:col-start-7">
                <button type="submit" class="md:w-64 xs:mt-6 p-2  text-xs font-medium font-poppins text-center text-red-600 rounded-lg bg-white sm: hover: focus:"> <TrashIcon/> Eliminar dirección </button>
            </div>
        </div> 
    </div>
</template>

<script setup lang="ts">
defineEmits(['mutateEdit']);
</script>