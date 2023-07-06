<template>
    <section class="w-full h-auto">
        <nav class="flex flex-col">
            <ul class="text-lg font-regular font-poppins">
                <li class="py-3 px-6"> 
                    <nuxt-link to="/account/orders">        
                        <button :class="path === 'orders' ? 'text-primary-600':'text-black'" class=" hover:text-primary-600 flex gap-4">
                            <IconShoopingBag/> Pedidos
                        </button>
                    </nuxt-link>
                </li>
                <li class="py-3 px-6">
                    <nuxt-link to="/account/address">
                        <button :class="path === 'address' ? 'text-primary-600':'text-black'" class="hover:text-primary-600 flex gap-4">
                            <IconMapPin/> Direcciones
                        </button>
                    </nuxt-link>
                </li>
                <li class="py-3 px-6">
                    <nuxt-link to="/account/profile">
                        <button :class="path === 'profile' ? 'text-primary-600':'text-black'" class="hover:text-primary-600 flex gap-4">
                            <IconUser/> Detalles de la cuenta
                        </button>
                    </nuxt-link>
                </li>
                <li class="py-3 px-6">
                    <button class="text-black hover:text-primary-600 flex gap-4">
                        <IconLogOut/> Salir
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>

<script setup lang="ts">

const route = useRoute()

const path = route.fullPath.split('/').find((p) => p === 'orders' || p === 'address' || p === 'profile')

</script>