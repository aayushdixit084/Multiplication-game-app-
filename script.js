const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
const questionEL=document.getElementById("question")
const formEL= document.getElementById("form")
const inputEL=document.getElementById("input")
const scoreEL=document.getElementById("score")
let score = JSON.parse(localStorage.getItem("score"));
if (!score){
    score=0;
}
scoreEL.innerText=`score:${score}`
questionEL.innerText=`What is ${num1} Multiply by ${num2}?`;
const correctans = num1* num2;

formEL.addEventListener("submit",()=>{
    const userAns = +inputEL.value
    if(userAns ===correctans){
       score ++;
       updateLocalStorage()
    }
    else {
     score --;
     updateLocalStorage()
    }
})
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
