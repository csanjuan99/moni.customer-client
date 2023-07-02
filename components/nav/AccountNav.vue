<template>
    <section class="w-full h-auto">
        <nav class="flex flex-col">
            <ul class="fonts-poppins lg:text-lg text-sm font-bold">
                <li class="py-3 px-6 border-b border-gray-300">
                    <button class="text-black focus:text-primary-600 flex gap-4">
                        <IconShoopingBag/> Pedidos
                    </button>
                </li>
                <li class="py-3 px-6 border-b border-gray-300">
                    <button class="text-black focus:text-primary-600 flex gap-4">
                        <IconMapPin/> Direcciones
                    </button>
                </li>
                <li class="py-3 px-6 border-b border-gray-300">
                    <button class="text-black focus:text-primary-600 flex gap-4">
                        <IconUser/> Detalles de la cuenta
                    </button>
                </li>
                <li class="py-3 px-6 border-b border-gray-300">
                    <button class="text-black focus:text-primary-600 flex gap-4">
                        <IconLogOut/> Salir
                    </button>
                </li>
            </ul>
        </nav>
    </section>
</template>