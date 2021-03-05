


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

var Obj = new Object;
for(var i = 0; i < Array1.length; i++){
    Obj[Array1[i]] = Array2[i];
}

console.log(Obj);

