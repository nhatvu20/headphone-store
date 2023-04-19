console.log(data_products);
const allProduct=document.querySelector('#allProducts-container');
// console.log(allProduct);
data_products.map((item)=>{
    const product=
    `
    <div class="box">
        <div class="box-img">
            <img src="${item.image1}" alt="" class="img-font">
            <img src="${item.image2}" alt="" class="img-back">
        </div>
        <div class="box-content">
            <div class="box-btn">
                <button><a href="./product_detail.html?${item.id}">shop now</a></button>
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
            </div>
            <div class="box-text">
                <h3>${item.name}</h3>
                <div class="price">
                    <span class="old-price">$${item.old_price}</span>
                    <span class="curr-price">$${item.curr_price}</span>
                </div>
            </div>
        </div>
    </div>
    `
    allProduct.insertAdjacentHTML('afterbegin',product)
})


// header-mobile
let menu_toggle = document.querySelector('.menu-toggle');
// console.log(menu_toggle);
let header_mobile=document.querySelector('.header-mobile');
// console.log(header_mobile);
let navbar = document.querySelector('.header');
// console.log(navbar);

menu_toggle.onclick=()=>{
    navbar.classList.add('header-mobile-active');
    // navbar.style.display='block';
}

function close_menu(){
    navbar.classList.remove('header-mobile-active');
    // navbar.style.display='none';
}

// Filter menu
const filter=document.querySelector(".filter-btn");
const close=document.querySelector(".close-btn");
const filter_menu=document.querySelector(".allProducts .control");
console.log(filter);
console.log(close);
console.log(filter_menu)
filter.onclick=()=>{
    filter_menu.classList.add("active");
}
close.onclick=()=>{
    filter_menu.classList.remove("active");
}


