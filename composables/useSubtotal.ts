import {useCartStore} from "~/stores/cart";

const cart = useCartStore();

export const useSubtotal = ( price:any ) => {
    localStorage.setItem('price', JSON.stringify(price));
    cart.addSubtotal(price)
    return;
}

export const getSubtotal = () => {
    const price = localStorage.getItem('price');
    if (!price) {
        return;
    }
    return JSON.parse(price);
}