
let diceType = 10

const setUpButtons = () => {

  document.getElementsByName('rollDice')[0].addEventListener('click', () => {
  rollDice()
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

const rollDice = () => {

let newRandomNumber = randomNumber() 
setDisplay(newRandomNumber)

}

const setDisplay = (value) => {

document.getElementsByName('display')[0].innerText = value

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