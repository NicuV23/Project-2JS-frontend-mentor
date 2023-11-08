const result = document.getElementById('result');
const keys = document.getElementsByClassName('btn');
const deleteButton = document.getElementsByClassName('del')[0];
const equalButton = document.getElementsByClassName('equal')[0];
const resetButton = document.getElementsByClassName('reset')[0];
const changeTheme = document.getElementsByClassName('interface')[0];
const styleSheet = document.getElementById('stylesheet');
const minus =document.getElementById('minus')
const plus =document.getElementById('plus')
const multiply =document.getElementById('multiply')
const point =document.getElementById('point')
const divide =document.getElementById('divide')


changeTheme.addEventListener('click', function() {
    if (styleSheet.getAttribute('href') === 'theme2.css') {
        styleSheet.setAttribute('href', 'theme3.css');
    } else if (styleSheet.getAttribute('href') === 'theme3.css') {
        styleSheet.setAttribute('href', 'style.css');
    } else {
        styleSheet.setAttribute('href', 'theme2.css');
    }
});

let lastKeyPressed = '';

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function() {
        if (keys[i].innerText === '-') {
            if (lastKeyPressed === '-') {
                return; 
            }
        }
        if (keys[i].innerText === '*') {
            if (lastKeyPressed === '*') {
                return; 
            }
        }
        if (keys[i].innerText === '+') {
            if (lastKeyPressed === '+') {
                return; 
            }
        }
        if (keys[i].innerText === '/') {
            if (lastKeyPressed === '/') {
                return; 
            }
        }
        if (keys[i].innerText === '.') {
            if (lastKeyPressed === '.') {
                return; 
            }
        }
        
        lastKeyPressed = keys[i].innerText;
        result.innerText += keys[i].innerText;
        if (result.innerText.length > 25) {
            result.innerText = result.innerText.slice(-25);
        }
    });
}


resetButton.addEventListener('click', function() {
    result.innerText = '';
});

deleteButton.addEventListener('click', function() {
    result.innerText = result.innerText.slice(0, -1);
});

equalButton.addEventListener('click', function() {
        result.innerText = eval(result.innerText);
});
