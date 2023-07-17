const quizData = [{
    question: "What is the largest State in india?",
    a: "Delhi",
    b: "Maharashtra",
    c: "Uttar Pradesh",
    d: "Rajasthan",
    correct: "d",
},
{
    question: "What is the smallest State in india?",
    a: "Goa",
    b: "Delhi",
    c: "Uttar Pradesh",
    d: "Mumbai",
    correct: "a",
},
{
    question: "what is the closset planet to earth?",
    a: "sun",
    b: "Venus",
    c: "Jupiter",
    d: "pluto",
    correct: "b",
},
{
    question: "Capital of india before Delhi",
    a: "Goa",
    b: "kolkata",
    c: "Uttar Pradesh",
    d: "Assam",
    correct: "b",
}];

const quiz=document.getElementById('quiz')
const answerE1s= document.querySelectorAll('.answer')
const questionE1=document.getElementById('question')
const a_text=document.getElementById('a_text')
const b_text=document.getElementById('b_text')
const c_text=document.getElementById('c_text')
const d_text=document.getElementById('d_text')
const submitBtn=document.getElementById('submit')

let currentQuiz=0
let score=0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionE1.innerText=currentQuizData.question
    a_text.innerText=currentQuizData.a
    b_text.innerText=currentQuizData.b
    c_text.innerText=currentQuizData.c
    d_text.innerText=currentQuizData.d
    
}
function deselectAnswers() {
    answerE1s.forEach(answerE1s=> answerE1s.checked = false)
}
function getSelected(){
    let answer
    answerE1s.forEach(answerE1 =>{
        if(answerE1.checked){
            answer=answerE1.id
         }
        })
        return answer
}

submitBtn.addEventListener("click",() => {
     const answer2=getSelected()
      if(answer2){
        if(answer2 === quizData[currentQuiz].correct)
          {
            score++
          }
            currentQuiz++

          if(currentQuiz<quizData.length)
            {
                loadQuiz()
            }   
          else{
               quiz.innerHTML=`<h2> you answered ${score}/${quizData.length} questions correctly 
               </h2> <button onclick="location.reload()">reload</button>`
               
          }  
            
     }
     
})

