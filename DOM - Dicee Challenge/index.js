// Dice 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// Dice2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Winner

// if Hugo Wins

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Hugo Wins!🤷‍♂️";
}

// If Tânia Wins

else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Tânia Wins!🤷‍♀️";
}

// Draw

else {
  document.querySelector("h1").innerHTML = "It´s a Draw, Stand Down!🤨";
}
