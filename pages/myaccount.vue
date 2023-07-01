<template>
    <section class="flex flex-col gap-6">
        <SectionBannerAccountSection/>
        <section class="grid grid-cols-4 md:grid-cols-11 lg:grid-cols-12 gap-3 sm:gap-4">
            <NavAccountNav class="grid-span-2 col-start-2 col-end-4" />
            <SectionAccountViewsSection class="grid-span-8 col-start-3 col-end-12"/>
        </section>
    </section>
</template>
<script setup>
</script>