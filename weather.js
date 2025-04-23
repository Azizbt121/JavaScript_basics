var cities = document.querySelectorAll(".options button");

cities.forEach(function(button) {
    button.onclick = function() {
        alert("alert!!!!!");
    };
});

var btn=document.getElementById("acceptBtn")


btn.addEventListener("click", function() {
    document.getElementById("cookieFooter").style.display = "none";
});


function toCelsius(f) {
    return Math.round(((f - 32.0) * 5.0 / 9.0));
}

function toFahrenheit(c) {
    return Math.round(((c * 9.0 / 5.0) + 32.0));
}

var tempSelector = document.querySelector("#tempe");


tempSelector.addEventListener("change", function () {
    let selectedOption = tempSelector.value;
    let tempContainers = document.querySelectorAll("#todayValues, #tomorrowValues, #fridayValues, #saturdayValues");

    tempContainers.forEach(function (container) {
        let maxTemp = parseInt(container.querySelector(".max").textContent);
        let minTemp = parseInt(container.querySelector(".min").textContent);

        if (selectedOption == "celsius") {
            container.querySelector(".max").textContent = toCelsius(maxTemp) + "°C";
            container.querySelector(".min").textContent = toCelsius(minTemp) + "°C";
        } else {
            container.querySelector(".max").textContent = toFahrenheit(maxTemp) + "°C";
            container.querySelector(".min").textContent = toFahrenheit(minTemp) + "°C";
        }
    });
});