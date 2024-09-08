(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const n=`
  <header class="section-navbar">
    <section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30-day return or refund guarantee</p>
        </div>
        <div class="sign_in_up">
          <a href="#">SIGN IN</a>
          <a href="#">|</a>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img 
            src="./images/log.png"
            alt="ecom logo" 
            class="logo"
            width="80%"
            height="auto">
        </a>
      </div>
    <nav class="navbar">
      <ul>
        <li class="nav-item">
          <a href="/" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item">
          <a href="products.html" class="nav-link">Products</a>
        </li>
        <li class="nav-item">
          <a href="contact.html" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
          <a href="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
            <i class="fa-solid fa-cart-shopping"> 0</i>
          </a>
        </li>
      </ul>
    </nav>
    </div>
  </header>`,c=document.querySelector(".section-navbar");c.insertAdjacentHTML("afterbegin",n);const d=`
  <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="./images/log.png" alt="logo" />
        <p>
          Welcome to Thapa EcomStore, <br />
          your ultimate destination for
          <br />
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank"> Payment Method </a>
        <a href="" target="_blank"> Delivery </a>
        <a href="" target="_blank"> Return and Exchange </a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
          Be the first to know about new
          <br />
          arrivals, sales & promos!
        </p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    
  </footer>`,l=document.querySelector(".section-footer");l.insertAdjacentHTML("afterbegin",d);const p=[{id:1,name:"Laptop",category:"Computers",brand:"ExampleBrand",price:999.99,stock:50,description:"Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",image:"../images/lapi.png"},{id:2,name:"Smartphone",category:"Mobiles",brand:"TechGadget",price:499.99,stock:100,image:"../images/iphone.png",description:"Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."},{id:3,name:"Wireless Headphones",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/headphone.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:4,name:"Watches",category:"Wearables",brand:"FitTech",price:199.99,stock:20,image:"../images/watch.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:5,name:"Speakers",category:"Audio",brand:"SoundBeats",price:149.99,stock:30,image:"../images/speakers.png",description:"High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."},{id:6,name:"Television",category:"Video",brand:"Samsung",price:199.99,stock:20,image:"../images/tv.png",description:"Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."},{id:7,name:"Tablet",category:"Computers",brand:"TechGadget",price:299.99,stock:60,image:"../images/tablet.png",description:"Lightweight tablet with a 10.1-inch HD display, 64GB storage, and 10 hours of battery life."},{id:8,name:"Bluetooth Speaker",category:"Audio",brand:"SoundWave",price:79.99,stock:45,image:"../images/bluetooth_speaker.png",description:"Portable Bluetooth speaker with powerful bass, 12-hour battery life, and water-resistant design."},{id:9,name:"Gaming Mouse",category:"Accessories",brand:"ProGamer",price:59.99,stock:150,image:"../images/gaming_mouse.png",description:"Ergonomic gaming mouse with customizable RGB lighting, 16000 DPI sensor, and 7 programmable buttons."},{id:10,name:"4K Monitor",category:"Computers",brand:"UltraView",price:349.99,stock:25,image:"../images/4k_monitor.png",description:"27-inch 4K UHD monitor with HDR10 support, 1ms response time, and a 144Hz refresh rate."},{id:11,name:"Fitness Tracker",category:"Wearables",brand:"HealthPlus",price:99.99,stock:75,image:"../images/fitness_tracker.png",description:"Advanced fitness tracker with heart rate monitoring, sleep tracking, and 7-day battery life."},{id:12,name:"VR Headset",category:"Gadgets",brand:"VirtualWorld",price:299.99,stock:40,image:"../images/vr_headset.png",description:"Immersive VR headset with 360-degree tracking, 3D audio, and a lightweight, comfortable design."}],g=document.querySelector("#cartValue"),m=t=>g.innerHTML=`<i class="fa-solid fa-cart-shopping"> ${t.length}</i>`,h=()=>{let t=localStorage.getItem("cartProductLS");return t?(t=JSON.parse(t),m(t),t):[]},u=(t,i)=>{const r=document.createElement("div");r.classList.add("toast"),t==="add"?r.innerText=`Added Product with ID:${i} to cart`:r.innerText=`Removed Product with ID:${i} from cart`,document.body.appendChild(r),setTimeout(()=>{r.remove()},2500)};export{h as g,p,u as s,m as u};
