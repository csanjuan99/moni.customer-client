<template>
    <section
    :class="{
      'modal-container': true,
      'animate-slide-left-out': !isShow,
      'hidden': !isShow,
      'animate-slide-left': isShow,
    }"
        class="bg-white absolute top-16 left-0 w-full h-screen -z-10 py-10 md:hidden flex-col overflow-y-auto ">
        <!-- :class="isShow ? 'animate-slide-left flex transition-opacity' : 'animate-slide-left-out transition-opacity opacity-0'"  -->
        <header class="py-3 px-7 flex justify-center items-center w-full border-b border-gray-500 relative">
            <span>
                Menu
            </span>
            <span class="absolute right-0 mr-7" @click="closeMenu">
                <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>  
            </span>
        </header>
        <main class="flex border-b border-gray-500 h-96 overflow-auto">
            <ul v-if="!activeCategories" class="flex flex-col w-full animate-slide-left">
                <li v-for="(route,index) in routes" :key="index" class="px-7 py-3 flex justify-between items-center">
                    <nuxt-link v-if="route.attributes.src === '/products' || route.attributes.src === '/acount' || route.attributes.src === '/about-us'" :to="route.attributes.src" class="hidden">
                        {{route.attributes.name}}
                    </nuxt-link>
                    <nuxt-link v-else :to="route.attributes.src">
                        {{route.attributes.name}}
                    </nuxt-link>
                    <div v-if="route.attributes.src === '/products'" class="flex justify-between w-full items-center" @click="activeCategories = !activeCategories">
                        <span>
                            Productos
                        </span>
                        <span>
                            <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </span>
                    </div>
                </li>
            </ul>
            <ul v-if="activeCategories && !activateSubcategory" class="flex flex-col w-full px-7 animate-slide-left">
                <li class="py-3 flex justify-center items-center w-full relative" @click="activeCategories = !activeCategories">
                    <span class="text-center w-full">
                        Productos
                    </span>
                    <span class="absolute left-0">
                        <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                    </span>
                </li>
                <li v-for="(category,index) in categories" :key="index">
                    <div v-if="category.attributes.subcategories.data.length > 0" class="py-3 flex justify-between items-center" @click="mutateSubcategory(category.attributes.subcategories.data,category.attributes.name)">
                        <span>
                            {{ category.attributes.name }}
                        </span>
                        <span>
                            <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path>
                            </svg>
                        </span>
                    </div>
                    <div v-else class="py-3 flex justify-between items-center">
                        <span>
                            {{ category.attributes.name }}
                        </span>
                    </div>
                </li>
            </ul>
            <ul v-if="activeCategories && activateSubcategory" class="flex flex-col w-full px-7 animate-slide-left">
                <li class="py-3 flex justify-center items-center w-full relative" @click="activateSubcategory = !activateSubcategory">
                    <span class="text-center w-full">
                        {{ nameSubcategory }}
                    </span>
                    <span class="absolute left-0">
                        <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                        </svg>
                    </span>
                </li>
                <li v-for="(subcategory,index) in subcategories" :key="index" class="py-3 flex justify-between items-center">
                    <nuxt-link :to="`/products/${subcategory.attributes.name}`">
                        {{ subcategory.attributes.name }}
                    </nuxt-link>
                </li>
            
            </ul>
        </main>
        <footer class="px-7 animate-slide-left">
            <ul>
                <li class="py-4 flex gap-4">
                    <span>
                        <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </span>
                    <span>
                        Mi cuenta
                    </span>
                </li>
                <li class="py-4 flex gap-4">
                    <span>
                        <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
</svg>
                    </span>
                    <span>
                        Carrito de compras
                    </span>
                </li>
                <li class="py-4 flex gap-4">
                    <span>
                        <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
</svg>
                    </span>
                    <span>
                        Favoritos
                    </span>
                </li>
                <li class="py-4 flex gap-4">
                    <span>
                        <svg fill="none" class="w-6" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"></path>
</svg>
                    </span>
                    <span>
                        Nosotros
                    </span>
                </li>
            </ul>
        </footer>
    </section>
</template>

<script>
export default {
    name: "AppFilterModal",
    setup() {
        const config = useRuntimeConfig()
        return {
            config,
        }
    },
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        routes: {
            type: Array,
            default: () => []	
        },
        categories: {
            type: Array,
            default: () => []	
        },
    },
    data() {
        return {
            activeCategories: false,
            activateSubcategory: false,
            subcategories: []	,
            nameSubcategory: '',
        }
    },
    methods: {
        mutateSubcategory(subcategories, subcategoriesName) {
            this.activateSubcategory = !this.activateSubcategory
            this.subcategories = subcategories
            this.nameSubcategory = subcategoriesName
        },
        closeMenu() {
            this.$emit('closeMenu')
        },
    }
}
</script>
<style scoped>
.modal-container {
  transition: opacity 300ms ease-out;
}
</style>