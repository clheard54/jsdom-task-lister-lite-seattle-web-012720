document.addEventListener("DOMContentLoaded", () => {
  function addTask(task) {
    let newTask = document.createElement("li");
    newTask.textContent = task;
    let deleteButton = document.createElement('BUTTON');
    deleteButton.setAttribute("id", task.value)
    deleteButton.innerHTML = "X"
    const listTask = document.getElementById('tasks').appendChild(newTask);
    listTask.setAttribute("id", task)
    listTask.appendChild(deleteButton)
  }

  

const form = document.querySelector("form")
// const form = document.getElementById("create-task-form")
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const todo = event.target["new-task-description"].value;
  const priority = event.target["priority"].value
  if (todo != "") {
    addTask(todo);
  }
  
  document.querySelector("input").value = ""
})


// deleter.addEventListener("click", function() {
//   deleters.parentNode.remove
// })

});

// function removeTask(task) {
//   const listItems = document.querySelectorAll('li');
//   for (let i=0; i<listItems.length; i++) {
//     if (listItems[i].textContent == task) {
//       listItems[i].parentNode.removeChild(listItems[i])
//     } 
//   } 
// }
// const deleteForm = document.getElementById("delete-task")
// deleteForm.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const done = event.target["task-to-delete"].value
//   removeTask(done);
// })

// if (priority == "ASAP") {
//   document.getElementById(todo).textContent.color("red")
// } else if (priority == "important") {
//   document.getElementById(todo).textContent.color("orange")
// } else if (priority == "less") {
//   document.getElementById(todo).textContent.color("yellow")
// } else if (priority == "optional") {
//   document.getElementById(todo).textContent.color("blue")
// };