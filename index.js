const STORE = [
    {Question: "Oxygenated blood is carried to the heart by which of the following structures?", A: "Aorta", B:"Pulmonary veins", C:"Carotid arteries", D:"Superior vena cava", correct: "Pulmonary veins"}, 
    {Question: "All of the following cranial nerves are involved with eye muscle contraction except which of the following.", A: "Abducens", B:"Occulomotor", C:"Optic", D:"Trochlear", correct: "Optic"}, 
    {Question: "Which of the following is the large bone found superior to the patella and inferior to the ischium?", A: "Calcaneus", B:"Tibia", C:"Fibula", D:"Femur", correct: "Femur"}, 
    {Question: "Which of the following closes and seals off the lower airway during swallowing?", A: "Epiglottis", B:"Uvula", C:"Vocal cords", D:"Larynx", correct: "Epiglottis"}, 
    {Question: "Fertilization of an ovum by a spermatozoan occurs in which of the following structures?", A: "Cervix", B:"Ovary", C:"Uterus", D:"Fallopian tube", correct: "Fallopian tube"}, 
    {Question: "Which of the following describes the cluster of blood capillaries found in each nephron in the kidney?", A: "Glomerulus", B:"Afferent arteriole", C:"Loop of Henle", D:"Renal tubule", correct: "Glomerulus"}, 
    {Question: "At which of the following locations does bile enter the digestive tract?", A: "Duodenum", B:"Ileocecum", C:"Jejunum", D:"Pyloric sphincter", correct: "Duodenum"}, 
    {Question: "Which of the following allows gas exchange in the lungs?", A: "Bronchioles", B:"Pleurae", C:"Alveoli", D:"Capillaries", correct: "Alveoli",}, 
    {Question: "The actual hearing receptors in the inner ear are called the:", A: "Semicircular canals", B:"Tympanic membrane", C:"Organ of Corti", D:"Auditory tube", correct: "Organ of Corti"}, 
    {Question: "Which of the following is not found in the mediastinum?", A: "Heart", B:"Lungs", C:"Trachea", D:"Thymus", correct: "Lungs"}
];


let questionNumber = 0;
let currentScore = 0;

function nextQuestion() {
        $(".next").on('click', function() {
        $(this).closest("div").remove();
        $("section").html(
            `<div class=question>
                <h1>${STORE[questionNumber].Question}</h1>
                <form class="multiple-choice" id="form">
                    <fieldset name="answer set">
                        <ul>
                            <li><label class="option"><input type="radio" name="answer" value="${STORE[questionNumber].A}" required>${STORE[questionNumber].A}<span class="checkmark"></span></label></li>
                            <li><label class="option"><input type="radio" name="answer" value="${STORE[questionNumber].B}" required>${STORE[questionNumber].B}<span class="checkmark"></span></label></li>
                            <li><label class="option"><input type="radio" name="answer" value="${STORE[questionNumber].C}" required>${STORE[questionNumber].C}<span class="checkmark"></span></label></li>
                            <li><label class="option"><input type="radio" name="answer" value="${STORE[questionNumber].D}" required>${STORE[questionNumber].D}<span class="checkmark"></span></label></li>
                        </ul>    
                        <input type="submit" value="Submit">
                    </fieldset>    
                </form>
            </div>`
        )
        questionNumber++;
        console.log('this is question' + questionNumber);
        showProgress();     
    });    
}


function submitAnswer() {   
    $(".container").on('submit', function(event) {
        event.preventDefault();
        let selected = $("input[name=answer]:checked").val();
        console.log(selected);
        $(this).children("div").remove();
        giveFeedback(selected); 
    });
}

function giveFeedback(s) {
    if (s === STORE[questionNumber-1].correct) {
        $("section").html(
            `<div class="response">
                <img src='https://cdn1.iconfinder.com/data/icons/medical-medicine-and-human-anatomy-vol-6/512/human_body_parts_anatomy_health_part_-_12-512.png' alt="Smiling skull icon">
                <h3>That's right!</h3>
                <button type="button" class="next">Next Question!</button>
            </div>`
        );
        currentScore++
        console.log('your score is ' + currentScore);
    } else {
        $("section").html(
            `<div class="response">
                <img src='https://cdn3.iconfinder.com/data/icons/medical-and-health-vector-line-3/128/109-512.png' alt="Broken bone icon">
                <h3>Ouch! That is incorrect.</h3>
                <h5>The correct answer is: '${STORE[questionNumber-1].correct}'.</h5>
                <button type="button" class="next">Next Question!</button>
            </div>`
        );
        console.log('your score is ' + currentScore);
    };
    showScore();
    if (checkQuestion()) {
        nextQuestion();
    } else {
        finalPage();
    }
}

function checkQuestion() {
    if (questionNumber < 10) {
        return true;
    } else {
        return false;
    }
}

function showProgress() {
    $(".number").text(questionNumber);
}

function showScore() {
    $(".score").text(currentScore);
}

function finalPage() {
    $(".next").on('click', function() {
        $(this).closest("div").remove();
        if (currentScore >= 8) {
            $("section").html(
                `<div class="results">
                    <h3>Great job!</h3>
                    <h5>You got ${currentScore} out of 10 right!</h5>
                    <button type="button" class="restart">Restart</button>
                </div>`
            );
        } else if (currentScore < 8 && currentScore >=5) {
            $("section").html(
                `<div class="results">
                    <h3>Keep on trying, you're almost there!</h3>
                    <h5>You got ${currentScore} out of 10 right!</h5>
                    <button type="button" class="restart">Restart</button>
                </div>`
            );
        } else {
            $("section").html(
                `<div class="results">
                    <h3>Maybe it's time to hit the books.</h3>
                    <h5>You got ${currentScore} out of 10 right!</h5>
                    <button type="button" class="restart">Restart</button>
                </div>`
            );
        };
    redoQuiz();
    });    
}

function redoQuiz() {
    $(".restart").on('click', function() {
        $(this).closest("div").remove();
        $("section").html(
            `<div class="starting-info">
                <h1>Test your knowledge of the human body! Do you know yourself?</h1>
                <button type="button" class="next">Let's find out!</button>
            </div>`
        );
        questionNumber = 0;
        currentScore = 0;
        callFunctions();
    })
}

function callFunctions() {
    nextQuestion();
    submitAnswer();
    showProgress();
    showScore();
}

callFunctions();