<template>
    <section class="grid grid-cols-4 md:grid-cols-12 gap-4 px-6">
      <!-- <h1 class="font-poppins font-bold col-span-4 md:col-span-12 m-auto">Bolsa de compras</h1> -->
        <SectionPaymentFormSection class="col-span-4 md:col-span-6 md:col-start-2" />
        <SectionOrderSummarySection class="col-span-4 md:col-span-3 md:col-start-9" :textButton="'Finalizar Pedido'" :activateModal="true" @mutateActiveModal="mutateActiveModal"/>
        <ModalsInvoice class="fixed z-50 top-0 left-0" :active="active" @mutateActiveModal="mutateActiveModal" />
   </section>
</template> 
<script setup lang="ts">

const active = ref(false)

const mutateActiveModal = () => {
    active.value = !active.value
}

</script>