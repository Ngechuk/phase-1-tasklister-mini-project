document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const fieldInput = document.getElementbyId("new-task-description");
  const formEle = document.querySelector("form");
  formEle.addEventListener('submit',(e) =>{
    let newtask = fieldInput.value
    e.preventDefault();
  
  })
}:
