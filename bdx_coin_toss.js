(function(window){

  function randomToss() {

    if(Math.random() > 0.5) {
      return "HEADS";
    } else {
      return "TAILS";
    }
  }

var coin = randomToss();
console.log(coin);

var headsSelected = 0;
var tailsSelected = 0;
var headsWon = 0;
var tailsWon = 0;
var headsWinRate;
var tailsWinRate;
var ovarallWinRate;


var flip = document.querySelectorAll("button");

  function flipCoin(event) {
    var side = event.target.textContent;
    console.log(side);

    if(side === "HEADS") {
      headsSelected++
      document.getElementById("headsSelected").textContent = headsSelected;
      if(side === coin) {
        headsWon++
        document.getElementById("headsWon").textContent = headsWon;
      }
    } else {
      tailsSelected++
      document.getElementById("tailsSelected").textContent = tailsSelected;
      if(side === coin) {
        tailsWon++
        document.getElementById("tailsWon").textContent = tailsWon;
      }
    }
    coin = randomToss();
  }

  flip.forEach(function(button) {
    button.addEventListener("click", flipCoin, true);
  });



// var headsEl = document.getElementById("heads");
// headsEl.addEventListener("click", flipCoin, true);
//
//
// var tailsEl = document.getElementById("tails");
// tailsEl.addEventListener("click", flipCoin, true);


/*
  var min = 1;
  var max = 11;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rNumber = random(min,max);
  console.log(rNumber);
*/

}(window));

/*
// TODO: My Todo item
0. determine the random side of the coin...
1. click heads or tails
2. compare it to the random selection
3. let the user know what they chose, and if they were right or not
4.update statistics
5. setup charts
*/
