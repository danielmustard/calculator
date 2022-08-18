//getting node list so we can select each button
//getting all the buttons on the page
const buttons = document.querySelectorAll('button')
const inputBox = document.querySelector('input');

const clearButton = document.querySelector('#ac')
const operator = document.querySelectorAll('.operator');

const sumButton = document.querySelector('.sum')

let currentNumber = "";
let lastNumber = "";

let currentOperation = "";

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        handleClick(button.id);                
    })
});


const handleClick = (number) =>{
    currentNumber += number;
    inputBox.value = currentNumber;
}

//clearButton listener + Function
clearButton.addEventListener('click', () => {
    inputBox.value = "";
    currentNumber = "";
    lastNumber = "";
})

operator.forEach(opp => {
    opp.addEventListener('click', (e) =>{
        handleOperator(opp.textContent);
    })
});

const handleOperator = (theop) =>{
    lastNumber = currentNumber;
    currentNumber = "";
    currentOperation = theop
    inputBox.value = ""
}

sumButton.addEventListener('click', ()=>{
    operate(currentOperation,currentNumber,lastNumber);  
})

const operate = (opp,a,b) => {
    let aToInt = parseInt(a);
    let bToInt = parseInt(b);
    if (opp == "+"){
        console.log(addition(aToInt,bToInt));
    }
    if (opp == "-"){
        console.log(subtraction(aToInt,bToInt));
    }
    if (opp == "*"){
        console.log(multiply(aToInt,bToInt));
    }
    if (opp == "/"){
        console.log(divide(aToInt,bToInt));
    }
}



//All Calculator Operations 
const addition = (a,b) => {
    return a+b;
}

const subtraction = (a,b) => {
    return b - a;
}

const multiply = (a,b) => {
    return a * b;
}

const divide = (a,b) => { 
    return b / a;
}