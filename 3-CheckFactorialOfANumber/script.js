
document.getElementById("factorial").addEventListener("click", () => {
    let inp1 = document.getElementById("inp1").value;
    // console.log("hiiii");
    function fact(inp1){
        let res = 1;
        for( let n = 1; n<=inp1; n++){
             res *= n
        }
        return res; 
    }

    document.getElementById("ans").innerHTML = `The factorial of ${inp1} is : ${fact(inp1)}`
})