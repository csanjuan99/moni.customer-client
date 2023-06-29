<template>
    <section class="flex flex-col justify-center items-center">
        <h1 class="font-poppins font-bold text-2xl py-[42px] px-[10px]">Bolsa de compras</h1>
        <section class="flex flex-col justify-center items-center sm:flex-row gap-3 sm:gap-4">
            <TableProductTable />
            <SectionOrderSummarySection />
        </section>
    </section>
</template>