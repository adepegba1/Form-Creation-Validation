document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const trimmedUsername = usernameInput.value.trim();
    const trimmedEmail = emailInput.value.trim();
    const trimmedPassword = passwordInput.value.trim();

    let isValid = true;
    let messages = [];

    if (trimmedUsername.length < 3) {
      isValid = false;
      messages.push("The name must be 3 character long");
    }

    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      isValid = false;
      messages.push("Invalid mail address");
    }
    if (trimmedPassword.length < 8) {
      isValid = false;
      messages.push("The password must be 8 character long");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful";

      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
