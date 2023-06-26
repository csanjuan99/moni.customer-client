<template>
    <section  class="flex flex-row-reverse md:flex-row justify-between w-full">
        <article class="flex md:hidden" @click="()=> {navbarMobile = !navbarMobile}">
          <svg fill="none" class="w-10" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
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
    emits: ['mutateIsShowSale','mutateIsShowFilter','mutateIsShowshopping'],
    methods: {
        mutateIsShowSale(status) {
            this.$emit('mutateIsShowSale', status)
        },
        mutateIsShowFilter() {
            this.$emit('mutateIsShowFilter')
        },
        mutateIsShowshopping() {
            this.$emit('mutateIsShowshopping')
        },
    },

}
</script>