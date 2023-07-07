<template>
    <section class="flex items-center gap-5 lg:gap-10 z-50">
        <div>
          <nuxt-link to="/">
            <img
                v-if="configs.data.attributes.companyLogo"
                :src="`${config.public.baseURL}${configs.data.attributes.companyLogo.data.attributes.url}`"
                :alt="configs.data.attributes.companyLogo.data.attributes.name">
            <h1 v-else>
              {{ configs.data.attributes.companyName }}
            </h1>
          </nuxt-link>
        </div>
          <ul class="hidden md:flex items-center gap-2 lg:gap-5">
            <li v-for="route in routes.data" :key="route.id">
              <NuxtLink v-if="route.attributes.src === '/products'" class="font-medium text-base font-poppins" :to="route.attributes.src" @mouseenter="mutateIsShowSale(true)" @click="mutateIsShowSale(false)">
                {{ route.attributes.name }}
              </NuxtLink>
              <NuxtLink v-else-if="route.attributes.src === '/acount'" class="hidden font-medium text-base font-poppins" :to="route.attributes.src" @mouseenter="mutateIsShowSale(false)">
                {{ route.attributes.name }}
              </NuxtLink>
              <NuxtLink v-else class="font-medium text-base font-poppins" :to="route.attributes.src" @mouseenter="mutateIsShowSale(false)">
                {{ route.attributes.name }}
              </NuxtLink>
            </li>
          </ul>
    </section>
</template>

<script>
export default {
    name: "AppList",
    setup() {
        const config = useRuntimeConfig()
        return {
        config,
        }
    },
    props: {
        routes: {
            type: Object,
            required: true,
        },
        configs: {
            type: Object,
            required: true,
        },
    },
    methods: {
        mutateIsShowSale(status,mouseLeave) {
          if (status || mouseLeave) {
            setTimeout(() => {
              this.$emit('mutateIsShowSale', status)
            }, 500);
            }else{
              this.$emit('mutateIsShowSale', status)
            }
          }

    },
}

</script>