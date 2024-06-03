# Web Calculator using Javascript

This is in acknowledgment of the tutorial by Bro Code on [Youtube](https://www.youtube.com/watch?v=I5kj-YsmWjM) wherein we build a functional calculator using Javascript.



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- Interact with the various button elements in the application
- Perform basic mathematical operations with the calculator


### Screenshot

![image](https://github.com/Triii3/two-operand-calculator/assets/119496362/90ecf0c1-5359-4880-8ef5-1504ee7c7529)


### Links

- Live Site URL: [Live Site URL](https://triii3.github.io/two-operand-calculator/)


  
## My process

### Built with

- Semantic HTML5 markup
- CSS3
- Javascript
- Flexbox
- Grid Layout


### What I learned

According to the tutorial, the *eval()* function is *NOT ADVISABLE* when it comes to actual applications as it is a security risk and is only used for learning purposes. Based on that recommendation, I opted to develop my own javascript calculation function that does not rely on the eval() function. 


```css
#keys {
  display: grid;
  grid-template-columns: auto auto auto auto; /*  set number of columns to 4  */
  ...
}
```

I mostly use flexbox when I deal with any styling for the webpage so using the Grid Layout was an experience. I also got to learn how to set the display of each element into 4 columns.


```css
button:active {
  background-color: hsl(0, 0%, 88%);
}
```

I was only familiar with the ':hover' pseudo-class for buttons and only found out that the ':active' pseudo-class was for styling when interacting with the buttons.


```html
<input id="display" readonly />
```

The readonly attribute won't let you be able to interact with the input element. But you can select it. 

```html
<button onclick="clearDisplay()" class="operator-btn">AC</button>
```

The onclick attribute lets the element call the respective javascript function/expression.


```javascript
const display = document.getElementById("display");
```

This line is how you store html elements in a javascript variable.


```javascript
  for (character in expression) {
    if (isFinite(expression[character]) || expression[character] === ".") {
      //  If the loop detects that the character is still a number, store as an operand

      currentOperand += expression[character];
    }
```

When looping a string in javascript and you try to access it as character, it onyl returns the index of that string and not the value. To access the value, I had to use Bracket Notation.



### Continued development

- As of now, the calculator can only accept two operands. I would like to continue developing the web app wherein it can accept more than two operands.
- The percent (%) which converts the number into 0.01 of its value can only perform it on the first operand. I would like to improve on this delimitation where it can also convert other operands.
- The display can only contain a few characters before overflowing. I would like to continue developing this element so that it will scroll sideways and not hide the overflow.

### Useful resources

- Bro Code on [Youtube](https://www.youtube.com/watch?v=I5kj-YsmWjM) is where I got the tutorial for developing the javascript calculator. 


## Author

- GitHub Profile - [Triii](https://github.com/Triii3)
