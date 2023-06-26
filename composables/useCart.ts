import {useCartStore} from "~/stores/cart";
import { useToast } from "vue-toastification";

const toast = useToast();

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
            toast.info("Product already in the cart");
            return;
        }
        item.quantity = 1;
        cart.add(item);
        localStorage.setItem('cart', JSON.stringify(products));
        toast.success("Product safe in the cart");
    };

    const sync = () => {
        const products = localStorage.getItem('cart');
        if (!products) {
            return;
        }
        cart.sync(JSON.parse(products));
    };
    const remove = (item: any) => {
        const products = cart.items;
        const newProducts = products.filter((product: any) => product.id !== item);
        cart.remove(newProducts);
        if (newProducts.length === 0) {
            localStorage.removeItem('cart');
            toast.success("Carrito vaciado correctamente");
            return;
        }
        localStorage.setItem('cart', JSON.stringify(newProducts));
        toast.success("Producto eliminado del carrito");
    };

    return {
        add,
        sync,
        remove,
    };
}
