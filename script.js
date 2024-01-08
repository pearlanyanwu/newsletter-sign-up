var email = document.getElementById("email");
const regex = /^([a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-z]{3})$/;
var validEmail = document.getElementById("verified-email");
const submitButton = document.getElementById("submit-button");
const container1 = document.getElementsByClassName("container-1")[0];
const container2 = document.getElementsByClassName("container-2")[0];
const errorMsg = document.getElementById("error-msg");

submitButton.addEventListener("click", () => {
  if ((email.value == "") || (!regex.test(email.value))) {
      email.style.backgroundColor = "hsla(4, 100%, 67%, 0.3)";
      email.style.border = "1px solid hsl(4, 100%, 67%)";
      email.style.color = "hsl(4, 100%, 67%)";
      email.style.fontWeight = "600";
      errorMsg.style.color = "hsl(4, 100%, 67%)";
      errorMsg.style.display = "block";
      errorMsg.style.fontWeight = "bold";
    } else {
      validEmail.innerText = email.value;
      validEmail.style.fontWeight = "bold";
      container1.style.display = "none";
      container2.style.display = "block";
    }
  });