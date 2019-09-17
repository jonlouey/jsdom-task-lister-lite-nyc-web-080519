document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", addToList)
});

function addToList(event){ 
  event.preventDefault()
  const submissionText = document.querySelector("#new-task-description").value
  debugger
  document.querySelector("#tasks").insertAdjacentHTML("beforeend", `<li>${submissionText}<button data-description=${submission}>x</button></li>`)
}
