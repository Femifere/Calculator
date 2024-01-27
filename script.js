const digits = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
const symbols = new Array('%', '/', '*', '-', '+', '.', '(', ')');
const action = new Array('C', '+/-', '=');
var numCount = 0;
var symbolEntered = false;
var parencount = 0;

document.addEventListener('keydown', function (event) {
    var keyPressed = event.key;
    if (digits.includes(parseInt(keyPressed, 10)) || symbols.includes(keyPressed) || action.includes(keyPressed)) {
        display('button-' + keyPressed);
    }
});

function display(buttonId) {
    var btnContent = document.getElementById(buttonId).innerHTML;
    var btn = document.getElementById(buttonId);
    buttonClicked = true;
    var equationElement = document.getElementById("equ");

    if (document.getElementById('button-equals').style.backgroundColor == 'var(--secondary-color1)') {
        equationElement.textContent = "";
        document.getElementById('button-equals').style.backgroundColor = 'var(--secondary-color2)';
    } else {
        console.log('The button was not clicked yet.');
    }

    if (digits.includes(parseInt(btnContent, 10))) {
        numCount++;
        symbolEntered = false;
        if (numCount <= 3) {
            equationElement.textContent += btnContent;
        } else {
            alert('Maximum Digits Reached');
        }
    } else if (symbols.includes(btnContent)) {
        if (!symbolEntered) {
            numCount = 0;
            symbolEntered = true;
            if (btnContent !== '=' && btnContent !== 'C') {
                equationElement.textContent += btnContent;
            }
        } else {
            alert('Symbol Already Entered');
        }
    } else if (buttonId == 'clear') {
        var currentEquation = equationElement.textContent;
        equationElement.textContent = currentEquation.slice(0, -1);
    } else if (btnContent == '()') {
        var parentheses1 = '(';
        var parentheses2 = ')';
        
        if (parencount % 2 === 0) {
            numCount++;
            parencount++;
            symbolEntered = false;
            equationElement.textContent += parentheses1;
        } else {
            numCount--;
            parencount++;
            equationElement.textContent += parentheses2;
        }
    } else {
        numCount = 0;
        symbolEntered = false;
        if (equationElement.textContent.includes('=')) {
            equationElement.textContent = btnContent;
        } else {
            if (btnContent !== '=' && btnContent !== 'C') {
                equationElement.textContent += btnContent;
            }
        }
    }

    if (btnContent === '=') {
        var equation = equationElement.textContent;
        document.getElementById('button-equals').style.backgroundColor = 'var(--secondary-color1)';

        try {
            var result = eval(equation);
            equationElement.textContent = result;
            equation = "";
            result = null;
        } catch (error) {
            alert('Error in the expression');
            equationElement.textContent = '';
        }
    } else if (btnContent === 'C') {
        equationElement.textContent = "";
    }
}

function modeChange(){
    var mode = document.getElementById('modePic');
        if (mode.src.endsWith("Day.png")) {
            mode.src = "images/Night.png";
        } else {
            mode.src = "images/Day.png";
        }
    document.body.classList.toggle('dark-mode');
}





