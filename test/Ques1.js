function power(a, b){
    if(b === 0 && a > 1) return 1;
    return a * power(a,b-1);
}

console.log(power(5,3))