
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

  document.getElementById("submit-button").disabled = false;
}

/*NOTE: I'm confident there's a way to write this function better using a single class and collections or arrays and a for or foreach loop. I spent some time researching the topic but decided to use the method below because my research was taking too long. Thus, my commit history may not fully reflect the amount of time I have been working on this issue.*/
function getInputName() {
  const inputName = document.getElementById("input-name").value;
  document.getElementById("c#-user-name").innerText = inputName;
  document.getElementById("c++-user-name").innerText = inputName;
  document.getElementById("python-user-name").innerText = inputName;
  document.getElementById("algorithm-user-name").innerText = inputName;
}
