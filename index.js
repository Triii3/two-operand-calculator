//  CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  //    '_' = '_' + 'input'
}

function removeLastItem() {
  display.value = display.value.slice(0, -1);
  //   -1 excludes last string character
}

function clearDisplay() {
  display.value = "";
  console.clear();
}

function convertToPercentage() {
  //  Can't convert 2nd Operand yet
  display.value = Number(display.value) * 0.01;
}

function calculate() {
  let expression = display.value;

  let currentOperand = "";
  let numbers = [];
  let operators = [];

  for (character in expression) {
    if (isFinite(expression[character]) || expression[character] === ".") {
      //  If the loop detects that the character is still a number, store as an operand

      currentOperand += expression[character];
    } else {
      //  Else, if it detects an operator
      numbers.push(Number(currentOperand)); //  Push complete operand
      currentOperand = ""; //  Clears String Buffer
      operators.push(expression[character]);
    }
  }
  numbers.push(Number(currentOperand)); // Pushes the last operand

  // Error handling for expressions with missing operands or multiple operators
  if (numbers.length === 0 || operators.length !== 1) {
    alert(
      "Invalid expression. Please provide a valid mathematical expression with numbers and a single operator."
    );
    return;
  }

  // Perform the calculation based on the first operator (assuming left-to-right evaluation)
  const operator = operators[0];
  let result;
  switch (operator) {
    case "+":
      result = numbers[0] + numbers[1];
      break;
    case "-":
      result = numbers[0] - numbers[1];
      break;
    case "X":
      result = numbers[0] * numbers[1];
      break;
    case "/":
      if (numbers[1] === 0) {
        alert("Error. Division by Zero.");
      } else {
        result = numbers[0] / numbers[1];
      }
      break;
    default:
      console.error("Unsupported operator. Please use +, -, *, or /.");
      return;
  }

  display.value = result;
}
