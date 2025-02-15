console.log("I am a tutorial on loops");

let a = 1;

for(let i = 0; i < 100; i++){
    console.log(a+i)
}

let obj = {
    name: "Ravi",
    role: "programmer",
    company: "codewithPrabbhat AI"
}

for (const key in obj) {
    
        const element = obj[key];
        console.log(key, element)
        
    }

    for (const c of "Ravi") {
        console.log(c)
        
    }