import products from "./api/products.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductCart } from "./removeProductCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts=getCartProductFromLS();

let filterProducts=products.filter((curProd)=>{
    // console.log(curProd.id);
    return cartProducts.some((curElem)=>curElem.id===curProd.id);
    
});
// console.log(filterProducts);
const cartElement=document.querySelector("#productCartContainer");
const templateContainer=document.querySelector("#productCartTemplate");
const showCartProducts=()=>{
    filterProducts.forEach((curProd)=>{
        const {id,name,image,price,stock,brand,category,description}=curProd;

        let productClone=document.importNode(templateContainer.content,true);

        const isActualData=fetchQuantityFromCartLS(id,price);

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector('.productImage').src=image;
        productClone.querySelector('.productImage').alt=name;
        productClone.querySelector('.productDescription').textContent=description;
        productClone.querySelector('.productPrice').textContent=isActualData.price;
        productClone.querySelector(".productQuantity").textContent =isActualData.quantity;
        
        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            incrementDecrement(event,id,stock,price);
        });
        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeProductCart(id));
        
        cartElement.appendChild(productClone);


    });
}
showCartProducts();

updateCartProductTotal();