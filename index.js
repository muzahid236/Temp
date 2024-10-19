// const mybox = document.getElementById('mybox');
// const mybtn = document.getElementById('mybtn');

// mybtn.addEventListener("click", event =>{
//     mybox.style.backgroundColor = "tomato";
//     mybox.textContent = "OUCH! 🤕";
    
// });

// mybtn.addEventListener("mouseover", event =>{
//     mybox.style.backgroundColor = "yellow";
//     mybox.textContent = "Don't do it 😲";
//     });

//     mybtn.addEventListener("mouseout", event =>{
//         mybox.style.backgroundColor = "lightgreen";
//         mybox.textContent = "Click Me 😀";
//         });
const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById('result');
let temp;

function convert(){
    if(toFahrenheit.checked){
        temp =Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelsius.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"; 
    }
    else{
        result.textContent = "Select a unit";
    }
}