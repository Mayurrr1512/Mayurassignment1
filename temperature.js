function convertTemp() {
  const value = parseFloat(document.getElementById("input-value").value);
  const unit = document.getElementById("unit").value;

  const celsiusOutput = document.getElementById("celsius-output");
  const fahrenheitOutput = document.getElementById("fahrenheit-output");
  const kelvinOutput = document.getElementById("kelvin-output");

  if (isNaN(value)) {
    celsiusOutput.textContent = fahrenheitOutput.textContent = kelvinOutput.textContent = "Please enter a valid number.";
    return;
  }

  let c, f, k;

  switch (unit) {
    case "celsius":
      c = value;
      f = (c * 9/5) + 32;
      k = c + 273.15;
      break;
    case "fahrenheit":
      f = value;
      c = (f - 32) * 5/9;
      k = (f - 32) * 5/9 + 273.15;
      break;
    case "kelvin":
      k = value;
      c = k - 273.15;
      f = (k - 273.15) * 9/5 + 32;
      break;
  }

  celsiusOutput.textContent = `Celsius: ${c.toFixed(2)} °C`;
  fahrenheitOutput.textContent = `Fahrenheit: ${f.toFixed(2)} °F`;
  kelvinOutput.textContent = `Kelvin: ${k.toFixed(2)} K`;
}

// Footer setup
window.onload = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer-text").innerHTML = `© ${year} Mayur Harshadbhai Patel`;
};
