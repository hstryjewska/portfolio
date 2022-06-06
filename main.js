let error = 0;

const validateForm = () => {
  let nameField = document.forms["contact-form"]["name"].value;
  document.getElementById("name_error").innerHTML = "";
  if (nameField == null || nameField == "") {
    error++;
    document.getElementById("name_error").innerHTML = "Name must be filled out";
  }

  let emailField = document.forms["contact-form"]["email"].value;
  document.getElementById("email_error").innerHTML = "";
  if (emailField == null || emailField == "") {
    error++;
    document.getElementById("email_error").innerHTML =
      "Email must be filled out";
  }

  let ifEmpty = document.forms["contact-form"]["message"].value;
  document.getElementById("message_error").innerHTML = "";
  if (ifEmpty == null || ifEmpty == "") {
    error++;
    document.getElementById("message_error").innerHTML =
      "Oh no! Please ... write something :)";
  }

  if (error > 0) {
    return false;
  }
  document.getElementById("statusOn").innerHTML = "Sending...";
};

const formE = document.getElementById("submit-form");
const pork = () => {
  formE.onsubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("https://formspree.io/f/mayaddnq", {
      method: "POST",
      body: new FormData(formE),
    });

    let result = await response.json();

    alert(result.message);
  };
};
