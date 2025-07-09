// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between align-items-center';

  // Inner content with text, complete and delete buttons
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div>
      <button class="btn btn-success btn-sm me-2 complete-btn">✓</button>
      <button class="btn btn-danger btn-sm delete-btn">🗑</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = "";
});

// Event delegation for complete/delete buttons
taskList.addEventListener('click', (e) => {
  const target = e.target;

  // Delete task
  if (target.classList.contains('delete-btn')) {
    target.closest('li').remove();
  }

  // Mark task complete
  if (target.classList.contains('complete-btn')) {
    const li = target.closest('li');
    li.classList.toggle('completed');
  }
});
