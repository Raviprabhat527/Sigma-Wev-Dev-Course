 //for loop:-
 let a = [1, 34, 50, 100, 45]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)         
} 


 // for each loop:-
    let p =[90, 50, 30, 25]
    p.forEach((value, index, arr)=>{
        console.log(value, index,arr)
    }) 
 
//for in loop:-
let obj = {
    a: 10,
    b: 25,
    c: 160
}  
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        
    }
}

 //for of loop:-  
 let a1 = [1, 34, 50, 100, 45]
 for (const element of a1) {
    console.log(element)
 }