// Local Storage Key
const STORAGE_KEY = 'todoList';

// DOM Elements
const todoInput = document.getElementById('todoInput');
const prioritySelect = document.getElementById('prioritySelect');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const clearAllBtn = document.getElementById('clearAllBtn');
const filterButtons = document.querySelectorAll('.filter-btn');
const totalCount = document.getElementById('totalCount');
const activeCount = document.getElementById('activeCount');
const completedCount = document.getElementById('completedCount');

// State
let todos = [];
let currentFilter = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadTodos();
  renderTodos();
  updateStats();
  setupEventListeners();
});

// Setup Event Listeners
function setupEventListeners() {
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });
  clearAllBtn.addEventListener('click', clearCompleted);
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      renderTodos();
    });
  });
}

// Add Todo
function addTodo() {
  const text = todoInput.value.trim();
  const priority = prioritySelect.value;

  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  const newTodo = {
    id: Date.now(),
    text: text,
    completed: false,
    priority: priority,
    createdAt: new Date().toLocaleDateString()
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();
  updateStats();
  
  // Reset inputs
  todoInput.value = '';
  todoInput.focus();
  prioritySelect.value = 'medium';
}

// Delete Todo
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
  updateStats();
}

// Toggle Todo Completion
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
    updateStats();
  }
}

// Clear Completed
function clearCompleted() {
  const completedTodos = todos.filter(t => t.completed);
  if (completedTodos.length === 0) {
    alert('No completed tasks to clear!');
    return;
  }
  
  if (confirm(`Clear ${completedTodos.length} completed task(s)?`)) {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    renderTodos();
    updateStats();
  }
}

// Render Todos
function renderTodos() {
  todoList.innerHTML = '';

  const filteredTodos = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    todoList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🎯</div>
        <p>${currentFilter === 'completed' ? 'No completed tasks yet!' : 'No tasks to do!'}</p>
      </div>
    `;
    return;
  }

  filteredTodos.forEach(todo => {
    const li = document.createElement('li');
    if (todo.completed) li.classList.add('completed');

    li.innerHTML = `
      <input 
        type="checkbox" 
        class="checkbox" 
        ${todo.completed ? 'checked' : ''}
        onchange="toggleTodo(${todo.id})"
      />
      <span class="todo-text">${escapeHtml(todo.text)}</span>
      <span class="priority-badge ${todo.priority}">${todo.priority}</span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;

    todoList.appendChild(li);
  });
}

// Update Stats
function updateStats() {
  const total = todos.length;
  const active = todos.filter(t => !t.completed).length;
  const completed = todos.filter(t => t.completed).length;

  totalCount.textContent = total;
  activeCount.textContent = active;
  completedCount.textContent = completed;
}

// Save to Local Storage
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Load from Local Storage
function loadTodos() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      todos = JSON.parse(stored);
    } catch (e) {
      console.error('Error loading todos:', e);
      todos = [];
    }
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
