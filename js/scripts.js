// Business Logic





// UI Logic

window.addEventListener("load", submit);

function submit() {
  const form = document.getElementById("survey");
  form.addEventListener("submit", processUserResponse);
}

function processUserResponse(event) {
  event.preventDefault();

  if (document.getElementById("enroll-yes").checked === true) {
    document.getElementById("c#").removeAttribute("class");
  } else if (document.getElementById("videogame-yes").checked === true && document.getElementById("computer").checked === true && document.getElementById("cs-yes").checked === true) {
    document.getElementById("c++").removeAttribute("class");
  } else if (document.getElementById("phone").checked === true || document.getElementById("comedy-yes").checked === true) {
    document.getElementById("python").removeAttribute("class");
  } else {
    document.getElementById("algorithm").removeAttribute("class");
  }
}

