import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS=()=>{
    let cartItems=localStorage.getItem('cartProductLS');
    if(!cartItems){
        return[];
    }
    cartItems=JSON.parse(cartItems);
    updateCartValue(cartItems);
    return cartItems;
}; 