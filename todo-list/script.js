const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const showAll = document.getElementById("showAll");
const showCompleted = document.getElementById("showCompleted");
const showPending = document.getElementById("showPending");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.className = "task-item";

  li.innerHTML = `
      <span>${text}</span>
      <div class="btn-group">
          <button class="complete-btn">✔</button>
          <button class="delete-btn">✖</button>
      </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";

  li.querySelector(".complete-btn").onclick = () => {
    li.classList.toggle("completed");
  };

  li.querySelector(".delete-btn").onclick = () => {
    li.remove();
  };
}

showAll.onclick = () => {
  document.querySelectorAll(".task-item").forEach(task => {
    task.style.display = "flex";
  });
};

showCompleted.onclick = () => {
  document.querySelectorAll(".task-item").forEach(task => {
    task.style.display = task.classList.contains("completed") ? "flex" : "none";
  });
};

showPending.onclick = () => {
  document.querySelectorAll(".task-item").forEach(task => {
    task.style.display = task.classList.contains("completed") ? "none" : "flex";
  });
};
