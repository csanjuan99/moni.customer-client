import {useCartStore} from "~/stores/cart";

export const useCart = () => {
    const cart = useCartStore();
    const add = (item: any) => {
        const products = cart.items;
        const index = products.find((product: any) => product.id === item.id);
        if (index) {
            return;
        }
        cart.add(item);
        localStorage.setItem('cart', JSON.stringify(products));
    };

    const sync = () => {
        const products = localStorage.getItem('cart');
        if (!products) {
            return;
        }
        cart.sync(products);
    };

    return {
        add,
        sync,
    };
}
