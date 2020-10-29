$(document).ready(function() {

    var randSeq = []; //array con i 5 numeri generati casualmente

    // ciclo che genera 5 numeri casuali e li mette in un array

    for (var i = 5; i > 0; i--) {
        var randNum = Math.floor((Math.random() * 100)+1);
        randSeq.push(randNum);
        console.log(randSeq);
    }

    // visualizza nell'html i numeri che sono stati generati

    $( ".numb_list span" ).each(function() {
       $(this).append(randSeq);
   });


}
);
