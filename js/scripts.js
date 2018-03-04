$(document).ready(function() {
  $(".start").click(function() {

    $(".section1").toggle();

  });
});

$(document).ready(function() {
  $(".save").click(function() {

    $(".game").toggle();
  });
});

// business logic
function Player(player1, player2) {
  this.Player1=player1;
  this.Player2=player2;
}

// user interface logic
$(document).ready(function() {
  $("form#player-details").submit(function(event) {
    event.preventDefault();

    var inputtedplayer1= $("input#player1").val();
    var inputtedplayer2= $("input#player2").val();

    var newPlayers = new Player(inputtedPlayer1,inputtedPlayer2);

  })
})
// <h1 class="test">78</h1>
// $(document).ready(function() {
//   var v = $('.test')
//   var x = parseInt(v.text()) + 1;
//   v.text(x)
//   console.log(x)
//
//
// });
