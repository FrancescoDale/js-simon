$(document).ready(function() {

    var randSeq = []; //array con i 5 numeri generati casualmente

    for (var i = 5; i > 0; i--) {
        var randNum = Math.floor((Math.random() * 100)+1);
        randSeq.push(randNum);
        console.log(randSeq);
    }




}
);
