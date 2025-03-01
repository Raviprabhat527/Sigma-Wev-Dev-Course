console.log("Ram I am a Hacker")
console.log("Ramu I am a Hecker")

setTimeout(() => {
    console.log("I am inside settimeout")
}, 200);

setTimeout(() =>{
    console.log("I am inside settimeout")
}, 200);

console.log("The End")


const fn = () =>{
   console.log("Nothing")
}
const callback = (arg, fn) => {
    console.log(arg)
    fn()
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)