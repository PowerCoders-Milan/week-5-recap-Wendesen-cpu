//var arr = window.prompt("input the array here, Please use comma to differenciate between different elements");

var array1 = ["car",3,"students",4,"books","Family",2,-4];
var array2 = ["nice",2,"best","Awesome","Proficient","Good","oustanding"]
var countS = 0;
var countN = 0;

function myCounter(a){
var lengthOfArray = a.length;
for(var i=0; i<= lengthOfArray; i++){
   if(typeof(a[i]) == "number"){
       countN = countN + 1;
   }

   else if(typeof(a[i]) == "string"){
    countS = countS + 1;
}

}

console.log(`There are ${lengthOfArray} elements in the array, ${countN} of them are numbers and ${countS} of them are strings`);

//window.alert(`There are ${lengthOfArray} elements in the array, ${countN} of them are numbers and ${countS} of them are strings`);
}





myCounter(array2);

