let Acount = document.getElementById('useracount');
let signkey = document.getElementById('sinscrire');
let links = document.querySelector('.links');
let loginKey = document.getElementById('sinscrire1');
let storedUsername = localStorage.getItem('username');
let productShopingCardNumber = document.getElementById('shoping-card-n');
let addeditem = localStorage.getItem("product") 

? JSON.parse(localStorage.getItem("product")) 
: [];



if(storedUsername){
    Acount.innerHTML = storedUsername;
    signkey.innerHTML= 'log out';
    links.style.display = 'block';
    loginKey.remove();
    productShopingCardNumber.style.display = 'block';
    productShopingCardNumber.innerHTML = addeditem.length;

}


signkey.addEventListener('click', function(e){
    e.preventDefault();
    if(signkey.innerHTML !== "S'inscrire"){
        setTimeout(() =>{
            window.location = 'index.html';
        },1500);
        alert('you loged out succefully')
        localStorage.clear();
        clearData();

    }
})


