Movies = [
    { title: "movie1", duration: 120, actor: "Meryl Streep"},
    { title: "movie2", duration: 150, actor: "Robert De Niro"},
    { title: "movie3", duration: 160, actor: "Jack Nicholson"},
    { title: "movie4", duration: 100, actor: "Denzel Washington"},
   ]

   var counter = 0;
   var a = document.createElement("ul");
 function myFunction(){
   
    var one = document.createElement("p")
    var two = document.createElement("p")
    var three = document.createElement("p")
    one.innerHTML = `Movie title: ${Movies[counter].title}`
    two.innerHTML = `Duration: ${Movies[counter].duration}`
    three.innerHTML = `Actor: ${Movies[counter].actor}`
    a.appendChild(document.createElement("li").appendChild(one));
    a.appendChild(document.createElement("li").appendChild(two));
    a.appendChild(document.createElement("li").appendChild(three));
    document.getElementsByTagName("body")[0].appendChild(a);
    if(counter == 0){
        a.style.backgroundColor= "blue";
    }
    if(counter == 1){
        a.style.backgroundColor= "green";
    }
    if(counter == 2){
        a.style.backgroundColor= "yellow";
    }
    if(counter == 3){
        a.style.backgroundColor= "gray";
    }
    counter = counter + 1;
    if(counter == 4) {
        a.removeEventListener("click", myFunction);
    }
 }

 
 function myFunction1(){
     a.style.backgroundColor = "black";
     a.style.color = "white";
    
 }

 
 function myFunction2(){
    a.style.backgroundColor = "white";
    a.style.color = "black";
   
}




document.getElementsByTagName("button")[0].addEventListener("click", myFunction);
a.addEventListener("mouseover", myFunction1);
a.addEventListener("mouseout", myFunction2);