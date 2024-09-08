import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement=(event,id,stock,price)=>{
 const currCardElement=document.querySelector(`#card${id}`);
 const productQuantity=currCardElement.querySelector(".productQuantity");
 const productPrice= currCardElement.querySelector('.productPrice');
 let quantity=1;
 let localStoragePrice=0;

 let LocalCartProducts=getCartProductFromLS();
 let existingproduct=LocalCartProducts.find((curProd)=>curProd.id===id);

 if(existingproduct){
    quantity=existingproduct.quantity;
    localStoragePrice=existingproduct.price;
 }
 else{
    localStoragePrice=price;
    price=price;
 }

 if(event.target.className==="cartIncrement"){
    if(quantity < stock){
        quantity++;
    }
    else if (quantity===stock){
        quantity=stock;
        localStoragePrice=price*stock;
    }
}
if(event.target.className==="cartDecrement"){
    if(quantity > 1){
        quantity--;
    }
}
localStoragePrice=price*quantity;
localStoragePrice=Number(localStoragePrice.toFixed(2));

let updatedCart={id,quantity,price:localStoragePrice};
        updatedCart = LocalCartProducts.map((curProd)=>{
            return (curProd.id===id)?updatedCart:curProd;
        });
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));

        productQuantity.innerText=quantity;
        productPrice.innerText=localStoragePrice;
        updateCartProductTotal();

};