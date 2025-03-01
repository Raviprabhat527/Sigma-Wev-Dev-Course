function createCard(title, cName, views, monthsOld, duration, thumbnail){
    // Finish this function
    if(views<1000000){
        let viewsStr = views/1000 + "K";
    }
    else if(views>1000000){
        let viewsStr = views/1000000 + "M";
    }
    let html = `<div class="card">
    <div class="image">
        <img src="https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
        alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewsStr} views . 5 months ago</p>
    </div>
 </div>`

 /* document.querySelector(".container").innerHTML = document.querySelector("container").innerHTML + html */
}
 createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw") 
