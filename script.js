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

let total = 0;

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
    total = 0;
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
    if (total !== 0){
        lastNumber = total;
    }
    operate(currentOperation,currentNumber,lastNumber);
    inputBox.value = total;
})

const operate = (opp,a,b) => {
    let aToInt = parseInt(a);
    let bToInt = parseInt(b);
    if (opp == "+"){
        addition(aToInt,bToInt);
    }
    if (opp == "-"){
        subtraction(aToInt,bToInt);
    }
    if (opp == "*"){
        multiply(aToInt,bToInt);
    }
    if (opp == "/"){
        divide(aToInt,bToInt);
    }
}

//All Calculator Operations 
const addition = (a,b) => {
    total = a+b;
    return a+b;
}

const subtraction = (a,b) => {
    total = b-a;
    return b - a;
}

const multiply = (a,b) => {
    total = a*b;
    return a * b;
}

const divide = (a,b) => {
    total = b / a; 
    return b / a;
}