


var Array1 = ['marco', 'antonio', 'luca', 13, 18, 'leo', 'mary'];

var Array2 = [21, 19, 12, 'sebastian', 'will', 23, 20];


Array1.forEach(item =>{
    if(typeof(item) == "number"){
        var i = Array1.indexOf(item)
        var tempo = Array2[i];
        Array2[i] = item;
        Array1[i]= tempo;
    }
})

//     Array1.forEach(item => {
//     var i = Array1.indexOf(item);
//     var a = new Map([[item,Array2[i]]]);
// })
//  for(var i =0; i <= Array1.length; i++){
//     var entries = new Map([Array1[i],Array2[i]]);
//  }
//const obj = Object.fromEntries(Array1);
console.log(Array1);


  
 // const obj = Object.fromEntries(entries);
  
  //console.log(entries);

   


        


// var Score = {name: Array1, Score: Array2};






//   var len = a.length;
//   for(var i=0; i<=len-1; i= i+2)
//   {
//       var Ob = {name:a[i], score:a[(i/2)+1]}
//   }

//   return Ob;
// }

// console.log(createObject(Array1));