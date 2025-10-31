# Lab 2 — To-Do List (15 min)

## Task
Create a simple To-Do list app.

### Requirements
- Input + Add button
- Keep todos in array state
- Render the list
- Clear input after add

### Hints
- Two pieces of state: `input`, `todos`
- Append with `setTodos([...todos, input.trim()])`

### Acceptance
- Adding items re-renders list
- No page reloads
