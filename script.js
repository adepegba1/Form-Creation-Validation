document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const trimmedUsername = username.value.trim();
    const trimmedEmail = email.value.trim();
    const trimmedPassword = password.value.trim();

    let isValid = true;
    let messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push(`The name must be 3 character long`);
    }

    if (!email.includes("@") || email.includes(".")) {
      isValid = false;
      messages.push("Invalid mail address");
    }
    if (password.length < 8) {
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
