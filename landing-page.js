function shop(){
    window.open("shop.html","_self")
}

let menuEl = document.querySelector('#navbar');
let displayEl = document.querySelector('#menu');

menuEl.addEventListener('click',function(){
    displayEl.classList.toggle('active');
})