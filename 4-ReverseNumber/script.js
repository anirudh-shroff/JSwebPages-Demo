let a = 123;
let rev = 0;
// console.log(a%10);
while (a > 0){
    let digit = a % 10;
    rev = rev*10 + digit;
    a = parseInt(a/10);
}
console.log(rev)