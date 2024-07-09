let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click',function(){
    let paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    paragraph.classList.add('paragraph-styling');
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
