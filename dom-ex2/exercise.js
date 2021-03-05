
function myFunction(){
var y = document.getElementsByTagName("input")[0];
var a = y.value
if(a === "Chris@me1234"){
    y.setAttribute("class", "green")
}
}


document.getElementsByTagName("input")[0].addEventListener("input", myFunction)
