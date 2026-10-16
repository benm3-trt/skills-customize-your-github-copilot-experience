const STORAGE_KEY = "study-planner-tasks";
const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

const tasks = loadTasks();

function loadTasks() {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (!savedTasks) {
    return [];
  }

  try {
    return JSON.parse(savedTasks);
  } catch (error) {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = `task-item ${task.completed ? "completed" : ""}`;
    item.innerHTML = `
      <div>
        <strong>${task.title}</strong>
        <div>${task.subject} • ${task.priority} • ${task.date}</div>
      </div>
      <div class="task-actions">
        <button data-action="toggle" data-id="${task.id}">${task.completed ? "Undo" : "Done"}</button>
        <button data-action="delete" data-id="${task.id}">Delete</button>
      </div>
    `;
    taskList.appendChild(item);
  });
}

function addTask(event) {
  event.preventDefault();

  const title = document.getElementById("task-name").value.trim();
  const subject = document.getElementById("task-subject").value.trim();
  const priority = document.getElementById("task-priority").value;
  const date = document.getElementById("task-date").value;

  if (!title || !subject || !date) {
    return;
  }

  tasks.push({
    id: Date.now(),
    title,
    subject,
    priority,
    date,
    completed: false,
  });

  saveTasks();
  renderTasks();
  taskForm.reset();
}

function toggleTask(taskId) {
  const task = tasks.find((item) => item.id === Number(taskId));
  if (!task) {
    return;
  }

  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  const taskIndex = tasks.findIndex((item) => item.id === Number(taskId));
  if (taskIndex === -1) {
    return;
  }

  tasks.splice(taskIndex, 1);
  saveTasks();
  renderTasks();
}

taskForm.addEventListener("submit", addTask);

taskList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button");
  if (!actionButton) {
    return;
  }

  const { action, id } = actionButton.dataset;

  if (action === "toggle") {
    toggleTask(id);
  }

  if (action === "delete") {
    deleteTask(id);
  }
});

renderTasks();
