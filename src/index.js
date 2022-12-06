document.addEventListener("DOMContentLoaded"), () => {
  // your code here
  const fieldInput = document.getElementbyId("new-task-description");
  const formEle = document.querySelector("form");
  formEle.addEventListener('submit',(e) =>{
    let newtask = fieldInput.value
    e.preventDefault();
  if(newtask.lenth ===0){
    alert('task shouldnt be empty')
  }else{
    handleToDo(newtask);
  }
  formElement.reset()
  })


function css(element, style){
  for(const property in style)
  element.style[property] = style[property];

}
function handleToDo(newtask){
let itemList = document.createElement("li");
let btn = document.createElement("button");
css(btn, {
  'background-color':"green",
  "background":"blue",
  "color":"purple",
  'padding': '5px'
})};
btn.addEventListener('click' ,handleDelete)
btn.textContent = 'delete'
itemList.innerText = `${newtask}`;
itemList.appendChild(btn)
document.querySelector('#tasks').appendChild(itemList)
}
functionhandleDelete(e){
  e.target.parentNode.remove()
}

