/* let obj = {
    a: 1,
    b: "Ram"
}
console.log(obj)

let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit._proto_ = animal; // sets rabbit.[[prototype]] = animal */

class Animal{
    constructor(name){
        this.name = name
        console.log("object is Created.........")
    }

    eats(){
        super.eats()
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}

class Lion extends Animal {
    constructor(name){
        super(name)
        console.log("objects is created and he is a lion........")
    }

}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("shera")
console.log(l)