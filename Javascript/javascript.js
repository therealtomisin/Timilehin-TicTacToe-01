let myCells = document.querySelectorAll('.cell');
let xClass = 'x'
let oClass = 'o'
const xValue = '×'
const oValue = '○'
let gameIsLive = true;
let xIsNext = true;
let mainSection = document.querySelector('.main-tictactoe')
let resetButton = document.querySelector('.reset')
let winnerMessage = document.createElement('span')
const computer = document.querySelector('.computer')


// game functions
changeLetter = (letter) => {
    if (letter === 'x'){
        return xValue
    } else {
        return oValue
    }
}

 displayWinner = (winner) => {
    mainSection.appendChild(winnerMessage)
    winnerMessage.textContent = `${winner} has won!`   
}
updateCell = (e) => {
    classList = e.target.classList
    if (classList[1] === xClass || classList[1] === oClass){
        return;
   }
    if (xIsNext){
        classList.add(xClass)
        gameWin()
    } else {
        classList.add(oClass)
        gameWin()
    }
}
removeEvents = () => {
    myCells.forEach((cell)=>{
        cell.removeEventListener('click', updateCell)
    })
}

gameWin = () => {
    const cell1 = myCells[0].classList[1]
    const cell2 = myCells[1].classList[1]
    const cell3 = myCells[2].classList[1]
    const cell4 = myCells[3].classList[1]
    const cell5 = myCells[4].classList[1]
    const cell6 = myCells[5].classList[1]
    const cell7 = myCells[6].classList[1]
    const cell8 = myCells[7].classList[1]
    const cell9 = myCells[8].classList[1]

    if (cell1 && cell1 === cell2 && cell1 === cell3){
      displayWinner(cell1)
      removeEvents()
    }
    else if (cell1 && cell1 === cell4 && cell1 === cell7){
        displayWinner(cell1)
        removeEvents()
    }
    else if(cell1 && cell1===cell5 && cell1 === cell9){
        displayWinner(cell1)
        removeEvents()
    }
    else if(cell2 && cell2 ===cell5 && cell2 === cell8){
        displayWinner(cell2)
        removeEvents()
    }else if(cell3 && cell3===cell5 && cell3 === cell7){
        displayWinner(cell3)
        removeEvents()
    }else if(cell3 && cell3 === cell6 && cell3 === cell9){
        displayWinner(cell3)
        removeEvents()
    }
    else if (cell4 && cell4 === cell5 && cell4 === cell6){
        displayWinner(cell4)
        removeEvents()
    }else if (cell7 && cell7 === cell8 && cell7 === cell9){
        displayWinner(cell7)
        removeEvents()
    }else if(cell1 && cell2 && cell3 && cell4 && cell5 && cell6 && cell7 && cell8 && cell9){
        mainSection.appendChild(winnerMessage)
        winnerMessage.textContent = `Draw!`
    }
    xIsNext = !xIsNext
    }
    clearCells = () => {
        myCells.forEach((cell)=>{
            cell.classList.remove(xClass);
            cell.classList.remove(oClass)
        })
        winnerMessage.remove()
        xIsNext = true;
        myCells.forEach((cell)=>{
            cell.addEventListener('click', updateCell)
        })
    }
    


//event listeners
myCells.forEach((cell)=>{
    cell.addEventListener('click', updateCell)
})

resetButton.addEventListener('click', clearCells)


