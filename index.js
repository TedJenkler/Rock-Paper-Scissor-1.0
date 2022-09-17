const pcChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let pcChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', function(e){
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

const generateComputerChoice = () => {
    const randomNr = Math.floor(Math.random() * 3) + 1
    if(randomNr == 1){
       pcChoice = 'rock'
    }
    if(randomNr == 2){
        pcChoice = 'paper'
     }
     if(randomNr == 3){
        pcChoice = 'scissor'
     }
     pcChoiceDisplay.innerHTML = pcChoice
}

const getResult = () => {
    if(pcChoice === userChoice) {
        result = 'its a draw'
    }

    if(pcChoice === 'rock' && userChoice === 'scissor') {
         result = 'You Lost'  
   } 
   if(pcChoice === 'rock' && userChoice === 'paper') {
    result = 'U Won' 
    }     
    if(pcChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lost'  
    } 
    if(pcChoice === 'paper' && userChoice === 'scissor') {
    result = 'U Won' 
    }    
    if(pcChoice === 'scissor' && userChoice === 'paper') {
        result = 'You Lost'  
    } 
    if(pcChoice === 'scissor' && userChoice === 'rock') {        
        result = 'U Won' 
    }     

    resultDisplay.innerHTML = result
}