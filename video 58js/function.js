 /* function nice(name){
    console.log("Hey" + name + "You are nice!")
    console.log("Hey" + name + "You are good!")
    console.log("Hey" + name + "Your thirst is nice!")
    console.log("Hey" + name + "Your course is  good too!")

}

nice(" Rohan ")

nice('Ramu') */

/* function sum(a, b) {
  //  console.log(a+b)
     return a + b
}

// sum(3, 5)

results = sum(10, 20)
console.log("The sum of these numbers is: ", result) */


function sum(p, q , r = 5){
    return p + q + r
}
/*function sum(p, q){
    return p + q 
} */

results1 = sum(6, 8)
results2 = sum(6, 15)
results3 = sum(23, 20, 9)

console.log("The sum of these numbers is: ", results1)
console.log("The sum of these numbers is: ", results2)
console.log("The sum of these numbers is: ", results3)


// arrow function
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(35);
func1(39);
func1(50);
func1(350);