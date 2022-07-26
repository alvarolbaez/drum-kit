var drumNum = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumNum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonClass = this.id;

    switch (buttonClass) {
      case "crash":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "ride":
        var ride = new Audio("sounds/ride.mp3");
        ride.play();
        break;

      case "hi-hat":
        var hiHat = new Audio("sounds/hi-hat.mp3");
        hiHat.play();
        break;

      case "tom-tom1":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "tom-tom2":
        var tomTom2 = new Audio("sounds/tom-2.mp3");
        tomTom2.play();
        break;

        case "snare":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

      case "floortom":
        var floortom = new Audio("sounds/tom-3.mp3");
        floortom.play();
        break;

      case "bass-drum":
        var bassDrum = new Audio("sounds/kick-bass2.mp3");
        bassDrum.play();
        break;


      default:

    }

  });

}

// var tomTom = new Audio ("sounds/tom-1.mp3");
// tomTom.play();
