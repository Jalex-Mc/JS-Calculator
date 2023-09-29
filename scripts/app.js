const operators = ['( )', '%', '÷', 'x', '-', '+']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const alterers = ['AC', "=", '&lt;-']
const topBar = ['√ ', 'π', '^', '!']

// add history
// add pulldown that shows RAD sin cos tan INV e In log. Put those values into an array
// add pulldown to show history
// add dark and light mode, after stylings done. Can be a symbol in the top right where the hamburger menu is
// css minimum sizes and max sizes, black background?
const numpad = document.querySelector('.numpad')
const input = document.getElementById("input-field");
input.textContent = ""
let inputField = []
let inputValues = [] // this is the list of what's been selected and is on screen
let calculation = []
let history = []
let duplicateEquals = []
const answerField = document.getElementById('answer')
let calculatedContent = 5
answerField.textContent = calculatedContent
// turn the operator and alterer events into their own function, so when x or equal is pressed
// what will happen will be in these functions.



function buttonPressed(event) {

    // Gets number pressed
    for (let num = 0; num < 10; num++) {
        if (event.target.textContent == num) {
            inputField.push(num)
        }
    }

    //gets operator pressed
    for (let op = 0; op < operators.length; op++) {
        if (event.target.textContent == operators[op]) {
            let operator = operators[op]
            if (operator == "( )" && inputField.slice(-1) == "(") {
                inputField.push(")")
            } else if (inputField.slice(-1) == ")") {
                inputField.push(")")
            } else if (operator == "( )"){
                inputField.push("(")
            }
            
            // checks if an operator was entered last.
            if (operator == "(" || operator == ")") {
                break;
            }
            if (inputField.length > 0 && inputField.slice(-1).includes(operator)) {
                console.log("error")
            } else {
                inputField.push(operator)
                inputValues.push(parseInt(input.textContent))
                inputValues.push(operator)
            }
            }
    }
    //gets alterers pressed
    for (let alt = 0; alt < alterers.length; alt++) {
        if (event.target.textContent == alterers[alt]) {
            let alterer = alterers[alt]
            inputField.push(alterer)
        } if (event.target.textContent == 'AC') {
            input.textContent = ''
        }
    }
    // getting values to put on the screen
    input.textContent = null;
    for (let item = 0; item < inputField.length; item++) {
        let value = inputField[item].toString()
        input.textContent = input.textContent + value; 
    }
    console.log(input.textContent)
    // console.log(calculation)
    // console.log(inputField)

    // calculating if equals is pushed
    if (event.target.textContent == "=") {
        let removeEquals = inputField.slice(0, -1) // removes equals
        // let removeEquals = inputField.replace('=', '')
        let joinedInput = removeEquals.join(''); //combines array with no separator
        console.log(removeEquals);
        console.log(eval(joinedInput));
        duplicateEquals.push(eval(joinedInput))
        // input.textContent = joinedInput.replace('=', '');
        // console.log(input.textContent)
        // console.log(eval(removeEquals))
        // console.log(joinedInput)
        //replace text in input box
        console.log(inputValues)
    }

}

// function History() {
    
// }

// need to remove equals from inputField, then have a second value that is displayed under
// the input field

// font size decreases 8 times.
// after 9, start decreasing the font. Can do a for loop that checks the amount of 
// of characters. Maybe using a forloop if characters is more than 9, then another if for loop
// that cycles through text sizes. So first have an array of sizes, than an if check if the characters
// are more than 9, then a for loop inside of that that will check the font size, and then multiple if
// statements that will check both the size and character ammount to reduce it.

numpad.addEventListener('click', buttonPressed);

