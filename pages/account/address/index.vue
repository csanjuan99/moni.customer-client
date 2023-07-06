<template>
    <section class="flex flex-col gap-6">
        <SectionBannerAccountSection/>
        <section class="grid grid-cols-4 md:grid-cols-12 gap-3 md:gap-4">
            <NavAccountNav class="md:col-span-3 lg:col-span-2 lg:col-start-2 hidden md:flex" />
            <section class="flex">
                <SectionAddressSection v-if="!edit && !remove" class="col-span-4 md:col-span-9 lg:col-span-8" @mutateEdit="mutateEdit"/>
                <SectionAddressSection v-if="!edit && !remove" class="col-span-4 md:col-span-9 lg:col-span-8" @mutateEdit="mutateEdit"/>

            </section>
            <SectionFormAddressSection v-if="edit" class="col-span-4 md:col-span-9 lg:col-span-8"  @mutateEdit="mutateEdit"/>
            <SectionNoAddressSection v-if="remove" class="col-span-4 md:col-span-9 lg:col-span-8"/>
        </section>
    </section>
</template>
<script setup lang="ts">

const edit = ref(false);
const remove = ref(false);

// Methods
const mutateEdit = ()=>{
    edit.value = !edit.value
}
</script>