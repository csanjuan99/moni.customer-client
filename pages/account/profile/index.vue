<template>
    <section class="flex flex-col gap-6">
        <SectionBannerAccountSection/>
        <section class="grid grid-cols-4 md:grid-cols-12 gap-3 md:gap-4">
            <NavAccountNav class="md:col-span-3 lg:col-span-2 lg:col-start-2 hidden md:flex" />
            <sectionAccountDetailSection  class="col-span-4 md:col-span-9 lg:col-span-8"/>
        </section>
    </section>
</template>
<script setup>
</script>