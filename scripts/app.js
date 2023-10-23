// to do
// error catching
// use an array to store the answers, if an operator is pressed, it
// will automatically show the calculation in the answer field
// so once an operator is pressed, it will recalculate after each input.
// create a function to check if an operator was pressed in setDisplay, continuesly run?
// using an operators list.
// use the list of operators to check 
// so we can keep the calculations while adding to the input.
// set pull down of top row
// set up top row operations correctly
// re-figure out the parentheses's logic
// fix the stylings for input area.

const input = document.getElementById("input-field");
const answer = document.getElementById("answer");
const continuedAnswers = [];
const operators = ['(', ')', '%', '÷', 'x', '-', '+'];

function setDisplay(clicked) {
    input.textContent += clicked.toString();
}

// checks the input to see if an open parentheses was added or not.
// check if input has parenthesis and if it does, which one was last.
// then checks if the opening parenthese is after or before the closing, and if it's after, and there's 
// a number as the last item in the string, it will add a closing parenthesis, else, it will add an opening

function setParenthesis() {
    let inputValue = input.textContent 
    if (!inputValue) {
        setDisplay("(")
    } else if (inputValue.lastIndexOf("(") > inputValue.lastIndexOf(")") && inputValue.charAt(inputValue.length-1) == !isNaN(inputValue.charAt(inputValue.length-1))) {
        setDisplay(")")
    } else {
        setDisplay("(")
    }
}

function answerCalculated() {
    let displayedContent = input.textContent
    displayedContent = displayedContent.replace('&#xF7', '/')
    displayedContent = displayedContent.replace('x', '*')
    answer.textContent = eval(displayedContent).toString()
    console.log(displayedContent)
    console.log(eval(displayedContent))
}

function answerDisplayed(calculation) {
    answer.textContent = calculation
}

function backspace() {
    input.textContent = input.textContent.slice(0, -1)
}

// JavaScript has built in Math functions.
// couldn't figure out how the android calculator app had the sqrRoot symbol in the display
// and could still update/get a value when adding more numbers to the input 
function squareRoot() {
    displayedContent = input.textContent
    if (!displayedContent) {
        input.textContent = "NaN";
    } else {
        answer.textContent = eval(Math.sqrt(displayedContent))
    }
}

function pie() {
    displayedContent = input.textContent
    if (!displayedContent) {
        input.textContent = "3.141592653589793"
    } else {
    eval(Math.sqrt(displayedContent))
    }
}

// exponent is ** and can just work by itself. so if ^ is pressed, add ** to contents

function factorial() {
    if (!input.textContent) {
        return input.textContent = "Format error"
    } else {
        num = input.textContent;
    }
    // the above checks if the string is empty, then it will break the function, since 0 is considered
    // falsy as well and 0 is a possible value of a factorial
    let num = answerCalculated(); // calculates the current data in the input so we can 
    // calculate the factorial based on the sum and not have any errors if there is more than
    // just numbers in the data.    
    let answer = 1;
    if (num == 0 || num == 1){
      return answer;
    }
    else if(num > 1){
      for(let i = num; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
    else{
      return input.textContent = "Format error"
    }  
}

function ac() {
    input.textContent = ""
}

// get the display value, and then multiple that by sin, and have an entered number for sin
function sin(num) {
    return answer.textContent = Math.sin(num)
}
// need to get the input value and add the sin, cos, tan, to a list so we can close the values inside the
// parenthesis
function cos() {
    answer.textContent = Math.cos(num)
}

function tan() {
    answer.textContent = Math.tan(num)
}

// e stands for exponent of 10, but I don't like single character functions or variables
function eten() {
    // calculated answer**10
    return answer.textContent = answerCalculated()**10 
}
// need to figure out how to keep updating the answer when inputing numbers after e is click
// for below, repeat the calculations if one of these is clicked. Maybe have a truth or false variable inside
// the calculation function that will check if these buttons are clicked.

//natural logarithm. If numbers before it, then it will be multiplied by those numbers
function naturalLog(num) {
    answer.textContent = Math.log(num) * answerCalculated()
}

// logarithm with a base of ten
function alog() {
    answer.textContent = Math.log10(num) * answerCalculated()
}
