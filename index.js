const {addToCart, changeQty} = require("./cartModule")

console.log("Welcom to ws")

console.log(40+50)
let l=[10,20,30,40,50]
l.forEach((value,index)=>{
    console.log(value,index)
})
console.log(addToCart());
console.log(changeQty());