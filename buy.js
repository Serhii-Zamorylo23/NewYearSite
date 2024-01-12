const BuyContainer=document.querySelector('.buyProduct')
const BasketContainer=document.querySelector('.Basket')
const BasketProduct=[]
const ProductsArr=[
    {
        name:'Гірлянда новорічна',
        price:450,
        img: '/img/гірлянда 1.png',
        id: 'Cristmas' 
    },
    {
        name:'Ігрушка на ялинку',
        price:450,
        img: '/img/images 1.png',
        id: 'tree'
    },
    {
        name:'Ігрушка на ялинку дракон',
        price:250,
        img:'/img/4468412280_w200_h200_steklyannaya-elochnaya-igrushka 1.png',
        id:'Dragon'
    },
    {
        name:'Верхівка на ялинку тризуб',
        price:270, 
        img:'/img/gerb 1.png',
        id:'Gerb'
    },
    {
        name:'Новорічна мішура',
        price:68,
        img:'/img//tinsel 1.png',
        id:'rain'
    },
    {
        name:'Ігрушка на ялинку Ангел',
        price:125,
        img:"/img/Ангел1.png",
        id:'Angel'
    },
]
const renderBasket=()=>{
    BasketContainer.innerHTML+=''
    ProductsArr.forEach((ItemProducts)=>{
        if(BasketProduct.includes(ItemProducts.id)){
            BasketContainer.innerHTML+=`
            <div class="main_card">
                <div class="main_card_img">
                    <img src="${ItemProducts.img}" alt="">
                </div>
                <P class="main_card_name">${ItemProducts.name}</P>
                <p class="main_card_price">${ItemProducts.price} грн</p>
                <button idProducts="${ItemProducts.id}" class="main_card_button">Купити</button>
            </div>
            `
        }
    })
}
const renderProducts =()=>{
    BuyContainer.innerHTML=''
    ProductsArr.forEach(item =>{
        BuyContainer.innerHTML+=
        `<div class="main_card">
            <div class="main_card_img">
                <img src="${item.img}" alt="">
            </div>
            <P class="main_card_name">${item.name}</P>
            <p class="main_card_price">${item.price} грн</p>
            <button idProducts="${item.id}" class="main_card_button">Купити</button>
        </div>`
    })
    const BuyButtons=document.querySelectorAll('.main_card_button')
    BuyButtons.forEach(item =>{
        item.addEventListener('click', () => { 
            const BuyId = item.getAttribute("idProducts")
            BasketProduct.push(BuyId)
            renderBasket()
        })
    })

}
renderProducts() 