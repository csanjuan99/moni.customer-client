<template>
    <section
    :class="{
      'modal-container': true,
      'animate-slide-left-out': !isShow,
      'hidden': !isShow,
      'animate-slide-left': isShow,
    }"
        class="bg-white absolute top-16 left-0 w-full h-screen -z-10 py-10 md:hidden flex-col overflow-y-auto ">
        <header class="py-3 px-7 flex justify-center items-center w-full border-b border-gray-500 relative">
            <span>
                Menu
            </span>
            <span class="absolute right-0 mr-7" @click="closeMenu">
                <IconCancel />
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
                            <IconRightArrow />
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
                        <IconLeftArrow />
                    </span>
                </li>
                <li v-for="(category,index) in categories" :key="index">
                    <div v-if="category.attributes.subcategories.data.length > 0" class="py-3 flex justify-between items-center" @click="mutateSubcategory(category.attributes.subcategories.data,category.attributes.name)">
                        <span>
                            {{ category.attributes.name }}
                        </span>
                        <span>
                            <IconRightArrow />
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
                       <IconLeftArrow />
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
                        <IconProfile />
                    </span>
                    <span>
                        Mi cuenta
                    </span>
                </li>
                <li class="py-4 flex gap-4">
                    <span>
                        <IconShoppingBag />
                    </span>
                    <span>
                        Carrito de compras
                    </span>
                </li>
                <li class="py-4 flex gap-4">
                    <span>
                        <IconLikeHeart />
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