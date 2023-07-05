<template>
    <div class="grid grid-cols-4 md:grid-cols-12 gap-3">
        <div  class="col-span-4 p-8 md:col-span-8 md:col-start-2 xs:mx-auto">
            <h2 class="xs:text-base text-gray-900 font-poppins font-semibold">Dirección de Envío</h2>
            <p class="xs:text-sm xs:mt-4 text-gray-900 font-poppins font-medium ">No hay direcciones de envío guardadas</p>
            <div class="col-span-2 xs:mt-5 md:col-span-4">
                <button type="submit" class="py-3 px-5 md:w-64 text-xs font-medium font-poppins text-center text-white rounded-lg bg-black sm: hover: focus:">Agregar dirección</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NoAddressSection',
}
</script>