let myCells = document.querySelectorAll('.cell');
console.log(myCells)
let xClass = 'x'
let oClass = 'o'
const xValue = '×'
const oValue = '○'
let xIsNext = true;


// game functions
changeLetter = (letter) => {
    if (letter === 'x'){
        return xValue
    } else {
        return oValue
    }
}
updateCell = (e) => {
    classList = e.target.classList
    if (classList[1] === xValue || classList[1] === oValue){
        return;
   }
    if (xIsNext){
        classList.add(xClass)
        xIsNext = !xIsNext
        gameWin()
    } else {
        classList.add(oClass)
        xIsNext = !xIsNext
        gameWin()
    }
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
        console.log(changeLetter(cell1))
    }
}


//event listeners
myCells.forEach((cell)=>{
    cell.addEventListener('click', updateCell)
})

