var correct = 0;
var wrong = 0;
var currentQuestion = 0;
var timer = 30;
var intervalId;


var questions = [
    {question: "How many Star Wars movies have been released?",
     answers: ["10", "3", "6", "5"],
     correctAnswer: "10"
    },
    {question: "What is the name of the first Star Wars movie?",
     answers: ["Space Wars", "Luke & Leia's Space Adventure", "A New Hope", "Empire Strikes Back"],
     correctAnswer: "A New Hope"
    },
    {question: "Who is the main protagonist in the original Star Wars movies?",
     answers: ["Darth Vader", "Luke Skywalker", "Rey", "Obi-Wan Kenobi"],
     correctAnswer: "Luke Skywalker"
    },
    {question: "What is the name of the ship Han and Chewie fly?",
     answers: ["X-Wing", "Death Star", "Millenium Falcon", "Apollo"],
     correctAnswer: "Millenium Falcon"
    },
    {question: "Who is Luke Skywalker's father?",
     answers: ["Darth Vader", "Obi-Wan Kenobi", "Chancellor Palpatine", "Mace Windu"],
     correctAnswer: "Darth Vader"
    },
    {question: "Who is Chancellor Palpatine?",
     answers: ["The Senate", "Sheev", "Darth Sidious", "All of the above"],
     correctAnswer: "All of the above"
    },
    {question: "What color is Mace Windu's lightsaber?",
     answers: ["Red", "Blue", "Purple", "Green"],
     correctAnswer: "Purple"
    },
    {question: "Which Sith Lord wields a double sided lightsaber?",
     answers: ["Darth Sidious", "Darth Maul", "Darth Tyranus", "Darth Plagueis"],
     correctAnswer: "Darth Maul"
    },
    {question: "What is the name of the planet Luke travels to find Yoda?",
     answers: ["Dagobah", "Hoth", "Endor", "Alderaan"],
     correctAnswer: "Dagobah"
    },
    {question: "Who is the Chosen One?",
     answers: ["Rey", "Luke Skywalker", "Obi-Wan Kenobi", "Anakin Skywalker"],
     correctAnswer: "Anakin Skywalker"
    }
]

// var gifs = [
//     {correctGif: URL("src", "../assets/images/question_1_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_1_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_2_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_2_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_3_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_3_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_4_correct.gif"),
//     wrongGif: URL("src", "../assets/images/question_4_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_5_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_5_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_6_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_6_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_7_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_7_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_8_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_8_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_9_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_9_wrong.gif")
//     },
//     {correctGif: URL("src", "../assets/images/question_10_correct.gif"),
//      wrongGif: URL("src", "../assets/images/question_10_wrong.gif")
//     }
// ]

function start (){

}

function count(){
    timer--;
    $('.timer').text(timer)
    if(timer === 0){
        clearInterval(intervalId);
        currentQuestion++;
        nextQuestion()
    }
}

function nextQuestion () {
    $(".questions").empty()
    timer = 30;
    intervalId = setInterval(count, 1000)
    if(currentQuestion === questions.length) {
        alert("Game over!")
        alert("Correct: " + correct) 
        alert("Wrong: " + wrong)
        // gameOver();
    }
    else {
    $(".questions").append(questions[currentQuestion].question)
    for(var i =0; i<4; i++){
        var btns = $("<button>")
        btns.addClass("answers")
        btns.text(questions[currentQuestion].answers[i])
        btns.attr("data-ans", questions[currentQuestion].answers[i])
        $(".questions").append(btns)
    }
}
}

$(document).on("click", ".answers", function() {
    var answer = $(this).attr("data-ans")
    if (answer === questions[currentQuestion].correctAnswer){
        correct++

        // Sad attempt at spewing out gifs
        // var gif = $("<img>")
        // gif.addClass("giffy")
        // gif.attr("data-ans", gifs[currentQuestion].correctGif[i])
        // $(".giffy").append("answers")
    }
    else {
        wrong++
    }
   
    currentQuestion++;
    clearInterval(intervalId);
    nextQuestion();
})

nextQuestion()


