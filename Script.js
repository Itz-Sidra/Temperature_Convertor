const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");

let temp;

function convert() {
    if (toFahrenheit.checked) {
        // Celsius to Fahrenheit conversion
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    } else if (toCelcius.checked) { // Changed to check for 'toCelcius'
        // Fahrenheit to Celsius conversion
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
}
