import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCartLS=(id,price)=>{
    let cartProducts=getCartProductFromLS();
    let existingproduct=cartProducts.find((curProd)=> curProd.id===id);
    let quantity=1;
    if(existingproduct){
        quantity=existingproduct.quantity;
        price=existingproduct.price;
    }
    return {quantity,price};
};