function hamburgerMenu() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("myText");

    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "flex";
      y.style.display = "none";
    }
}
  
let x = 16;
function resizeText(){ 
    x++;
    const pTags = document.getElementsByTagName("p");

    for (let i = 0; i <= pTags.length; i++) {

    pTags[i].style.fontSize = x + "px";

    }

}