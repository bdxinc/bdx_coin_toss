(function(){



  function randomToss() {


    if(Math.random() > 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }

console.log(randomToss());
/*
  var min = 1;
  var max = 11;

  function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  var rNumber = random(min,max);
  console.log(rNumber);
*/

}());

/*
// TODO: My Todo item
0. determine the random side of the coin...
1. click heads or tails
2. compare it to the random selection
3. let the user know what they chose, and if they were right or not
4.update statistics
5. setup charts
*/
