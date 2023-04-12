function handleRegister(){
  let email = document.getElementById("email-input").value;
  let password = document.getElementById("password-input").value;
  let passwordConfirmation = document.getElementById("password-confirmation-input").value;
  let emailErrorMsg = document.getElementById("email-error-msg");
  let passwordErrorMsg = document.getElementById("password-error-msg");
  let passwordConfirmationErrorMsg = document.getElementById("password-confirmation-error-msg");

  emailErrorMsg.innerHTML = '';
  passwordErrorMsg.innerHTML = '';
  passwordConfirmationErrorMsg.innerHTML = '';

  if(email == '' || email == undefined){
    emailErrorMsg.innerHTML = "Preencha o campo de email"
  } else if(email.indexOf("@") === -1){
    emailErrorMsg.innerHTML = "O email digitado não é válido"
  }

  if(password == '' || password == undefined){
    passwordErrorMsg.innerHTML = "Preencha o campo de senha"
  } else if(password.length < 8){
    passwordErrorMsg.innerHTML = "A senha deve conter pelo menos 8 caracteres"
  }

  if(passwordConfirmation == '' || password == undefined){
    passwordConfirmationErrorMsg.innerHTML = "Preencha o campo de confirmação da senha"
  } else if(password.length != password){
    passwordConfirmationErrorMsg.innerHTML = "As senhas devem ser iguais"
  }
}