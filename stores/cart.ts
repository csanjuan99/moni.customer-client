import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        add(item: any) {
            this.items.push(item)
        },
        sync(products: any) {
            this.items = products
        },
        remove(item: any) {
            this.items = item
        },
    }
})
