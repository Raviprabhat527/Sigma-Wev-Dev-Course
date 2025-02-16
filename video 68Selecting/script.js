console.log("Prabhat")

/* let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "red"
boxes[2].style.color = "green" */

//document.getElementById("boxred").style.backgroundColor = "green"

//document.querySelector(".box").style.backgroundColor = "pink";//one boxe

console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "grey"
})
