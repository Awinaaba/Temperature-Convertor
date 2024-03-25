function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unitSelect = document.getElementById("unitSelect").value;
    var convertedTemperature;
    if (unitSelect === "celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById("result").innerHTML = convertedTemperature.toFixed(2) + " °F";
    } else if (unitSelect === "fahrenheit") {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById("result").innerHTML = convertedTemperature.toFixed(2) + " °C";
    }
}
