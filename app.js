const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'aqua']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
//   вертуально создали дивы с калсами (square) 6 7;

square.addEventListener('mouseover',() => 
setColor(square))


square.addEventListener('mouseleave',() => 
removeColor(square))


board.append(square)
}

function setColor(elment) {
    const color = getRandomColor()
    elment.style.backgroundColor = color 
    elment.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(elment) {
    elment.style.backgroundColor = '#fac400'
    elment.style.boxShadow = `0 0 2px #fac400`
}


function getRandomColor() {
   const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}