
let diceType = 10
const newDice = '<div class="circle" name="display" data-testid="display">0</div>'
const MAX_NUMBER_DICES = 10


const setUpButtons = () => {

  document.getElementsByName('rollDice')[0].addEventListener('click', () => {
  rollDice()
  })

  document.getElementsByName('clean')[0].addEventListener('click', () => {
  deleteAllDices()
  })

 document.getElementsByName('addNewDice')[0].addEventListener('click', () => {
  addNewDice()
  })

  document.getElementsByName('D6')[0].addEventListener('click', () => {
  changeDiceType(6)
  highLightButton('D6')
  })
   document.getElementsByName('D10')[0].addEventListener('click', () => {
  changeDiceType(10)
  highLightButton('D10')
  })
   document.getElementsByName('D20')[0].addEventListener('click', () => {
  changeDiceType(20)
  highLightButton('D20')
  })
   document.getElementsByName('D99')[0].addEventListener('click', () => {
  changeDiceType(99)
  highLightButton('D99')
  })


}


const enableButton = (button) => {
  document.getElementsByName(button)[0].disabled = false
}

const disableButton = (button) => {
  document.getElementsByName(button)[0].disabled = true

}
const addNewDice = () => {
  
  const circleContainer = document.getElementsByName('dices')[0];
  circleContainer.innerHTML += newDice;
  
  if ( getCurrentNumberOfDices() === MAX_NUMBER_DICES){
  disableButton('addNewDice')
  }
  
}


const getCurrentNumberOfDices = () => {

const dicesContainer = document.querySelector('[data-testid="dices"]')
const diceElements = dicesContainer.querySelectorAll('.circle')
const diceCount = diceElements.length

console.log(diceCount)
return diceCount

}

const deleteAllDices = () => {

 const circleContainer = document.getElementsByName('dices')[0];
  circleContainer.innerHTML = newDice
  enableButton('addNewDice')

}

const rollDice = () => {

 const diceElements = document.getElementsByName('dices')[0].querySelectorAll('.circle');
  
  diceElements.forEach((diceElement) => {
    const newRandomNumber = randomNumber()
    setDisplay(diceElement, newRandomNumber)
  })
}

const setDisplay = (element,value) => {

 element.innerText = value

}


const highLightButton = (button) => {
  unHighlightAllButtons()
  const highlightedButton = document.getElementsByName(button)[0]
  highlightedButton.classList.add('highlighted')
}
const unHighlightAllButtons = () => {
  const allButtons = document.querySelectorAll('.button')
  allButtons.forEach((button) => {
    button.classList.remove('highlighted')
  })
}

const randomNumber = () => {
const randomNumber = Math.floor(Math.random() * diceType) + 1;

return randomNumber

}

const changeDiceType = (number) =>{
diceType = number
}


highLightButton('D10')
setUpButtons()
