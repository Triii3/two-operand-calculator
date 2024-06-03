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
  //  Can only convert 1st operand
  display.value = Number(display.value) * 0.01;
}

function calculate() {
  let expression = display.value;

  let currentOperand = "";
  let numbers = [];
  let operators = [];

  //  Loop to store all operands and operators in order
  for (character in expression) {
    if (isFinite(expression[character]) || expression[character] === ".") {
      //  If the loop detects that the character is still a number, store as an operand

      currentOperand += expression[character];
      console.log(currentOperand);
    } else {
      numbers.push(Number(currentOperand)); //  Push complete operand
      currentOperand = ""; //  Clears String Buffer
      operators.push(expression[character]);
    }
  }
  numbers.push(Number(currentOperand)); // Pushes the last operand
  console.log(numbers);

  // Error handling for expressions with missing operands or multiple operators
  if (numbers.length === 0 || operators.length < 1) {
    alert(
      "Invalid expression. Please provide a valid mathematical expression with numbers and a single operator."
    );
    return;
  }

  //  Create another loop that assumes left-to-right calculations

  let i = 0; // i for index, and to help browse through the list

  while (i < operators.length) {
    const operator = operators[i]; //  Start with left-most operator to calculate the first two operands
    switch (operator) {
      //  Store results at index 0 then remove index 1 using splice method
      //  splice(x,y); Navigates to index x then removes y amount of items inside
      case "+":
        numbers[0] = numbers[0] + numbers[1];
        numbers.splice(1, 1);
        break;
      case "-":
        numbers[0] = numbers[0] - numbers[1];
        numbers.splice(1, 1);
        break;
      case "X":
        numbers[0] = numbers[0] * numbers[1];
        numbers.splice(1, 1);
        break;
      case "/":
        if (numbers[1] === 0) {
          alert("Error. Division by Zero.");
        } else {
          numbers[0] = numbers[0] / numbers[1];
          numbers.splice(1, 1);
        }
        break;
      default:
        console.error("Unsupported operator. Please use +, -, *, or /.");
        return;
    }
    i++;
  }
  result = numbers[0];
  display.value = result;
}
