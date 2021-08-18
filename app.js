// Pin Generator handler 
let pinDisplay = document.querySelector('.pin-generator .form-control');
document.querySelector('.generate-btn').addEventListener('click', function () {
    let pin = Math.floor(Math.random() * 9999 + 1);
    if (pin < 1000) {
        pin += Math.floor(Math.random * 9);
        pinDisplay.value = pin;
    } else {
        pinDisplay.value = pin;
    }

})

// Pin matcher handler 
const inputBtn = document.getElementsByClassName('button');
let inputDisplay = document.querySelector('.input-section .form-control');

for (let i = 0; i < inputBtn.length; i++) {
    let element = inputBtn[i];
    element.addEventListener('click', function (event) {
        inputDisplay.value += event.target.innerText;
    })

}

// clear handler 
document.querySelector('.clearInput').addEventListener('click', function () {
    inputDisplay.value = '';
})

// Backspace handler 
document.querySelector('.backspace').addEventListener('click', function() {
    var total = inputDisplay.value;
    inputDisplay.value = total.substr(0, total.length - 1);
})

// Comparisons handler 
const matched = document.getElementById('matched');
const tryInput = document.getElementById('try-number');
let tryNumber = parseInt(tryInput.innerText);
const disMatched = document.getElementById('dis-mathched');
document.querySelector('.submit-btn').addEventListener('click', function () {
    if (pinDisplay.value == inputDisplay.value) {
        matched.style.display = 'none';
        disMatched.style.display = 'block';
        console.log('match' + pinDisplay.value, inputDisplay.value);
    } else {
        matched.style.display = 'block';
        disMatched.style.display = 'none';
        console.log('not matched' + pinDisplay.value, inputDisplay.value);

        // Try number 
        tryNumber -= 1;
        if(tryNumber > 0){
            tryInput.innerText = tryNumber;
        }else{
            tryInput.innerText = tryNumber;
            alert('Max attempts done.');
        }
        

    }
})

// on load handler
window.onload = function(){
    inputDisplay.value = '';
    pinDisplay.value = '';
}