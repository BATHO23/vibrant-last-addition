function displayDateTime() {
    const now = new Date();
    const dayOfWeek = [
      "Sunday",
      "Monday",f
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][now.getDay()];
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const dateTimeString = `${dayOfWeek} ${time}`;
    document.getElementById("date-time").textContent = dateTimeString;
  }function convertToFahrenheit
function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  document.getElementById("convert-link").addEventListener("click", function (e) {
    e.preventDefault();
    const tempCelsius = parseFloat(
      document.getElementById("temp-celsius").textContent
    );
    if (e.target.textContent === "Convert to Fahrenheit") {
      const tempFahrenheit = convertToFahrenheit(tempCelsius);
      document.getElementById("temp-celsius").textContent = tempFahrenheit;
      e.target.textContent = "Convert to Celsius";
    } else {
      document.getElementById("temp-celsius").textContent = 17;
      e.target.textContent = "Convert to Fahrenheit";
    }
  });
  
document
.getElementById("city-search-form")
.addEventListener("submit", function (e) {
  e.preventDefault();
  const cityInput = document.getElementById("city-input").value;
  document.getElementById("city-result").textContent = `City: ${cityInput}`;
});

displayDateTime();
