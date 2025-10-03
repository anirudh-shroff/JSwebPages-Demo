const numInput = document.getElementById("num1");
const ansInput = document.getElementById("ans");
const ansBtn = document.getElementById("ansBtn");
const resetBtn = document.getElementById("resetBtn");

function oddEven() {

    let value = parseInt(numInput.value);

    if (isNaN(value)) {
        ansInput.value = "Please Enter a Valid Number";
        console.log = "invalid input";
    } else if (value % 2 === 0) {
        ansInput.value = `${value} is even number`
        console.log("Number value is even");
    } else {
        ansInput.value = `${value} is odd number`
        console.log("Number value is even");
    }
}

function resetFields() {
    numInput.value = "";
    ansInput.value = "";
    // console.log("Fields Reset");
}

ansBtn.addEventListener("click", oddEven);
resetBtn.addEventListener("click", resetFields);