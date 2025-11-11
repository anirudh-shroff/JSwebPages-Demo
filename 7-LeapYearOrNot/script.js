a = 2021;

// if (a % 4 == 0) {
//     console.log("leap year")

// } else if ((a % 100 == 0) && (a % 400 == 0)) {
//     console.log("leap year")
// } else {
//     console.log("not leap year")
// } 


if ((a % 4 == 0) && (a % 100 !== 0 || a % 400 ==0)){
    console.log("Leap Year")
}   else{
    console.log("Not leap")
}