for(let i=0;i<100;i++){
    let star = document.createElement("div");
    star.className = "star";

    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "white";
    star.style.position = "absolute";

    star.style.top = Math.random()*2000 + "px";
    star.style.left = Math.random()*100 + "%";

    document.body.appendChild(star);
}