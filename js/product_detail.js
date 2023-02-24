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
    if(isNaN(newValue)){
        newValue=1;
    }
    render(newValue);
}

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
    },
    {
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
    // {
    //     name: 'UA Project Rock',
    //     image1: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
    //     image2: './images/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
    //     old_price: '400',
    //     curr_price: '300'
    // },
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
    related_list.insertAdjacentHTML('beforeend',product);
})

// console.log('Hello')