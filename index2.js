var drumNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonClass = this.id;

    switch (buttonClass) {
      case "crash":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        btnAnmCrash(buttonClass);
        break;

      case "ride":
        var ride = new Audio("sounds/ride.mp3");
        ride.play();
        btnAnmRide(buttonClass);
        break;

      case "hi-hat":
        var hiHat = new Audio("sounds/hi-hat.mp3");
        hiHat.play();
        btnAnmHiHat(buttonClass);
        break;

      case "tom-tom1":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        btnAnmTomTom1(makeSound);
        break;

      case "tom-tom2":
        var tomTom2 = new Audio("sounds/tom-2.mp3");
        tomTom2.play();
        btnAnmTomTom2(makeSound);
        break;

      case "snare":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        btnAnmSnare(makeSound);
        break;

      case "floortom":
        var floortom = new Audio("sounds/tom-3.mp3");
        floortom.play();
        btnAnmFloorTom(makeSound);
        break;

      case "bass-drum":
        var bassDrum = new Audio("sounds/kick-bass2.mp3");
        bassDrum.play();
        btnAnmKickBass(makeSound);
        break;


      default:

    }

  });

}


document.addEventListener("keydown", function(event) {

  makeSound(event.key);

})

function makeSound(key) {

  switch (key) {
    case "r":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      btnAnmCrash(makeSound);
      break;

    case "y":
      var crash = new Audio("sounds/ride.mp3");
      crash.play();
      btnAnmRide(makeSound);
      break;

    case "f":
      var crash = new Audio("sounds/hi-hat.mp3");
      crash.play();
      btnAnmHiHat(makeSound);
      break;

    case "g":
      var crash = new Audio("sounds/tom-1.mp3");
      crash.play();
      btnAnmTomTom1(makeSound);
      break;

    case "h":
      var crash = new Audio("sounds/tom-2.mp3");
      crash.play();
      btnAnmTomTom2(makeSound);
      break;

    case "v":
      var crash = new Audio("sounds/snare.mp3");
      crash.play();
      btnAnmSnare(makeSound);
      break;

    case "n":
      var crash = new Audio("sounds/tom-3.mp3");
      crash.play();
      btnAnmFloorTom(makeSound);
      break;

    case "b":
      var crash = new Audio("sounds/kick-bass2.mp3");
      crash.play();
      btnAnmKickBass(makeSound);
      break;

    default:

  }

}

function btnAnmCrash(currentKey) {
  var actBtn = document.querySelector("#crash");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmRide(currentKey) {
  var actBtn = document.querySelector("#ride");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmHiHat(currentKey) {
  var actBtn = document.querySelector("#hi-hat");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmTomTom1(currentKey) {
  var actBtn = document.querySelector("#tom-tom1");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmTomTom2(currentKey) {
  var actBtn = document.querySelector("#tom-tom2");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmSnare(currentKey) {
  var actBtn = document.querySelector("#snare");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmFloorTom(currentKey) {
  var actBtn = document.querySelector("#floortom");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}

function btnAnmKickBass(currentKey) {
  var actBtn = document.querySelector("#bass-drum");
  actBtn.classList.add("press");
  setTimeout(function() {
    actBtn.classList.remove("press");
  }, 100);
}
