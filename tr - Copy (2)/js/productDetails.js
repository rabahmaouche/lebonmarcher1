let productDet = JSON.parse(localStorage.getItem("productdetails"));
let idProduct = localStorage.getItem('productId')
let drawDetail = document.querySelector('.detail')

let productDetail = productDet.find(item => item.id == idProduct);



drawDetail.innerHTML = 
    `
            <div class="images">
            <img src="${productDetail.imageUrl}" alt="">
            </div>
            <div class="product-info">
                <span class="info-2">${productDetail.productName}</span><br>
                <h4 class="info-4">${productDetail.reduction} avec les pieces</h4>
                <a href=""><h6>${productDetail.newProduct}</h6></a>
                <span class="info-1"><i class="fa-solid fa-star fa-2xs"></i>${productDetail.review}</span><br> 
                <hr>
                <div class="price">
                    <h3>${productDetail.CurrentPrice}</h3> 
                <del>${productDetail.oldPrice}</del><br>
                </div>
                <div class="information-mark">
                    <a href="">other information mark color size ....</a>
                </div>
                <a href="">
                    <span class="info-0">${productDetail.productSold} vendus(s)</span>
                    <span class="info-3">${productDetail.freeDelevery}</span>
                </a>
                </div>
            </div>`
