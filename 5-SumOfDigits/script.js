// document.getElementById("sum").addEventListener("click",() =>{
//     let inp1 = document.getElementById("inp1").value.trim();
//     console.log(inp1)
//     for(let n = 1; n<=inp1; n++){

//     }
// })

let num = 123456789;
let sum = 0;


while (num > 0) {
     let digit = num % 10;
     sum = sum + digit;
     num = (num - digit) / 10

}
console.log(sum)