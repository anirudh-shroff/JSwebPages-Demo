let a = 8;
let b = 2
for (let n = 2; n < a; n++) {
    if(a % n === 0){
        b = 0;
        break;
    }
}

if (b === 0) {
    console.log(`not a prime no`)
} else {
    console.log(`it's a prime no`)
}