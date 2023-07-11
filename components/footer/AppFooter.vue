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
    <section class="flex flex-col sm:flex-row w-full px-5 md:px-14 lg:px-24 py-16 gap-10 lg:gap-28 justify-between">
        <article class="w-full sm:max-w-sm gap-5 flex flex-col">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum neque aliquid, nesciunt, cum provident laboriosam, ratione quisquam iure saepe iusto eveniet? Quaerat omnis facere voluptas.
            </span>
        </article>
        <article class="w-full sm:max-w-sm">
            <ul class="flex flex-col items-left gap-5">
                <li v-for="(route,index) in routes.data" :key="index">
                    <NuxtLink class="font-medium text-base font-poppins" :to="route.attributes.src">
                        {{ route.attributes.name }}
                    </NuxtLink>
                </li>
            </ul>
        </article>
        <article class="flex flex-col gap-4 w-full sm:max-w-sm">
            <span class="uppercase font-medium">
                follow Us
            </span>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, magni.
            </span>
        </article>
        <article class="flex flex-col gap-4 max-w-sm">
            <span class="uppercase font-medium">
                location
            </span>
            <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, magni.
            </span>
        </article>
        
    </section>
</template>
