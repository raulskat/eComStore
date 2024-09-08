export const showToast=(operation,id)=>{
    const toast = document.createElement("div");
    toast.classList.add("toast");

    if(operation==="add"){
        toast.innerText = `Added Product with ID:${id} to cart`;
    }
    else{
        toast.innerText = `Removed Product with ID:${id} from cart`;
    }
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2500);
};