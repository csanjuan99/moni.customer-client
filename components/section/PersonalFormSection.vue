<template>
    <section>
        <div>
            <div class="grid grid-cols-1 py-3 lg:grid-cols-1">
                <div>
                    <h2 class="xs:text-base md:text-lg font-poppins font-bold leading-normal text-gray-900 m-1">Envío</h2>
                    <p class="xs:text-sm md:text-base font-poppins leading-normal text-gray-900 m-1">Recíbelo entre lunes 15 y jueves 18</p>
                </div>
                <div class="col-span-2 flex items-center ">
                    <p class="xs:text-sm md:text-lg font-poppins font-semibold text-green-600 self-end m-1">$ 10.000 COP</p>
                </div>
                <div class="col-span-3 underline decoration-1">
                    <p class="xs:text-sm md:text-base font-inter font-semibold text-gray-900 my-1">Política de envíos y devoluciones</p>
                </div>
            </div>
            <div class="py-3">
                <div class="p-3 rounded-md border border-black">
                    <p class="xs:text-xs md:text-base font-poppins font-normal">¿Ya tienes cuenta? <span class="xs:text-xs md:text-xl font-inter font-semibold underline decoration-1 text-gray-900">Iniciar sesión</span></p>
                </div>    
            </div>


            <p class="xs:text-sm md:text-xl md:mt-8 font-bold font-poppins text-gray-900 mt-3">Información de Envío</p>

            <FormsAppShippingData />

            
            <div class="xs:p-3">
                <div class="items-center py-5 gap-4 self-stretch"> <input id="addresCheckbox" type="checkbox" v-model="prueba" class="xs:text-xs md:text-sm font-inter text-gray-900 font-medium checked:bg-gray-900 mx-2"><label for="addresCheckbox">La dirección de facturación es igual a la del envío.</label></div>

                <div v-if="!prueba">
                    <p class="xs:text-sm md:text-xl font-bold font-poppins text-gray-900">Datos de facturación</p>
                </div>
 
                <FormsAppShippingData v-if="!prueba"/>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PersonalFormSection',
    data:() => ({
        prueba: true,
    })
}
</script>