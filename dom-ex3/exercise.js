var bd = document.getElementsByTagName("body")[0];
var btn = document.getElementsByTagName("button")[0];
var tx = document.getElementsByTagName("p")[0];


function myFunction1(){
    bd.style.backgroundColor = "red";
}

function myFunction2(){
    tx.style.color= "white";
}

function myFunction3(){
    btn.style.backgroundColor = "blue";
}

function myFunction4(){
    btn.style.backgroundColor = "white";
}

btn.addEventListener("click", myFunction1);
btn.addEventListener("click", myFunction2);
btn.addEventListener("mouseout", myFunction4);
btn.addEventListener("mouseover", myFunction3);