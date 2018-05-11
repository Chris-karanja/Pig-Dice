//biz logic
var Player=function(name){
  this,name=name
}
Player.prototype.rollDice = function () {
  var total=0
  var result=math.floor(math.random()*6)+1
  if(dice < 2) {
      var currentScore = 0;
      return currentScore;
    } else if(dice >= 2){
      currentScore += dice
      var i = 0;
      return currentScore;
    };
  };
};

//UI logic
$(document).ready(function() {
  $(#submit).click(function() {
    event.preventDefault();

  })
}
