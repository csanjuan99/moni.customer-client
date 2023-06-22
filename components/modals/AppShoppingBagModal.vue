<template>
    <section v-if="isShow" class="bg-white absolute top-28 right-0 w-full md:w-[428px] z-50 rounded-xl py-5 flex flex-col gap-8">
        <header class="flex justify-between items-center border-b border-black-300 pb-3 px-3">
            <span>
                Bolsa de compras
            </span>
            <span>
                <svg fill="none" class="w-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </span>
        </header>
        <main class="px-14 overflow-scroll">
            <section class="flex gap-3" v-for="(element,index) in 10" :key="index">
                <figure>
                    <img class="w-44" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" alt="">
                </figure>
                <aside class="flex flex-col justify-between w-full">
                    <article class="flex flex-col gap-1">
                        <h1 class="font-medium">Blusa de rayas</h1>
                        <span :class="ofert ? 'text-red-600 text-lg flex':'hidden'">
                            150.000 COP
                        </span>
                        <span :class="ofert ? 'text-gray-500 line-through':''">
                            189.000 COP
                        </span>
                    </article>
                    <article class="flex justify-between"> 
                        <div class="flex items-center justify-center p-2 border border-gray-900 gap-4 rounded-lg text-lg">
                            <button @click="decrement">-</button>
                                <span>{{ counter }}</span>
                            <button @click="increment">+</button>
                        </div>
                        <span class="underline">
                            Eliminar
                        </span>
                    </article>
                </aside>                
            </section>
        </main>
    </section>
      <section v-if="isShow" class="w-screen h-full bg-black/50 fixed top-0 left-0" @click="$emit('mutateIsShowshopping')"></section>
</template>

<script>
export default {
    name: "AppFilterModal",
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    data: ()=> ({
        counter: 1,
        ofert: true
    }),
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            if(this.counter > 0) {
                this.counter--
            }
        }
    }
}
</script>