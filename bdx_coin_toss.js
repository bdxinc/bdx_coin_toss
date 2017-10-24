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
var overallSelected;
var overallWon;
var overallWinRate;


var flip = document.querySelectorAll("button");


  function flipCoin(event) {
    var side = event.target.textContent;
    console.log(side);

    document.getElementById("result").textContent = "You picked " + side + "; the coin landed on " + coin;

    if(side === "HEADS") {
      currentH = headsSelected++
      document.getElementById("headsSelected").textContent = headsSelected;
      if(side === coin) {
        headsWon++
        document.getElementById("headsWon").textContent = headsWon;
      }
      headsWinRate = headsWon / headsSelected;
      document.getElementById("headsWinRate").textContent = (headsWinRate * 100).toFixed(2);
    } else {
      tailsSelected++
      document.getElementById("tailsSelected").textContent = tailsSelected;
      if(side === coin) {
        tailsWon++
        document.getElementById("tailsWon").textContent = tailsWon;
      }
      tailsWinRate = tailsWon / tailsSelected;
      document.getElementById("tailsWinRate").textContent = (tailsWinRate * 100).toFixed(2);
    }

    overallSelected = headsSelected + tailsSelected;
    overallWon = headsWon + tailsWon;

    overallWinRate = overallWon / overallSelected;
    document.getElementById("overallWinRate").textContent = (overallWinRate * 100).toFixed(2);

    coin = randomToss();

    document.getElementById("overallStats").style.display = "block";


    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
            var data = google.visualization.arrayToDataTable([
              ['Coin Side', 'Heads', 'Tails'],
              ['Times Selected', headsSelected, tailsSelected],
              ['Times Won',  headsWon, tailsWon]
            ]);

            var options = {
              title: 'Win Rate Chart',
              hAxis: {title: 'Coin Side',  titleTextStyle: {color: '#333'}},
              vAxis: {minValue: 0}
            };

            var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
            chart.draw(data, options);
          }
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
