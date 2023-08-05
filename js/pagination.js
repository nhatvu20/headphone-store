const pageButtons = document.querySelectorAll('.pagination-content li a.page');
console.log(pageButtons)

pageButtons.forEach((item)=>{
    item.addEventListener('click',()=>{
        pageButtons.forEach(item1=>item1.classList?.remove('active'))
        item.classList?.add('active')
        console.log(1)
    })
})