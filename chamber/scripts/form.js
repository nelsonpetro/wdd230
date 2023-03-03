const bposition = document.getElementById("pattern");

bposition.addEventListener("input", (event) => {
  if (bposition.validity.patternMismatch) {
    bposition.setCustomValidity("Please enter at least 7 alphabetical characters, hyphens, or spaces.");
  } else {
    bposition.setCustomValidity("");
  }
});

document.addEventListener("DOMContentLoaded", () => {
    let hiddenField = document.getElementById("appdate");
    hiddenField.value = new Date().toISOString();
});