// to do
// error catching
// set up the calc functions to work with the input. Go systematically to fix each one.
// set pull down of top row
// set up top row operations correctly
// re-figure out the parentheses's logic
// fix the stylings for input area.

const input = document.getElementById("input-field");
const answer = document.getElementById("answer");
const continuedAnswers = [];
const operators = ['(', ')', '%', '÷', 'x', '-', '+'];
const history = [];
let isClickedAgain = false;

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
    displayedContent = displayedContent.replace('^', '**')
    console.log(displayedContent)
    answer.textContent = eval(displayedContent).toString()
    if (!isClickedAgain) {
        history.push(answer.textContent)
        isClickedAgain = true
    }
    console.log(displayedContent)
    console.log(eval(displayedContent))
    console.log(history)
}

function continuousAnswerUpdate() {
    for (let item = 0; item < operators.length; item++) {
        if (input.textContent.includes(item)) {
            answerCalculated()
        }
    }
    //get an error in the console, but at least it works, you can use the includes function with the caret in an array apparently.
    // couldn't find out why, if I included it above, it would break the operation and would execute answerCalculated for any button press.
    if (input.textContent.includes('^')) {
        answerCalculated()
    }
    return
}

function setDisplay(clicked) {
    input.textContent += clicked.toString();
    continuousAnswerUpdate();
}
    // make the string into a list?
    // I think use includes as it checks if the array has the item
    // Make a for loop for the operators array, and use includes function to see if it's
    // in the string, if so, console log yes or no. 

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
        answer.textContent = "3.141592653589793"
    } else {
    eval(displayedContent + "3.141592653589793")
    }
}

function exponent() {
    if (!input.textContent) {
        return
    } else {
        setDisplay("^")
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
    answer.textContent = ""
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
    answer.textContent = answerCalculated()**10 
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
