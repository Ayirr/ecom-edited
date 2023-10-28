function shop(){
    console.log("clicked")
    window.open("shop.html","_self")
}

function fresh(){
    window.open("fresh.html","_self")
}

function live(){
    window.open("live.html","_self");
}

function freshners(){
    window.open("freshner.html","_self");
}

function dry(){
    window.open("dried.html","_self");
}

function aroma(){
    window.open("aroma.html","_self");
}

function about(){
    window.open("landing-page.html","_self");
}

var contactEle = document.getElementById("ip");
var contactP = document.getElementById("num");
function call(){
    contactP.textContent="we will call you back on " +contactEle.value;
    
}

var emailEle = document.getElementById("mail");
var remindEle = document.getElementById("remind-para");
function remind(){
    remindEle.textContent="emails will be sent to" + emailEle.value;
}