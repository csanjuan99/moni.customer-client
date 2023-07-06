<template>
    <section class="grid grid-cols-4 md:grid-cols-12 gap-4 px-6">
        <SectionPersonalFormSection class="col-span-4 md:col-span-6 md:col-start-2"/>
        <SectionOrderSummarySection class="col-span-4 md:col-span-3 md:col-start-9" :link="'/cart/formPayment'"/>
    </section>
</template>

<script setup lang="ts">
</script>