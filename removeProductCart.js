import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductCart=(id)=>{
    let cartProducts=getCartProductFromLS();
    cartProducts=cartProducts.filter((curProd)=>curProd.id!==id);

    localStorage.setItem('cartProductLS',JSON.stringify(cartProducts));

    // to remove product on click 
    let removeDiv=document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete",id);
    }
    updateCartValue(cartProducts);
    updateCartProductTotal();
};