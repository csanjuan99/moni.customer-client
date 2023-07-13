<template>
    <section  class="grid grid-cols-4 md:grid-cols-12 w-full gap-3 md:gap-4">
        
        <NavAppList class="md:col-span-4 lg:col-start-2 col-span-2 md:order-1 " :routes="routes" :configs="configs" @mutateIsShowSale="mutateIsShowSale"/>
        
        <NavAppNavbarIcons
        class="md:col-span-5 lg:col-span-3 md:col-start-10 lg:col-start-9 col-span-2 md:order-2 overflow-x-hidden"
        :isShowFilter="isShowFilter" :isShowshopping="isShowshopping" 
        @mutateIsShowFilter="mutateIsShowFilter" @mutateIsShowshopping="mutateIsShowshopping"
        @mutateNavbarMobile="mutateNavbarMobile"
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
        mutateNavbarMobile() {
            this.$emit('mutateNavbarMobile')
        },
    },

}
</script>