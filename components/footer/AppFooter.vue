<script setup lang="ts">

// composables
const config = useRuntimeConfig();
// props
const props = defineProps({
  y: {
    type: Number,
    required: true,
  }
})
//data
const {data: routes} = useFetch(`${config.public.baseURL}/api/routes?fields[0]=src&fields[1]=name`);
const {data: configs} = useFetch(`${config.public.baseURL}/api/config?fields[0]=companyName&populate[companyLogo][fields][0]=name&populate[companyLogo][fields][1]=url`);

</script>

<template>
    <section class="grid grid-cols-4 md:grid-cols-10 lg:grid-cols-12 gap-3 md:gap-4 px-3 md:-px-4 py-14">
        <article class="w-full gap-5 flex flex-col col-span-4 lg:col-start-2 md:col-span-2 border-b-2 border-blue-200 pb-5 md:border-none">
            <span>
                <div>
                    <img
                        v-if="configs.data.attributes.companyLogo"
                        :src="`${config.public.baseURL}${configs.data.attributes.companyLogo.data.attributes.url}`"
                        :alt="configs.data.attributes.companyLogo.data.attributes.name">
                    <h1 v-else>
                    {{ configs.data.attributes.companyName }}
                    </h1>
                </div>
            </span>
            <span>
                ¡Descubre nuestras velas aromáticas en forma de postres hechas con cera de soja! 🕯🧁💖
            </span>
        </article>
        <article class="w-full md:col-start-4 col-span-4 lg:col-start-5 md:col-span-1 border-b-2 border-blue-200 pb-5 md:border-none">
            <ul class="flex flex-col items-left gap-5">
                <li v-for="(route,index) in routes.data" :key="index">
                    <NuxtLink class="font-medium text-base font-poppins" :to="route.attributes.src">
                        {{ route.attributes.name }}
                    </NuxtLink>
                </li>
            </ul>
        </article>
        <article class="flex flex-col gap-4 w-full col-span-4 md:col-start-6 lg:col-start-7 md:col-span-2 border-b-2 border-blue-200 pb-5 md:border-none">
            <span class="font-medium">
                Síguenos
            </span>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, magni.
            </span>
        </article>
        <article class="flex flex-col gap-4 w-full col-span-4 md:col-start-9 lg:col-start-10 md:col-span-2">
            <span class="font-medium">
                Ubicación
            </span>
            <span>
                Bucaramanga-Santander.
            </span>
        </article>
    </section>
</template>
