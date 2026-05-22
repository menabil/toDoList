const inputBox = document.getElementById("inputBox");
const todoList = document.getElementById("todoList");

let addTask = () => {
  if (inputBox.value == "") {
    alert("please add a task");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    todoList.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerText = "x";
    li.appendChild(span);
    saveData();
  }
};

todoList.addEventListener("click", function (e) {
  if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

let saveData = () => {
  localStorage.setItem("eoo", todoList.innerHTML);
};

let showTask = () => {
  todoList.innerHTML = localStorage.getItem("eoo");
};

showTask();
