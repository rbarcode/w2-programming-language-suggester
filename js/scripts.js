
// UI Logic

window.addEventListener("load", submit);
window.addEventListener("reset", hideResults);

function submit() {

  const form = document.getElementById("survey");
  form.addEventListener("submit", processUserResponse);

}

function processUserResponse(event) {
  event.preventDefault();
  getInputName();

  if (document.getElementById("enroll-yes").checked === true) {
    document.getElementById("c#").removeAttribute("class");
  } else if (document.getElementById("videogame-yes").checked === true && document.getElementById("computer").checked === true && document.getElementById("cs-yes").checked === true) {
    document.getElementById("c++").removeAttribute("class");
  } else if (document.getElementById("phone").checked === true || document.getElementById("comedy-yes").checked === true) {
    document.getElementById("python").removeAttribute("class");
  } else {
    document.getElementById("algorithm").removeAttribute("class");
  }

  document.getElementById("submit-button").disabled = true;
}

function hideResults() {
  document.getElementById("c#").setAttribute("class", "hidden");
  document.getElementById("c++").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("algorithm").setAttribute("class", "hidden");

  // clearUserName();

  document.getElementById("submit-button").disabled = false;
}

function getInputName() {
  const inputName = document.getElementById("input-name").value;
  const userName = document.querySelectorAll(".user-name");
  for (let i = 0; i < userName.length; i++) {
      userName.innerText = inputName;
  }
}

// function clearUserName() {
//   document.getElementsByClassName("user-name").innerText = null;
// }