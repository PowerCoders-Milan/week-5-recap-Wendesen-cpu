formula(1, 3, 5) //=> 8
formula(3, 4, 6) //=> 18
formula(2, 4) //=> 9
formula(5, 6) //=> 31
formula(3) //=> 4
formula(5) //=> 6
formula() //=> 2

// review all the possible parameters
function formula(a,b,c){

    if(a === undefined && b === undefined && c === undefined)
        return 2;
    else if(c === undefined && b === undefined)
        return a+1;
    else if(c === undefined)
        return (a*b) + 1;
    else 
        return (a*b)+c;

}

console.log(formula());
