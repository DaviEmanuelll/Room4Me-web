function handleRegister() {
  let email = document.getElementById("email-input");
  let password = document.getElementById("password-input");
  let passwordConfirmation = document.getElementById(
    "password-confirmation-input"
  );
  let emailErrorMsg = document.getElementById("email-error-msg");
  let passwordErrorMsg = document.getElementById("password-error-msg");
  let passwordConfirmationErrorMsg = document.getElementById(
    "password-confirmation-error-msg"
  );

  let emailLabel = document.getElementById("email-input-label");
  let passwordLabel = document.getElementById("password-input-label");
  let passwordConfirmationLabel = document.getElementById(
    "password-confirmation-input-label"
  );

  emailErrorMsg.innerHTML = "";
  passwordErrorMsg.innerHTML = "";
  passwordConfirmationErrorMsg.innerHTML = "";

  if (email.value == "" || email.value == undefined) {
    emailErrorMsg.innerHTML = "Preencha o campo de email";
    email.style.borderColor = "red";
    emailLabel.style.color = "red";
  } else if (email.value.indexOf("@") === -1) {
    emailErrorMsg.innerHTML = "O email digitado não é válido";
    email.style.borderColor = "red";
    emailLabel.style.color = "red";
  } else {
    email.style.borderColor = "";
    emailLabel.style.color = "";
  }

  if (password.value == "" || password.value == undefined) {
    passwordErrorMsg.innerHTML = "Preencha o campo de senha";
    password.style.borderColor = "red";
    passwordLabel.style.color = "red";
  } else if (password.value.length < 8) {
    passwordErrorMsg.innerHTML = "A senha deve conter pelo menos 8 caracteres";
    password.style.borderColor = "red";
    passwordLabel.style.color = "red";
  } else {
    password.style.borderColor = "";
    passwordLabel.style.borderColor = "";
  }

  if (
    passwordConfirmation.value == "" ||
    passwordConfirmation.value == undefined
  ) {
    passwordConfirmationErrorMsg.innerHTML =
      "Preencha o campo de confirmação da senha";
    passwordConfirmation.style.borderColor = "red";
    passwordConfirmationLabel.style.color = "red";
  } else if (passwordConfirmation.value != password.value) {
    passwordConfirmationErrorMsg.innerHTML = "As senhas devem ser iguais";
    passwordConfirmation.style.borderColor = "red";
    passwordConfirmationLabel.style.color = "red";
  } else {
    passwordConfirmation.style.borderColor = "";
    passwordConfirmationLabel.style.borderColor = "";
  }
}
