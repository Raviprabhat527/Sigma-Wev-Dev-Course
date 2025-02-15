 //*** map():-
 let arr = [1, 16, 20, 7, 11]
 //1st method:-----
//let newArr = []
//for (let index = 0; index < arr.length; index++) {
 //   const element = arr[index];
 //   newArr.push(element**2)
    
// } 
//console.log(newArr)  

//2nd method:----

//let newArr = arr.map((e)=>{
let newArr = arr.map((e, index, array)=>{
    return e**2
})
console.log(newArr)  


//**filter():
let val =[3, 6, 8, 11, 24, 15]
const greaterThanEight = (e)=>{
    if(e>8){
        return true
    }
    return false
}
console.log(val.filter(greaterThanEight)) 

//**reduce method
let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b)=>{
    return a*b //return a+b, a-b,........
}
console.log(arr2.reduce(red))