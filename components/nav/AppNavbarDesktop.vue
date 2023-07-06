<template>
    <section  class="flex flex-row-reverse md:flex-row justify-between w-full">
        <article class="flex md:hidden" @click="$emit('mutateNavbarMobile')">
          <IconHamburger />
        </article>

        <NavAppList :routes="routes" :configs="configs" @mutateIsShowSale="mutateIsShowSale"/>

        <NavAppNavbarIcons
          :isShowFilter="isShowFilter" :isShowshopping="isShowshopping" 
          @mutateIsShowFilter="mutateIsShowFilter" @mutateIsShowshopping="mutateIsShowshopping"
        />
    </section>
</template>

<script>

export default {
    name: "AppNavbarDesktop",
    setup() {
        const config = useRuntimeConfig()
        return {
        config,
        }
    },
    props: {
        navbarMobile: {
            type: Boolean,
            required: true,
        },
        routes: {
            type: Object,
            required: true,
        },
        configs: {
            type: Object,
            required: true,
        },
        isShowFilter: {
            type: Boolean,
            required: true,
        },
        isShowshopping: {
            type: Boolean,
            required: true,
        },
    },
    data: () => ({
        route:  useRoute(),
    }),
    computed: {
        path() {
             return this.route.fullPath.split('/').find((p) => p === 'cart')
        },
    }, 
    emits: ['mutateIsShowSale','mutateIsShowFilter','mutateIsShowshopping','mutateNavbarMobile'],
    methods: {
        mutateIsShowSale(status) {
            this.$emit('mutateIsShowSale', status)
        },
        mutateIsShowFilter() {
            this.$emit('mutateIsShowFilter')
        },
        mutateIsShowshopping() {
            if (this.path !== 'cart') {
                this.$emit('mutateIsShowshopping')
            }
        },
    },

}
</script>