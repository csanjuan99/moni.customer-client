<template>
    <section v-if="isShow" class="bg-white absolute top-28 left-0 w-full z-50 rounded-xl py-10 px-28 flex flex-col gap-8">
        <main class="flex gap-3">
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
        </main>
    </section>
    <section v-if="isShow" class="w-screen h-full bg-black/50 fixed top-0 left-0" @click="$emit('mutateIsShowFilter')"></section>
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
        categorys: [
            {
                name: "Nuevo", 
                SubCategorys:[{name: "Camisetas1"}, {name: "Medias1"},{name: "Camisetas2"}, {name: "Medias2"},{name: "Camisetas3"}, {name: "Medias3"},{name: "adidas air"}, {name: "Nike Deluxe Edition"},{name: "Jordan"},{name: "Pulseras"}, {name: "Relojes"},{name: "Collares"}]
            },
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
    }),
    methods: {
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