// Get the form and buttons
var submitButtons = document.querySelectorAll("button");
var sign = document.querySelectorAll(".form-container");
var tabs = document.querySelectorAll(".tab");
var forms = document.querySelectorAll("form");

// Form validation function
const validateForm = function () {
  var email = document.querySelector("#email").value;
  var fName = document.querySelector("#F_name").value;
  var lName = document.querySelector("#L_name").value;
  var pass = document.querySelector(".Password").value;
  var message = document.querySelectorAll(".message");

  let isValid = true;

  // Clear all previous messages
  message.forEach((msg) => (msg.textContent = ""));

  if (email === "") {
    message[0].textContent = "Email cannot be empty";
    isValid = false;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    message[0].textContent = "Looks like this is not an email";
    isValid = false;
  }

  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordPattern.test(pass)) {
    message[1].textContent = "Invalid Password";
    isValid = false;
  }

  if (isValid) {
    window.location.href = "Field.html";
  }
};

// Attach event listeners to the forms
forms.forEach((form) => {
  form.addEventListener("submit", (ev) => {
    ev.preventDefault(); // Prevent form submission
    validateForm();
  });
});

// Tab switching logic
tabs.forEach((ele, index) => {
  ele.addEventListener("click", function () {
    if (index === 0 || index === 2) {
      console.log("The login tab was clicked");
      sign[0].classList.remove("hidden");
      sign[1].classList.add("hidden");
    } else {
      console.log("Sign up tab was clicked");
      sign[0].classList.add("hidden");
      sign[1].classList.remove("hidden");
    }
  });
});
