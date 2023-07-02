<template>
    <section class="flex flex-col gap-6">
        <SectionBannerAccountSection/>
        <section class="grid grid-cols-4 md:grid-cols-11 lg:grid-cols-12 h-auto gap-3 sm:gap-4">
            <NavAccountNav class="md:grid-span-2 md:col-start-2 md:col-end-4" />
            <SectionAccountViewsSection class="md:grid-span-8 md:col-start-4 md:col-end-12"/>
        </section>
    </section>
</template>
<script setup>
</script>