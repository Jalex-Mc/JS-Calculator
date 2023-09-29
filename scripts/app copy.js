const operators = ['( )', '%', '÷', 'x', '-', '+']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const alterers = ['AC', "=", '&lt;-']
const topBar = ['√ ', 'π', '^', '!']

// add history
// add pulldown that shows RAD sin cos tan INV e In log. Put those values into an array
// add pulldown to show history
// add dark and light mode, after stylings done. Can be a symbol in the top right where the hamburger menu is
// css minimum sizes and max sizes, black background?

const input = document.getElementById("input-field");
input.textContent = ""
let inputField = []
let inputValues = [] // inputField and operators and everything added together.
let calculation = []
let history = []

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
            if (operator == "( )") {
                if (inputField.slice(-1) == "(") {
                    inputField.push("(")
                } else if (inputField.slice(-1) == ")") {
                    inputField.push(")")
                } else {
                    inputField.push("(")
                }
            }
            inputField.push(operator)

            if (inputField.slice(-1) == "%") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push("%")
            }
            if (inputField.slice(-1) == "÷") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push("÷")
            }
            if (inputField.slice(-1) == "x") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push("x")
            }
            if (inputField.slice(-1) == "-") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push("-")
            }
            if (inputField.slice(-1) == "+") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push("+")
            }
            if (inputField.slice(-1) == ".") {
                console.log("error")
            } else {
                inputValues.push(parseInt(input.textContent))
                inputValues.push(".")
            }
        }
    }
    //gets alterers pressed
    for (let alt = 0; alt < alterers.length; alt++) {
        if (event.target.textContent == alterers[alt]) {
            let alterer = alterers[alt]
            inputField.push(alterer)
        }
    }
    // getting values to put on the screen
    input.textContent = null;
    for (let item = 0; item < inputField.length; item++) {
        let value = inputField[item].toString()
        input.textContent = input.textContent + value; 
}
    // console.log(input.textContent)
    // console.log(calculation)
    console.log(inputValues)
}

numpad.addEventListener('click', buttonPressed);
