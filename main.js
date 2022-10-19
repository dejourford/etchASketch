let board = document.querySelector('.board')
let selectSizeButton = document.querySelector('#sizeButton')
let message = document.querySelector('#message')
let color = 'black'
let click = false

function getSize(){
    let userChoice = prompt('What size board would you like?')
    if (userChoice == ""){
        message.innerHTML = 'Please enter a number.'
    }
    else if(userChoice < 5 || userChoice > 100){
        message.innerHTML = 'Please enter a number between 5 and 100!'
    }
    else{
        message.innerHTML = 'Enjoy the etchASketch!'
        return userChoice
    }

}

function createBoard(size){
    size = getSize()
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let numDivs =  size * size
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div')
        div.addEventListener('mouseover', inkColor)
        board.insertAdjacentElement('beforeend', div)
    }

    }


selectSizeButton.addEventListener('click', function(){
    createBoard()

})

function setColor(colorChoice){
    color = colorChoice
}

function inkColor(){
    if (click){

        if (color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if (color == 'reset'){
            this.style.backgroundColor = 'white'
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }
}

function resetBoard(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}



