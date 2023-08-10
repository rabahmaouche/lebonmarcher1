let checkstorage = localStorage.getItem('product');
let noProduct = document.querySelector('.no-product');
let productDom = document.querySelector('.mainproduct');
let ShopingCardNumber = document.getElementById('shoping-card-n');




if(checkstorage){
    let item = JSON.parse(checkstorage); 
    drawCardProductUi(item);
    noProduct.style.display = item.length === 0 ? 'block' : 'none';
    
}


function drawCardProductUi(product) {
    let ProductUi = product.map((item) =>{
        return`
        <div class="mainproduct1">
        <a href=""><img src="${item.imageUrl}" alt=""></a><br>
        <div>
        <a href="">
            <strong>${item.CurrentPrice}</strong> 
            <del>${item.oldPrice}</del><br>
            <span>${item.reduction} avec les pieces</span><br>
        </a>
        <a href=""><h6>${item.newProduct}</h6></a>
        <a href="">
            <span class="sp-0">${item.productSold} vendus(s)</span>
            <span class="sp-1"><i class="fa-solid fa-star fa-2xs"></i>${item.review}</span><br> 
            <span class="sp-2">${item.productName}</span><br>
            <span class="sp-3">${item.freeDelevery}</span>
        </a>
        </div>
        <button onclick = "removeFromCard(${item.id})"> remove </button>

    </div>
    
    
        `
    })

    productDom.innerHTML = ProductUi.join('');
};


function removeFromCard(id){ 
    if(checkstorage){
        let items= JSON.parse(checkstorage);
        let Data =  items.filter(( item )=> item.id != id);
        drawCardProductUi(Data);
        localStorage.setItem("product", JSON.stringify( Data));
        checkstorage = localStorage.getItem('product');
        ShopingCardNumber.style.display = 'block';
        ShopingCardNumber.innerHTML = Data.length;
        if(Data.length === 0){
            noProduct.style.display = 'block';
        }else{
            noProduct.style.display = 'none';
        }
    }
    
};

        noProduct.addEventListener('click', function(){
        window.location = 'index.html#mainproduct';
});


