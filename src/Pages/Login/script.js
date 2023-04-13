function handleSubmit() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const emailErrorMsg = document.getElementById("email-error-msg");
  const passwordErrorMsg = document.getElementById("password-error-msg");

  const emailInput = document.getElementById("email-input");
  const passwordInput = document.getElementById("password-input");

  const emailInputLabel = document.getElementById("email-input-label");
  const passwordInputLabel = document.getElementById("password-input-label");

  emailErrorMsg.innerHTML = "";
  passwordErrorMsg.innerHTML = "";

  if (email == "" || email == undefined) {
    emailInput.style.borderColor = "red";
    emailInputLabel.style.color = "red";
    emailErrorMsg.innerHTML = "Preencha o campo de email";
  } else if (email.indexOf("@") === -1) {
    emailErrorMsg.innerHTML = "O email digitado não é válido";
  } else {
    emailInput.style.borderColor = "";
    emailInputLabel.style.color = "";
  }

  if (password == "" || password == undefined) {
    passwordInput.style.borderColor = "red";
    passwordInputLabel.style.color = "red";
    passwordErrorMsg.innerHTML = "Preencha o campo de senha";
  } else if (password.length < 8) {
    passwordErrorMsg.innerHTML = "A senha deve conter pelo menos 8 caracteres";
  } else{
    passwordInput.style.borderColor = "";
    passwordInputLabel.style.color = "";
  }
}
