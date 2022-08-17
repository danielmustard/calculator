//getting node list so we can select each button

//getting all the buttons on the page
const buttons = document.querySelectorAll('button')
buttonsSelected = []

let currentToatal = 0; 

const inputBox = document.querySelector('input');

//Adding event listener for each button
buttons.forEach(button => {
    button.addEventListener('click', () =>{
        inputBox.value += button.id

        if (button.id == " sum"){
            sumArray = inputBox.value.split(" ");
            console.log()
            calcs(sumArray);
        }

        if(button.id == "ac") clearInputs();
    });
    
});

const clearInputs = () => { 
    inputBox.value = ""
    buttonsSelected = [];
    console.log(buttonsSelected);
};


calcs = (array) => {
    
}

//get the index that contains the operator then preform the action on the action between the one lower and one higher in the array
//array.reduce where item is an operator and then do action between one lower and one upper and then add to running total