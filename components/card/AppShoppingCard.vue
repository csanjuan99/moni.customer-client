<template>
    <div>
        <section class="flex gap-3">
                <figure>
                    <img 
                        class="w-44" 
                        :src="`${config.public.baseURL}${product.attributes.media.data[0].attributes.url}`"
                        alt=""
                    />
                </figure>
                <aside class="flex flex-col justify-between w-full">
                    <article class="flex flex-col gap-1">
                        <h1 class="font-medium"> {{ product.attributes.name }}</h1>
                        <span :class="product.attributes.discount ? 'text-red-600 text-lg flex':'hidden'">
                            {{
                                useDiscount(
                                    product.attributes.price,
                                    product.attributes.discount
                                )
                            }} COP
                        </span>
                        <span :class="product.attributes.discount ? 'text-gray-500 line-through':''">
                            {{ product.attributes.price }} COP
                        </span>
                    </article>
                    <article class="flex justify-between"> 
                        <div class="flex items-center justify-center p-2 border border-gray-900 gap-4 rounded-lg text-lg">
                            <button @click="decrement">-</button>
                                <span>{{ counter }}</span>
                            <button @click="increment">+</button>
                        </div>
                        <span class="underline cursor-pointer" @click="deleteProduct(product.id)">
                            Eliminar
                        </span>
                    </article>
                </aside>                
            </section>
    </div>
</template>

<script setup>

const config = useRuntimeConfig()
const emit = defineEmits(['calculateSubtotal'])
const cart = useCart()



// props

const props = defineProps({
    product: {
        type: Object,
        required: true,
        default: () => ({})
    }
})

onMounted(() => {
    if (props.product.attributes.discount) {
        const newPrice = props.product.attributes.price - (props.product.attributes.price * props.product.attributes.discount / 100);
        emit('calculateSubtotal', newPrice, counter.value, props.product.id)        
        return;
    }
    emit('calculateSubtotal',props.product.attributes.price, counter.value, props.product.id)
})
// data

const counter = ref(1);

// Methods

const deleteProduct = (id) => {
    cart.remove(id)
}

const increment = () => {
    counter.value++
    if (props.product.attributes.discount) {
        const newPrice = props.product.attributes.price - (props.product.attributes.price * props.product.attributes.discount / 100);
        emit('calculateSubtotal', newPrice, counter.value, props.product.id)        
        return;
    }
    emit('calculateSubtotal',props.product.attributes.price, counter.value, props.product.id)
}

const decrement = ()=> {
    if(counter.value > 1) {
        counter.value--
        if (props.product.attributes.discount) {
            const newPrice = props.product.attributes.price - (props.product.attributes.price * props.product.attributes.discount / 100);  
            emit('calculateSubtotal', newPrice, counter.value, props.product.id)
            return;
        }
        emit('calculateSubtotal',props.product.attributes.price, counter.value, props.product.id)    
    }
}


</script>