import {useCartStore} from "~/stores/cart";

export const useCart = () => {
    const cart = useCartStore();
    const add = (item: any) => {
        const products = cart.items;
        let exisInCart = false;
        products.map((product: any) => {
            if (product.id === item.id) {
                exisInCart = true;
            }
        });
        if (exisInCart) {
            return;
        }
        item.quantity = 1;
        cart.add(item);
        localStorage.setItem('cart', JSON.stringify(products));
    }

    const sync = () => {
        const products = localStorage.getItem('cart');
        if (!products) {
            return;
        }
        cart.sync(JSON.parse(products));
    };

    return {
        add,
        sync,
    };
}
