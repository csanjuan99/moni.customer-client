<template>
    <section>
        <img :class="isHover ? 'scale-125' : ''"
            class="transition-all ease-in-out delay-150 duration-1000 relative w-full h-full object-cover object-center"
            :src="`${config.public.baseURL}${data.attributes.image.data.attributes.url}`"
            :alt="data.category.attributes.image.data.attributes.url" @mouseover="isHover = true"
            @mouseleave="isHover = false" />

        <article class="flex flex-col gap-2 absolute items-center"
            v-if="data.attributes.linkCta && data.attributes.textCta">
            <h2 class="text-white font-inter font-medium text-5xl">{{ data.attributes.name }}</h2>
            <NuxtLink
                class="font-poppins text-white hover:bg-gray-700 text-sm px-5 py-[10px] rounded-lg border border-white hover:border-transparent ease-in-out duration-150"
                :to="`${data.attributes.linkCta}`">
                {{ data.attributes.textCta }}
            </NuxtLink>
        </article>
        {{ data.attributes }}
    </section>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
const isHover = ref(false)
const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    },
})
</script>
