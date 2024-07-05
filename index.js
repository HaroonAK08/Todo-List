function addTodo() {
  var input = document.getElementById("todoInput");
  var todoText = input.value;
  //// If Todotext is Zero
    if (todoText === "") {
    alert("Please Enter a Todo");
    return;
  }

  var ul = document.getElementById("todoList");
  var li = document.createElement("li");

  // Create checkbox for each todo item
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  // Create span for todo text
  var todoSpan = document.createElement("span");
  todoSpan.textContent = todoText;
  li.appendChild(todoSpan);

  // Create a Cross Delete Button 
  var deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa-solid", "fa-circle-xmark");
  deleteIcon.style.color = "#dd5680";
  deleteIcon.style.fontSize = "20px";
deleteIcon.style.cursor = "pointer";
deleteIcon.style.marginLeft= "60%";


  deleteIcon.addEventListener("click", function() {
    ul.removeChild(li);
  });

  li.appendChild(deleteIcon);
  ul.appendChild(li);
  input.value = "";
}


//// Function to remove checkbox selected Tasks
function deleteSelectedTodos() {
  var ul = document.getElementById("todoList");
  var checkboxes = ul.querySelectorAll("input[type='checkbox']");

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      ul.removeChild(checkbox.parentNode);
    }
  });
}
