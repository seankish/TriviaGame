$(document).ready(function() {
    $(".submit").hide();
    $(".questions").hide();
    $(".results").hide();
    $(".timer").hide();
    var wrongAnswer = 0;
    var correctAnswer = 0;
    var timer;

    // setting up 60 second timer to start after button is clicked
    $(".start-button").on("click",function() {
       
        $(".submit").show();
        $(".questions").show();
        $(".timer").show();
        timer = 60; 
        run();
        var intervalId;
        
        
        function run() {
        clearInterval(intervalId);
         intervalId = setInterval(decrement, 1000);
        }
        function stop () {
        clearInterval(intervalId);
        alert("time is up")
        $(".submit").hide();
        $(".questions").hide();
        $("#results").show();
        $(".timer").hide();
        }
      
    
         function decrement() {
        console.log(intervalId)
        timer--;
        $(".timer").text("Time Remaining: " + timer)
            if (timer === 0) {
            stop();
             }
        }
           // Make submit button have same function as running out of time
        $(".submit").on("click", function() {
            stop();
        });
    });

    // // Create object with all questions in it including array indicating correct answer
    // // display question object in questions div with clickable answers
    // conditional statement that tracks if userchoice index is equal to questionanswer index with tally stored in correctAnswer/wrongAnswer variables
    // figure out how to account  for unanswered questions
    // Display wrong/correct answer score on results page after quiz is over.
    
    // Make a retake the quiz button that appears after you have finished the test to restart everything without refreshing.

    
 

      
       
            
 })






