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
let runningTotal = 0;

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
    runningTotal = 0;
    console.clear();
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
    console.log("Running Total",runningTotal)
    if (runningTotal > 1 && currentNumber !== "") {
        lastNumber = 0;
        operate(currentOperation,currentNumber,lastNumber);
    }else if (lastNumber !== 0){
        operate(currentOperation,currentNumber,lastNumber);  
    }
    
})

const operate = (opp,a,b) => {
    let aToInt = parseInt(a);
    let bToInt = parseInt(b);
    if (opp == "+"){
        runningTotal += addition(aToInt,bToInt);
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
    console.log(runningTotal);
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