function handleRegister() {
  const name = document.getElementById("name-input").value;
  const nameInput = document.getElementById("name-input");
  const nameInputLabel = document.getElementById("name-input-label");
  const nameErrorMsg = document.getElementById("name-error-msg");

  nameErrorMsg.innerHTML = "";

  if (name == "" || name == undefined) {
    nameInput.style.borderColor = "red";
    nameInputLabel.style.color = "red";
    nameErrorMsg.innerHTML = "Preencha o campo de nome";
  } else {
    nameInput.style.borderColor = "";
    nameInputLabel.style.color = "";
  }
}
