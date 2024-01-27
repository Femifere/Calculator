# Calculator
1. Create a simple calculator design using HTML and CSS.
    1. **HTML:**
        1. Include a display area that shows the user's input.
        2. Add number buttons from 0 to 9.
        3. Include Clear and Delete buttons.
        4. Add symbols for basic arithmetic operations such as +, -, /, *, %.
        5. Include a decimal point button for decimal operations.
        6. Add an equal sign button to perform the calculation.
        7. Assign all buttons to the same class.
        8. Add a button at the top right corner of the webpage for switching between dark and light modes.
    2. **CSS:**
        1. Center the calculator on the page.
        2. Use flexbox for the container to ensure responsiveness.
        3. Use grid layout to align each button item within the calculator.
        4. Apply click and hover animations to all buttons.
2. Implement JavaScript functions to add additional features.
    1. Display Function:
        1. Display the clicked button's character in the top display area.
        2. Allow multiple clicks on different buttons.
        3. Prevent consecutive symbols from being added.
        4. Prevent the equal sign from being pressed immediately after a symbol.
        5. Enable arithmetic operations with more than two numbers.
        6. Hide the equal sign on the display.
        7. Save the user's entered equation in a variable when the equal sign button is clicked.
        8. Retrieve and display the answer for the equation from the calculate function.
    2. Calculate Function:
        1. Retrieve the equation from the Display function, which was stored in a variable.
        2. Traverse through the equation using a for loop.
        3. Identify and store consecutive digits as integers in an array.
        4. Store groups of digits with a decimal point in a float array.
        5. Store symbols (excluding ".") in a character array.
        6. Perform the calculation by processing the first digit, followed by the symbol, and then the other digits.
        7. Store the answer in a variable and pass it to the Display function.
        8. Reset all arrays at the end of the function.
    3. Modes Function:
        1. Invert the entire webpage using the style function when the button at the top right corner is clicked.
3. Implement error handling:
    1. Handle syntax and arithmetic errors.
    2. Display error messages in the display function.
