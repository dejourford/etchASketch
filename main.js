document.addEventListener('DOMContentLoaded', function(){
    console.log('hello')
    
    // add function to button that selects board size //
    const sizeButton = document.querySelector('#sizeButton');
    sizeButton.addEventListener('click', () => {
        prompt('What size would you like the board?');
    });
    
    



})