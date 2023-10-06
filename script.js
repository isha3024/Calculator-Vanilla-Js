let currentInput = document.querySelector(".currentInput");
let answerScreen = document.querySelector(".answerScreen");
let buttons = document.querySelectorAll("button");
let eraseBtn = document.getElementById("erase");
let clearBtn = document.getElementById("clear");
let evaluate = document.getElementById("evaluate");
let realTimeScreenValue = [];

clearBtn.addEventListener("click", () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = 'rgba(150, 150, 150, .87)';
})

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(!button.id.match('erase')){
            //display value on button press
            realTimeScreenValue.push(button.value);
            console.log(realTimeScreenValue);
            currentInput.innerHTML = realTimeScreenValue.join('');

            //evalute answer in real time
            if(button.classList.contains('num_btn')){
                if(eval(realTimeScreenValue.join('')).toString().length > 8){
                    answerScreen.innerHTML = (eval(realTimeScreenValue.join(''))).toFixed(5);
                }
                else{
                    console.log(eval(realTimeScreenValue.join('')).toString().length);
                    answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
                }
            }
        }

        //when erase button is clicked
        if(button.id.match('erase')){
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        //when evaluate button is clicked
        if(button.id.match('evaluate')){
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = '#fff';
        }

        //to prevent undefined error
        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0;
        }

    })
})