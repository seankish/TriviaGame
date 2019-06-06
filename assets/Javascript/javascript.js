$(document).ready(function() {
    $(".submit").hide();
    $(".questions").hide();
    $("#results").hide();
    $(".timer").hide();
    var wrongAnswer = 0;
    var correctAnswer = 0;
    var timer = 60;
    console.log("ready");
    $(".start-button").on("click",function() {
        alert("clicked");
        $(".submit").show();
        $(".questions").show()
        $(".timer").show();
        $(".timer").text("Time Remaining:ll " + timer)
        setTimeout(timeUp, 1000 * 5);
        function timeUp () {
            alert("time is up")
            
            
        }
    })

//     // set timer for trivia test
//     // setTimeout(timeUp, 1000*60);
// $(".start-button").on(click, function() {
//     setTimeout(timeUp, 1000*60);
//     alert("started")
//     function timeUp() {
//         console.log("times up")
//         alert("times up")
//     }
// });





});