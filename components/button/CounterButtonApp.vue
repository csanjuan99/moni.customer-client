<template>
    <article class="flex items-center justify-center p-2 border border-candles-heavy gap-4 rounded-lg text-lg">
        <button @click="decrement">-</button>
            <span>{{ quantity }}</span>
        <button @click="increment">+</button>
    </article>
</template>
<script setup lang="ts">
// Composables
const cartComposable = useCart()
// Props
const props = defineProps({
    index: {
        type: Number,
        default: 0
    },
    quantity: {
        type: Number,
        default: 1
    }
})
// Data
const quantity = ref(props.quantity)

//Methods
const increment = () => {
    quantity.value++
    onAdd(quantity.value)
}
const decrement = () => {
    if (quantity.value >= 2) {
        quantity.value--
        onAdd(quantity.value)
    }
}

const onAdd = (quanty:any) => {
    cartComposable.mutateQuantity(props?.index,quanty)
}
</script>