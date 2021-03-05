var array1 = [4, 7, 2, 9, 12, 22, 66, 234, 1, 23];
var array2 = ['marco', 'antonio', 'luca', 'leo', 'mary', 'sebastian', 'will'];

//function creatObject(){
    var b = array2.length;
    array2.sort();
    var x = new Object;
     do{
        var a = Math.floor(Math.random()*array1.length);
        var j = Math.floor(Math.random()*array2.length);
         x[array2[j]] = array1[a];    
    } while(Object.keys(x).length < b)

    console.log(b);
    console.log(Object.keys(x).length);
    console.log(x);
//}




//function listSorter(){
    // array2.sort();
    // for(var i=0; i <= array2.length; i++){
    //     console.log(`${array2[i]} = ${x.array2[i]}`);
    // }
//}





