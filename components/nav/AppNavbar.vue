<script setup lang="ts">
const config = useRuntimeConfig();

const props = defineProps({
  y: {
    type: Number,
    required: true,
  }
})

const {data: routes} = useFetch(`${config.public.baseURL}/api/routes?fields[0]=src&fields[1]=name`)
const {data: configs} = useFetch(`${config.public.baseURL}/api/config?fields[0]=companyName&populate[companyLogo][fields][0]=name&populate[companyLogo][fields][1]=url`)


</script>

<template>
  <nav :class="[ y > 0 ? '': 'bg-white']"
       class="sticky top-0 left-0 w-full h-24 px-3 py-3 transition-all duration-200 ease-in-out z-50">
    <div class="flex items-center justify-between w-full h-full rounded-xl bg-white px-7">
      <div class="flex items-center gap-10">
        <div>
          <img
              v-if="configs.data.attributes.companyLogo"
              :src="`${config.public.baseURL}${configs.data.attributes.companyLogo.data.attributes.url}`"
              :alt="configs.data.attributes.companyLogo.data.attributes.name">
          <h1 v-else>
            {{ configs.data.attributes.companyName }}
          </h1>
        </div>
        <ul class="flex items-center gap-5">
          <li v-for="route in routes.data" :key="route.id">
            <NuxtLink class="font-medium text-base font-poppins" :to="route.attributes.src">
              {{ route.attributes.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  </nav>
</template>
