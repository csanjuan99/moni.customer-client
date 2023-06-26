const subtotal = [0];

let total = 0;

export const useSubtotal = (price:any ,quantity:any ,index:any ) => {
    subtotal[index] = price * quantity;
    total = subtotal.reduce((a:number ,b:number )=> a + b)
    return;
}
export const GetSubtotal = () => {
    return total;
}