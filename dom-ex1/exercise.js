
function myFunction(){
var x = document.getElementsByTagName("input")[0].value;
document.getElementsByTagName("p")[0].innerHTML= x;
}

document.getElementsByTagName("button")[0].addEventListener("click", myFunction);