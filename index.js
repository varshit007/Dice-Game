var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var img1 = document.getElementsByClassName("img1");
var dice = "dice" + randomNumber1;
img1[0].setAttribute("src", "images/"+dice+".png");

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var img2 = document.getElementsByClassName("img2");
var dice = "dice" + randomNumber2;
img2[0].setAttribute("src", "images/"+dice+".png");

var title = document.querySelector("h1")

if (randomNumber1 > randomNumber2) {
  title.innerHTML = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = "Player 2 Wins!";
} else {
  title.innerHTML = "It's a Draw"; 
}
