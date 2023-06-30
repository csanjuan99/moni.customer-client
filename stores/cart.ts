import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
        subtotal: 0,
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
        addSubtotal(subtotal: number) {
            this.subtotal = subtotal
        },

    }
})
