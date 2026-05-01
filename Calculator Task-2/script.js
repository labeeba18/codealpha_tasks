const display = document.getElementById("display");

// Add value
function append(value) {
  display.value += value;
}

// Clear
function clearDisplay() {
  display.value = "";
}

// Calculate
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support (BONUS)
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    clearDisplay();
  }
});
