const STORE = [
    {Question: "Oxygenated blood is carried to the heart by which of the following structures?", A: "Aorta", B:"Pulmonary veins", C:"Carotid arteries", D:"Superior vena cava", correct: "Pulmonary veins"}, 
    {Question: "All of the following cranial nerces are involved with eye muscle contraction except which of the following.", A: "Abducens", B:"Occulomotor", C:"Optic", D:"Trochlear", correct: "Optic" }, 
    {Question: "Which of the following is the large bone found superior to the patella and inferior to the ischium?", A: "Calcaneus", B:"Tibia", C:"Fibula", D:"Femur", correct: "Femur"}, 
    {Question: "Which of the following closes and seals off the lower airway during swallowing?", A: "Epiglottis", B:"Uvula", C:"Vocal cords", D:"Larynx", correct: "Epiglottis" }, 
    {Question: "Fertilization of an ovum by a spermatozoan occurs in which of the following structures?", A: "Cervix", B:"Ovary", C:"Uterus", D:"Fallopian tube", correct: "Fallopian tube" }, 
    {Question: "Which of the following describes the cluster of blood capillaries found in each nephron in the kidney?", A: "Glomerulus", B:"Afferent arteriole", C:"Loop of Henle", D:"Renal tubule", correct: "Glomerulus" }, 
    {Question: "At which of the following locations does bile enter the digestive tract?", A: "Duodenum", B:"Ileocecum", C:"Jejunum", D:"Pyloric sphincter", correct: "Duodenum" }, 
    {Question: "Which of the following allows gas exchange in the lungs?", A: "Bronchioles", B:"Pleurae", C:"Alveoli", D:"Capillaries", correct: "Alveoli" }, 
    {Question: "The actual hearing receptors in the inner ear are called the:", A: "Semicircular canals", B:"Tympanic membrane", C:"Organ of Corti", D:"Auditory tube", correct: "Organ of Corti"}, 
    {Question: "Which of the following is not found in the mediastinum?", A: "Heart", B:"Lungs", C:"Trachea", D:"Thymus", correct: "Lungs"}
];

let questionNumber = 0;
let currentScore = 0;

// shows the next question 
function nextQuestion() {
    submitAnswer();
    // if (questionNumber > STORE.length) {
        // finalPage();
    // } else {
        $(".next").on('click', function() {
            questionNumber++;
            console.log('this is question' + questionNumber);
            $(this).closest("div").remove();
            $("main").append(
                `<div class="question">
                    <h3>${STORE[questionNumber-1].Question}</h3>
                    <form class="multiple choice" id="answerForm" method="POST">
                        <input type="radio" id="multiple-choice-a" name="answer" value="${STORE[questionNumber-1].A}" required><label for="multiple-choice-a">${STORE[questionNumber-1].A}</label>
                        <input type="radio" id="multiple-choice-b" name="answer" value="${STORE[questionNumber-1].B}" required><label for="multiple-choice-b">${STORE[questionNumber-1].B}</label>
                        <input type="radio" id="multiple-choice-c" name="answer" value="${STORE[questionNumber-1].C}" required><label for="multiple-choice-c">${STORE[questionNumber-1].C}</label>
                        <input type="radio" id="multiple-choice-d" name="answer" value="${STORE[questionNumber-1].D}" required><label for="multiple-choice-d">${STORE[questionNumber-1].D}</label>
                        <input type="submit" class="submission" value="Submit my answer">
                    </form>
                </div>`
            );
        });
    // }
}

// keeps track of progress in nav bar
function showProgress() {
     $(".questionNumber").text(questionNumber);
     console.log('showing progress');
}

// keeps track of score in nav bar
function showScore() {
    $(".score").html(`${currentScore}`);
        console.log('showing score');
} 

// when submit is pressed, makes sure one radio button is selected and removes question
function submitAnswer() {
    $("form").on('submit', function(event) {
        alert('hello world');
        console.log('hello world');
        event.preventDefault();
        let selected = $("input[name=answer]:checked").val();
        console.log(selected);
        $(this).closest(".question").remove();
        //note: needs to be able to not submit unless something checked
        giveFeedback(selected);     
    });  
}  

submitAnswer();

// shows feedback page with correct answer
function giveFeedback(s) {
    if (s === STORE[questionNumber-1].correct) {
        $("main").html(
            `<div class="response">
                <h4>You got it right!</h4>
                <button type="button" class="next">Next Question!</button>
            </div>`
        );
        updateScore();
        console.log('score =' + currentScore);
    } else {
        $("main").html(
            `<div class="response">
                <h4>That is incorrect.</h4>
                 <p>The correct answer is: '${STORE[questionNumber-1].correct}'.</p>
                <button type="button" class="next">Next Question!</button>
            </div>`
         );
    };
    nextQuestion();
 } 

// updates score
// function updateScore() {
// //     currentScore++
// }  

// once tenth feedback page is shown, shows results with option to restart quiz
// function finalPage() {
//     $("form").on('submit', function(event) {
//         event.preventDefault();
//         $(this).closest("div").remove();
//         $("main").html(
//             `<h3>You finished the quiz!</h3>`            
//         );
//     });
// }

// redirects to opening page
function restartQuiz() {} 

nextQuestion();
showProgress();
showScore();
submitAnswer();
