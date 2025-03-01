let a = prompt("Enter first number")

let b = prompt("Enter Second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b);

function main(){
let x = 1;
try {
    console.log("The sum is", sum*x)
} catch (error) {
    console.log("Error aa gaya bhai")
    
}
finally {
    console.log("files are being closed and do connection is being closed")
}

}
let c = main()