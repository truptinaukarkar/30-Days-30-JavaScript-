
const Ques = document.querySelector(".q1");
const Op1 = document.querySelector(".o1");
const Op2 = document.querySelector(".o2");
const Op3 = document.querySelector(".o3");
const Op4 = document.querySelector(".o4");

const next = document.querySelector(".next");
const back = document.querySelector(".back");
const submit = document.querySelector(".submit");

let quesList = {
    1:{
        ques:"1. Which Planet is known as the Red Planet?",
        op1:"Venus",
        op2:"Mars",
        op3:"Jupiter",
        op4:"Saturn",
        ans:"Mars"
    },
    2:{
        ques:"2. Which language is mainly used for styling web pages?",
        op1:"HTML",
        op2:"Python",
        op3:"CSS",
        op4:"Java",
        ans:"CSS"
    },
    3:{
        ques:"3. What does CPU stand for?",
        op1:"Central Processing Unit",
        op2:"Computer Personal Unit",
        op3:"Central Program Utility",
        op4:"Control Processing User",
        ans:"Central Processing Unit"
    },
    4:{
        ques:"4. Which company developed the React library?",
        op1:"Google",
        op2:"Microsoft",
        op3:"Facebook",
        op4:"Amazon",
        ans:"Microsoft"
    }
};

let maxIndex= Object.values(quesList).length;
let count=1;

const options=[Op1,Op2,Op3,Op4];
let selection=null;
let text=null;
let answers=[];

options.forEach((btn)=>{
    btn.addEventListener("click", ()=>{

        options.forEach((b)=>{
            b.classList.remove("active");
        });

        btn.classList.add("active");

        options.forEach((b)=>{
             b.style.backgroundColor = "";
        });

        btn.style.backgroundColor = "lightblue";

        selection= btn;
        text= btn.textContent;
    });
});


// console.log(quesList.ques1.ques);
function showQuestion(count) {
    Ques.textContent= quesList[count].ques;
    Op1.textContent= quesList[count].op1;
    Op2.textContent= quesList[count].op2;
    Op3.textContent= quesList[count].op3;
    Op4.textContent= quesList[count].op4;
};

showQuestion(count);

next.addEventListener("click", ()=>{
    if(text){
        answers[count-1]=text;
        text=''; 
        
        options.forEach((btn) => {
            btn.style.backgroundColor = "";
            btn.classList.remove("active");
        });
    }

    count++;
           
    if(count<maxIndex){
        showQuestion(count);
    }
    if(count==maxIndex){
        showQuestion(count);
        next.textContent="Save";
        submit.style.display="block";
    }

    console.log(answers);
});

back.addEventListener("click", ()=>{
    if(count>1){
        count--;
    }
    showQuestion(count);
    next.textContent="Next >";
    submit.style.display="none";
});


// window.addEventListener("load", () => {
//     options.forEach((btn) => {
//         btn.style.backgroundColor = "";
//         btn.classList.remove("active");
//     });

//     text = null;
// });

let fixedAns=['Mars','CSS','Central Processing Unit','Microsoft'];


submit.addEventListener("click",()=>{
    let points=0;

    for(let i=0; i<maxIndex; i++){
        if(fixedAns[i]==answers[i]){
            points++;
        }
    }
    
    showResult(points);
    console.log(points);
})

function showResult(points){

    const container = document.querySelector(".main");

    let wrong = maxIndex - points;
    let percentage = Math.floor((points / maxIndex) * 100);

    let performance = "";

    if(percentage >= 80){
        performance = "Excellent 🚀";
    }
    else if(percentage >= 50){
        performance = "Good Work 👍";
    }
    else{
        performance = "Keep Practicing 📚";
    }

    container.innerHTML = `

    <div class="result-container">

        <h1 class="result-title">Quiz Completed 🎉</h1>

        <div class="score-circle">
            ${percentage}%
        </div>

        <h2 class="performance-text">${performance}</h2>

        <div class="stats-container">

            <div class="stat-card">
                <h3>${points}</h3>
                <p>Correct</p>
            </div>

            <div class="stat-card">
                <h3>${wrong}</h3>
                <p>Wrong</p>
            </div>

            <div class="stat-card">
                <h3>${maxIndex}</h3>
                <p>Total </p>
            </div>

        </div>

        <div class="progress-section">

            <p>Performance</p>

            <div class="progress-bar">
                <div 
                    class="progress-fill"
                    style="width:${percentage}%">
                </div>
            </div>

        </div>

        <div class="score-summary">
            You scored <strong>${points}/${maxIndex}</strong>
        </div>

        <div class="result-buttons">

            <button id="restartBtn">Restart Quiz</button>

            <button id="reviewBtn">Review Answers</button>

        </div>

    </div>
    `;


    document
        .getElementById("restartBtn")
        .addEventListener("click", ()=>{
            location.reload();
        });


    document
        .getElementById("reviewBtn")
        .addEventListener("click", ()=>{
            alert("Review feature coming soon");
        });
}