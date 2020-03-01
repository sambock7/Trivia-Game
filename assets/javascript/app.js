$(document).ready(function () { 
    var questions= [
        {
            q: "What does TGS stand for?",
            a: {
                a: "The Great Show",
                b: "The Girlie Show",
                c: "The Great Sitcom",
                d: "The Girls Sitcom",
            },
            rightAnswer: "b"
        },
        {
            q: "It's after 6, what am I a ____?",
            a: {
                a: "farmer",
                b: "penguin",
                c: "moron",
                d: "king",
            },
            rightAnswer: "a"
        },
        {
            q: "What was Tracy Jordan screaming, running down the street in his underwear?",
            a: {
                a: "where are my pants?",
                b: "get away from me blue lady!",
                c: "I am a Jedi!",
                d: "Dr. Spaceman!",
            },
            rightAnswer: "c"
        },
        {
            q: "Where does Jack pass gass gas once a year for an hour?",
            a: {
                a: "in Liz Lemon's apartment",
                b: "on the top of the Empire State Building",
                c: "in New Jersey",
                d: "atop a mountain in Switzerland",
            },
            rightAnswer: "d"
        },
        {
            q: "According to Liz Lemon, what does all of humankind have in common?",
            a: {
                a: "hot dogs",
                b: "rudeness",
                c: "chicken parm",
                d: "the sandwich",
            },
            rightAnswer: "d"
        },

    ];

    function startQuiz(){
        for(var i=0; i<questions.length;i++){
            var questionDiv = $("<div>");
            questionDiv.addClass("question");
    
            var questionParagraph = $("<p>");
            questionParagraph.attr("id", "question-"+i);
            questionParagraph.append(questions[i].q);
    
            $.each(questions[i].a, function(key,value){
                questionDiv.append("<input type='radio' name='"+i+"' value= "+ key + ">")
                questionDiv.append(key + ". " + value +"<br>")
            });
    
            questionDiv.prepend(questionParagraph);
            $("#trivia-questions").append(questionDiv)
        }
    }
    
    startQuiz();

    
    var quizOver = false;
    var intervalId;
    var time = 120;
    var clockRunning = false;
    
    var converted = timeConverter(time);
    
    $("#countdown").text(converted);
    
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
      };
    
    function stop() {
        clearInterval(intervalId);
        clockRunning = false;
        quizOver = true;
    };
    
    function count() {
        time--;
      
      
        converted = timeConverter(time);

    
        $("#countdown").text(converted);
    
        if (converted == "00:00"){
            stop();
            alert("You are out of time!");
        }

        $("#time").text(converted);
    
    };
    

    function timeConverter(t) {
    
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
      
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
    
    

    
    var answers = []

    $("#submit").click(function(){
        stop();
        alert("Your quiz has been successfully submitted");
    
        $('input:checked').map(function(){
            answers.push($(this).val())
        
        });
        console.log(answers);
        for(i = 0; i < questions.length; i++){
            if(answers[i] === questions[i].correctAnswer){
                $("#quiz").append(i + "CORRECT!")
                console.log(i + "CORRECT!")
                }
            else{
                $("#quiz").append(i + "WRONG!")
                console.log(i + "WRONG!")
            }
        }
    });
})


