// View more or View less
let viewMore=document.querySelector('.view-more');
let viewLess=document.querySelector('.view-less');
let setHeightContent=document.querySelector('.drescription-content');
// console.log(viewMore);
// console.log(viewLess);
// console.log(setHeightContent);
viewMore.addEventListener('click',()=>{
    viewMore.classList.toggle('active');
    viewLess.classList.toggle('active');
    setHeightContent.classList.toggle('active');
})
viewLess.addEventListener('click',()=>{
    viewMore.classList.toggle('active');
    viewLess.classList.toggle('active');
    setHeightContent.classList.toggle('active');
})

let related_products = [
    {
        id:'1',
        name: 'JBL E55BT KEY BLACK',
        image1: './images/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './images/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        id:'2',
        name: 'JBL JR 310BT',
        image1: './images/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './images/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    }, {
        id:'3',
        name: 'JBL TUNE 750BTNC',
        image1: './images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './images/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        id:'4',
        name: 'JBL Horizon',
        image1: './images/JBLHorizon_001_dvHAMaster.png',
        image2: './images/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        id:'5',
        name: 'JBL Tune 220TWS',
        image1: './images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './images/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        id:'6',
        name: 'UA Project Rock',
        image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    // {
    //     id:'7',
    //     name: 'JBL Endurance SPRINT',
    //     image1: './images/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
    //     image2: './images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
    //     old_price: '400',
    //     curr_price: '300'
    // },
    // {
    //     id:'8',
    //     name: 'JBL Quantum 400',
    //     image1: './images/JBL_Quantum_400_Product Image_Hero 02.png',
    //     image2: './images/JBL_Quantum_400_Product Image_Hero Mic Up.webp',
    //     old_price: '300',
    //     curr_price: '200'
    // }
]

let related_list=document.querySelector('#related-container');
// console.log(related_list);

related_products.forEach(e => {
    let product= `
        <div class="box">
            <div class="box-img">
                <img src="${e.image1}" alt="" class="img-font">
                <img src="${e.image2}" alt="" class="img-back">
            </div>
            <div class="box-content">
                <div class="box-btn">
                    <button><a href="./product_detail.html?${e.id}">shop now</a></button>
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
    related_list.insertAdjacentHTML('beforeend',product);
})

// console.log('Hello')

// Lay id cua trang web
const progess=window.location.search;
const id_product=progess.split('?')[1];
const ob_product=data_products.find(element => element.id==id_product);
// console.log(ob_product)


const box_detail_content=document.querySelector('#product-detail-container')
// console.log(box_detail_content);
let box_detail=`        
<div class="box">
    <div class="box-img">
        <div class="big-img">
            <img src="${ob_product.image1}" alt="">
            <div class="small-img">
                <img class="img-featured" src="${ob_product.image1}" alt="">
                <img class="img-featured" src="${ob_product.image2}" alt="">
            </div>
        </div>
    </div>
    <div class="content">
        <h3>${ob_product.name}</h3>
        <p><span>Brand:</span> JBL</p>
        <p><span>Rate:</span>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo libero alias officiis dolore doloremque 
            eveniet culpa dignissimos, itaque, cum animi excepturi sed veritatis asperiores soluta, nisi atque quae illum. Ipsum.
        </p>
        <span class="price">${ob_product.curr_price}$</span>
        <!-- <input type="number" name="" id="" max="10" min="0" value="0"> -->
        <div class="quantity">
            <button class="minus"><i class="fa-solid fa-minus"></i></button>
            <input type="number" value="1" min="0" max="10">
            <button class="plus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="btn">add to cart</button>
    </div>
</div>`

box_detail_content.insertAdjacentHTML('beforeend',box_detail);

// Switch img
document.querySelectorAll('.img-featured').forEach((img1)=>{
    img1.addEventListener('click',()=>{
        var newsrc=img1.getAttribute('src');
        document.querySelector('.big-img img').src=newsrc;
    })
})

// Quantity

var btnplus=document.querySelector('.plus');
// console.log(btnplus);
var btnminus=document.querySelector('.minus');
// console.log(btnminus);
var quantity=document.querySelector('.quantity input');
// console.log(quantity);

function render(newValue){
    quantity.value=newValue;
}

btnplus.addEventListener('click', ()=>{
    let newValue=quantity.value;
    newValue++;
    if (newValue <= 10) {   //Inventory quantity is 10
        render(newValue);
    }
})

btnminus.addEventListener('click', ()=>{
    let newValue=quantity.value;
    newValue--;
    if(newValue>=0){
        render(newValue);
    }
})

quantity.onkeyup = ()=>{
    let newValue=parseInt(quantity.value);
    if(isNaN(newValue)||newValue>10){
        newValue=1;
    }
    render(newValue);
}

const breadcumb=document.querySelector('#name-breadcumb');
breadcumb.innerHTML=`<a href="#" id="name-breadcumb">${ob_product.name}</a>`;

const first_img=document.querySelector('.first-img');
// console.log(first_img);
first_img.src=ob_product.image1;
const second_img=document.querySelector('.second-img');
// console.log(second_img);
second_img.src=ob_product.image2;