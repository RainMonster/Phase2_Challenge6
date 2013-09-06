// $(document).ready(function() {
  // $('#roller button.add').on('click', function() {
  //   console.log("WAT")
  //   $('.dice').append('<div class="die">0</div>');
  // });

  // $('#roller button.roll').on('click', function() {
  //   $('.die').each(function(k, die) {
  //     var value = Math.floor((Math.random()*6)+1);
  //     $(die).text(value);
  //   });
  // });
// });


$(document).ready(function(){

  $('#roller button.add').on('click', function(){
    die.addToDOM();
  });

  $('#roller button.roll').on('click', function(){
    shake.existingDice = $('.die');
    // rollDice.rollAll();
    shake.shakeAll();
  });

});


function Die(whereToAddDice){
  this.whereToAddDice = whereToAddDice;
}

Die.prototype.addToDOM=function(){
  $('.dice').append(this.whereToAddDice);
};

Die.prototype.reRoll=function(){
  this.reRoll = function(){
    return Math.floor((Math.random()*6)+1);
  };
};

var die = new Die('<div class="die">0</div>');

// var rollDice = {
//   rollAll : function(){
//     $('.die').each(function(k, eachDie){
//       $(eachDie).text(die.reRoll());
//     });
//   }
// };

var diceOnDom = $(".die");

function ShakeDice(existingDice){
  this.existingDice = existingDice;
  console.log(this.existingDice);
}

ShakeDice.prototype.shakeAll = function(){
  this.existingDice.each(function(k, eachDie){
    console.log(eachDie);
    $(eachDie).text(die.reRoll());
  });
};

var shake = new ShakeDice(diceOnDom);



