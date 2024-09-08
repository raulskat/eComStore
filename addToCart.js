import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLS();


export const addToCart =(event,id,stock)=>{
    
    let arrLocalStorageProduct=getCartProductFromLS();
    
    const currProductElement=document.querySelector(`#card${id}`);
    // console.log(currProductElement);
    let quantity=currProductElement.querySelector(".productQuantity").innerText;
    let price=currProductElement.querySelector(".productPrice").innerText;
    // console.log(quantity,price);
    price=price.replace("$","");
    let existingproduct=arrLocalStorageProduct.find((curProd)=> curProd.id===id);
    if(existingproduct && quantity>1){
        quantity=Number(existingproduct.quantity)+Number(quantity);
        price=Number(price*quantity);
        let updatedCart={id,quantity,price};
        updatedCart = arrLocalStorageProduct.map((curProd)=>{
            return (curProd.id===id)?updatedCart:curProd;
        });
        localStorage.setItem('cartProductLS',JSON.stringify(updatedCart));

    }
    if(existingproduct){
        // alert("already added");
        return false;
    }
    price=Number(price*quantity);
    quantity=Number(quantity);

    let updateCart={id,quantity,price};
    arrLocalStorageProduct.push(updateCart);
    localStorage.setItem('cartProductLS',JSON.stringify(arrLocalStorageProduct));

    // update the cart button value
    updateCartValue(arrLocalStorageProduct);

};