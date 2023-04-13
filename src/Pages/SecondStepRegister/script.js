function handleRegister() {
  let image = document.getElementById("profile-img-input");
  let name = document.getElementById("name-input").value;
  let imgErrorMsg = document.getElementById("img-error-msg");
  let nameErrorMsg = document.getElementById("name-error-msg");

  nameErrorMsg.innerHTML = "";

  if (name == "" || name == undefined) {
    nameErrorMsg.innerHTML = "Preencha o campo de nome";
  }
}
