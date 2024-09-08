import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";
import { showToast } from "./showToast";

const productContainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");
export const showProductContainer=(products)=>{
    if(!products){
        return false;
    }
    products.forEach((curProduct) => {
        const{id,name,image,price,stock,brand,category,description }=curProduct;

        const productClone=document.importNode(productTemplate.content,true);

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);
        productClone.querySelector('.category').textContent=category;
        productClone.querySelector('.productName').textContent=name;
        productClone.querySelector('.productImage').src=image;
        productClone.querySelector('.productImage').alt=name;
        productClone.querySelector('.productStock').textContent=stock;
        productClone.querySelector('.productDescription').textContent=description;
        productClone.querySelector('.productPrice').textContent=`$${price}`;
        productClone.querySelector('.productActualPrice').textContent=`$${price*4.5}`;


        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            homeQuantityToggle(event,id,stock);
        });

        productClone.querySelector('.add-to-cart-button').addEventListener("click",(event)=>{
            addToCart(event,id,price);
            showToast("add",id);
        });


        productContainer.append(productClone);
    });
};