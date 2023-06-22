<template>
    <section v-if="isShow" class="bg-white absolute top-16 left-0 w-full z-10 py-10 px-28 flex flex-col gap-8">
        <main class="flex gap-3">
            <div class="flex gap-3">
                <aside class="flex flex-col w-48">
                    <span v-for="(element,index) in categorys" :key="index" class="px-5 py-2 hover:bg-gray-300 rounded-lg" @mouseenter="elementHover(element)"> {{ element.name }} </span>
                </aside>
                <aside class="flex flex-col gap-y-5 w-48">
                    <span class="text-gray-500 uppercase px-5 py-2"> Categorias </span>
                    <span class="px-5 py-2 hover:bg-gray-300 rounded-lg"> Ver todo </span>
                    <span v-for="(element,index) in SubCategorysData()" :key="index" class="px-5 py-2 hover:bg-gray-300 rounded-lg"> {{ element.name }} </span>
                </aside>
                <aside class="flex flex-col gap-y-5 w-48">
                    <span v-for="(element,index) in SubCategorysData2()" :key="index" class="px-5 py-2 hover:bg-gray-300 rounded-lg"> {{ element.name }} </span>
                </aside>
            </div>
            <div>
                <!-- <CardProductCard :product="product?.data[0]?.attributes"/> -->
                {{ product }}
            </div>
        </main>
    </section>
    <section v-if="isShow" class="w-screen h-full bg-transparent fixed top-0 left-0 -z-10" @mouseenter="$emit('mutateIsShowSale')"></section>
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
        }
    },
    async mounted() {

      },
    data: ()=> ({
        categorys: [
            {
                name: "Ropa",
                SubCategorys:[{name: "Camisetas1"}, {name: "Medias1"},{name: "Camisetas2"}, {name: "Medias2"},{name: "Camisetas3"}, {name: "Medias3"}]
            }, 
            {
                name: "Zapatos",
                SubCategorys:[{name: "adidas air"}, {name: "Nike Deluxe Edition"},{name: "Jordan"}]
            }, {
                name: "Accesorios",
                SubCategorys:[{name: "Pulseras"}, {name: "Relojes"},{name: "Collares"}]
            }
        ],
        actualElement: [{name: "Camisetas1"}, {name: "Medias1"},{name: "Camisetas2"}, {name: "Medias2"},{name: "Camisetas3"}, {name: "Medias3"},{name: "adidas air"}, {name: "Nike Deluxe Edition"},{name: "Jordan"},{name: "Pulseras"}, {name: "Relojes"},{name: "Collares"}],
        product: {}
    }),
    methods: {
        async getData() {
            const product = await useFetch(`${this.config.public.baseURL}/api/products?filters[discount][$null]&populate[0]=media`);
            this.product = product; 
        },
        SubCategorysData() {
            return this.actualElement.slice(0, 9)
        },
        SubCategorysData2() {
            return this.actualElement.slice(9)
        },
        elementHover(element) {
            this.actualElement = element.SubCategorys
        }
    }
}
</script>