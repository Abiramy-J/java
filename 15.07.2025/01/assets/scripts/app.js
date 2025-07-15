const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
  }

function add() {
    const inputNumber = getUserInput();
    const lastResult = currentResult;        
    currentResult += inputNumber; 
    createAndWriteOutput('+', lastResult, inputNumber);    
  }

function subtract() {

    const inputNumber = getUserInput();
    const lastResult = currentResult;        
    currentResult -= inputNumber; 
    createAndWriteOutput('-', lastResult, inputNumber);

}

function multiply() {
    const inputNumber = getUserInput();
    const lastResult = currentResult;        
    currentResult *= inputNumber; 
    createAndWriteOutput('*', lastResult, inputNumber);

}

function divide() {
    const inputNumber = getUserInput();
    const lastResult = currentResult;        
    currentResult /= inputNumber; 
    createAndWriteOutput('/', lastResult, inputNumber);    
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
