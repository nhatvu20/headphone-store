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

// slides
let slides=document.querySelectorAll('.slide-box');
let index=0;

function next(){
    slides[index].classList.remove('active');
    index=(index+1)%slides.length;
    slides[index].classList.add('active');
}
function prev(){
    slides[index].classList.remove('active');
    index=(index-1+slides.length)%slides.length;
    slides[index].classList.add('active');
}

// auto show slide
// setInterval(next, 7000);

// Render lastest product (data)
let data_products=[
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    }, {
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]


let products_list=document.querySelector('#product-container');
// console.log(products_list);
let best_selling_product=document.querySelector('#best-selling-container');
// console.log(best_selling_product);

data_products.forEach(e => {
    let product= `
        <div class="box">
            <div class="box-img">
                <img src="${e.image1}" alt="" class="img-font">
                <img src="${e.image2}" alt="" class="img-back">
            </div>
            <div class="box-content">
                <div class="box-btn">
                    <button>shop now</button>
                    <button><i class="fa-solid fa-cart-shopping"></i></button>
                    <button><i class="fa-solid fa-heart"></i></button>
                </div>
                <div class="box-text">
                    <h3>${e.name}</h3>
                    <div class="price">
                        <span class="old-price">$${e.old_price}</span>
                        <span class="curr-price">$${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    products_list.insertAdjacentHTML('beforeend',product);
    best_selling_product.insertAdjacentHTML('afterbegin',product);
})
