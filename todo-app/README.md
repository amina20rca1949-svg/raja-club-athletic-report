# To-Do List Application

A modern, feature-rich to-do list application built with vanilla JavaScript with full local storage functionality.

## ✨ Features

### Core Functionality
- ✅ **Add Tasks** - Easily add new tasks with a single click or Enter key
- 🗑️ **Delete Tasks** - Remove individual tasks instantly
- ☑️ **Mark Complete** - Check off completed tasks
- 💾 **Local Storage** - All tasks are automatically saved to your browser's local storage
- 📊 **Task Statistics** - Real-time count of total, active, and completed tasks

### Task Management
- 🎯 **Priority Levels** - Set priority (Low, Medium, High) for each task
- 🏷️ **Priority Badges** - Visual indicators for task priority
- 🔍 **Filter Tasks** - View all tasks, only active tasks, or only completed tasks
- 🧹 **Clear Completed** - Bulk remove all completed tasks at once

### User Experience
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- ⌨️ **Keyboard Support** - Press Enter to add tasks quickly
- 🎯 **Empty State** - Helpful message when no tasks are displayed
- ✨ **Smooth Animations** - Hover effects and transitions

## 🚀 How to Use

### Adding a Task
1. Type your task in the input field
2. Select a priority level (Low, Medium, High)
3. Click "Add" button or press Enter
4. Your task appears in the list and is automatically saved

### Managing Tasks
- **Complete Task**: Click the checkbox next to a task to mark it complete
- **Delete Task**: Click the "Delete" button to remove a task
- **Filter Tasks**: Use the filter buttons to show All, Active, or Completed tasks
- **Clear Completed**: Click "Clear Completed" to remove all finished tasks

## 💾 Local Storage

Your tasks are automatically saved to your browser's local storage:
- No server needed
- Persists across browser sessions
- Data stored locally on your device
- No cloud synchronization

**Storage Key**: `todoList`

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No frameworks or dependencies

### Key JavaScript Functions
- `addTodo()` - Add new task
- `deleteTodo(id)` - Remove task
- `toggleTodo(id)` - Mark task complete/incomplete
- `clearCompleted()` - Remove all completed tasks
- `renderTodos()` - Display filtered tasks
- `saveTodos()` - Save to local storage
- `loadTodos()` - Load from local storage
- `updateStats()` - Update task statistics

### Data Structure
```javascript
{
  id: timestamp,           // Unique identifier
  text: "Task text",       // Task description
  completed: false,        // Completion status
  priority: "medium",      // Priority level
  createdAt: "date"        // Creation date
}
```

## 📱 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎨 Customization

### Change Color Scheme
Edit the gradient colors in `style`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Priority Levels
Edit the priority select options in HTML:
```html
<option value="custom">Custom Priority</option>
```

## 🔒 Security Features

- XSS Protection: HTML escaping for user input
- No external dependencies
- Client-side only (no data sent to servers)

## 📂 File Structure

```
todo-app/
├── index.html      # HTML structure
└── script.js       # JavaScript functionality
```

## 🎯 Future Enhancements

Potential features to add:
- Due dates and reminders
- Categories/tags for tasks
- Drag and drop reordering
- Dark mode theme
- Export tasks to CSV
- Cloud sync option
- Task notes/descriptions

## 📄 License

© 2026 - Free to use and modify

## 🤝 Support

For issues or suggestions, please create an issue in the repository.

---

**Enjoy organizing your tasks! 📝✨**
