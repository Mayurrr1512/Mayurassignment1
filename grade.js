function MarkToGrade() {
  const input = document.getElementById("mark-input-box").value.trim();
  const message = document.getElementById("validation-message");
  const result = document.getElementById("grade-result");

  message.textContent = "";
  result.textContent = "";

  if (input === "") {
    message.textContent = "Please enter a mark.";
    return;
  }

  const mark = parseFloat(input);

  if (isNaN(mark)) {
    message.textContent = "Mark must be a number.";
    return;
  }

  if (mark < 0) {
    message.textContent = "Mark cannot be negative.";
    return;
  }

  if (mark > 100) {
    message.textContent = "Mark cannot be greater than 100.";
    return;
  }

  // Show grade
  if (mark >= 90) result.textContent = "Grade: A";
  else if (mark >= 80) result.textContent = "Grade: B";
  else if (mark >= 70) result.textContent = "Grade: C";
  else if (mark >= 60) result.textContent = "Grade: D";
  else if (mark >= 50) result.textContent = "Grade: E";
  else result.textContent = "Grade: F";
}

// Footer date
window.onload = () => {
  const year = new Date().getFullYear();
  document.getElementById("footer-text").innerHTML = `© ${year} Mayur Harshadbhai Patel`;
};
