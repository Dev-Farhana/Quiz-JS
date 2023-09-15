let questions = [
    { question: "Baby frog is known as ?",
        answers:[
            {Text: "Tadpole", correct: true},
            {Text: "I Don't know ", correct: false}
        ]
    },
    {  question:"How many consonants are there in the English alphabet?",
        answers: [
            { Text: "11 Consonants", correct: false},
            {Text:"21 Consonants", correct: true},
            { Text: "22 Consonants", correct: false},
            { Text: "24 Consonants", correct: false},
        ] 
    },
    {  question: "Which is the shortest continent?",
        answers: [
            {Text: "Asia", correct: false},
            {Text: "America", correct: false},
            {Text: "Australia", correct: true},
            {Text: "Africa", correct: false}
        ]
    },
    {  question: "Who invented the BALLPOINT PEN?",
        answers:[
            {Text: "Biro Brothers", correct:true},
            {Text: "Bicc Brothers", correct: false},
            {Text: "Write Brothers", correct: false},
            {Text: "Waterman Brothers", correct: false},
        ]
    },
    { question: "Ms-Word is an example of?",
        answers:[
            {Text: "An operating system", correct:false},
            {Text: "A processing device", correct:false},
            {Text: "An input device", correct:false},
            {Text: "Application Software", correct:true}
        ]
    }, 
    { question: "Ctrl, Shift and Alt are called .......... keys.",
        answers: [
            {Text:"modifier", correct:true},
            {Text:"function", correct:false},
            {Text:"alphanumeric", correct:false},
            {Text:"adjusment", correct:false}
        ]
    },
    { question: " What color does yellow and green make?",
        answers:[
            {Text:"OceanMist", correct:false},
            {Text:"Lime", correct:true},
            {Text:"Maroon", correct:false},
            {Text:"Tangerine", correct:false}
        ] 
    },
    { question: "Correct the sentence gramatically:/n 'She went to gym despite of her illness'.",
        answers: [
            {Text:"to", correct:false},
            {Text:"her", correct:false},
            {Text:"of", correct:true},
            {Text:"None/ I Don't know English", correct:false}
        ]
    },
    {  question: "What is the name of person which controls a football match",
        answers: [
            {Text:"A Spectator", correct:false},
            {Text:"A referee", correct:true},
            {Text:"A goalKeeper", correct:false},
            {Text:"An Umpire", correct:false}
        ]
    },
    { question: "As you go down into a well, your weight",
        answers:[
            {Text:"Remains exactly the same", correct:false},
            {Text:"decreases slightly", correct:true},
            {Text:"increases slightly", correct:false},
            {Text: "None/ I Don't Know", correct:false}
        ] 
    },
    { question: "Animals that has worst shortest memory or no memories at all.",
        answers: [
            {Text:"Dolphins", correct:false},
            {Text:"Whale", correct:false},
            {Text:"Snakes", correct:true},
            {Text:"Horse", correct:false}
        ]
    },
    { question: "What kind of female animals kill their partner after they mate?",
        answers: [
            {Text:"Pit viper", correct:false},
            {Text:"Whale", correct:false},
            {Text:"Shark", correct:false},
            {Text:"Spiders & certain HoneyBees", correct:true}
        ]
    }
];
//my html file doc;
let questionEle = document.getElementById("question");
let optionBtn = document.getElementById("ans-btns");
let nextBtn = document.getElementById("nextbtn");

let score = 0;

let currentQIndex = 0;

function startQuiz() {
    currentQIndex = 0;
    score = 0;
    // score += 1;
    nextBtn.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQIndex];
    let questionNo = currentQIndex + 1;
    questionEle.innerHTML = questionNo + "." + currentQuestion.question;
    console.log(questionNo);

    currentQuestion.answers.forEach( answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.Text;
        button.classList.add("btn");
        optionBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAns);
    })
}

function selectAns(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(optionBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        // else{
        //     button.classList.add("incorrect");
        // }
        nextBtn.style.display = "block";
    })

}

function showScore(){
    resetState();
    questionEle.innerHTML = `You Scored ${score} out of ${questions.length}questions Congrats!`;
    nextBtn.innerHTML = "Play Again!";
    nextBtn.style.display = "block";
    questionEle.addEventListener('submit', submitform)
}

function handleNextBtn() {
    currentQIndex ++;
    score++;
    if(currentQIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextBtn.addEventListener('click', () =>{
    if(currentQIndex < questions.length ){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

function resetState(){
    nextBtn.style.display = "none";
    while(optionBtn.firstChild){
        optionBtn.removeChild(optionBtn.firstChild);
    }
}

startQuiz();








