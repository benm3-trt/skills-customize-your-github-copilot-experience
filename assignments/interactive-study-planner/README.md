# 📘 Assignment: Interactive Study Planner

## 🎯 Objective

Create a small web app that helps students organize their study tasks, track priorities, and keep their schedule saved in the browser. This assignment will practice HTML, CSS, JavaScript, event handling, and local storage.

## 📝 Tasks

### 🛠️ Build the Planner Layout

#### Description
Create a page with a form for adding study tasks and a section that displays each task as a card or list item.

#### Requirements
Completed program should:

- Include fields for task name, subject, priority, and due date.
- Add a button to submit a new task.
- Show each task in a clear, readable list.
- Include a way to tell whether a task is complete or still pending.

### 🛠️ Add Task Behavior

#### Description
Write JavaScript logic to collect form data, create task objects, and render them on the page.

#### Requirements
Completed program should:

- Save each task as an object with a title, subject, due date, priority, and completion status.
- Validate the form so empty values are not added.
- Display all tasks after adding a new one.
- Use clear labels and user-friendly messages.

### 🛠️ Update and Complete Tasks

#### Description
Allow the user to mark items as complete or remove them from the planner once they are finished.

#### Requirements
Completed program should:

- Include buttons or controls to mark tasks as complete.
- Style completed tasks differently from active tasks.
- Remove tasks if the user chooses to delete them.
- Update the list immediately after each action.

### 🛠️ Save to Local Storage

#### Description
Store tasks in the browser so they remain after the page is refreshed.

#### Requirements
Completed program should:

- Save all tasks to `localStorage` after any change.
- Load saved tasks when the page opens.
- Rebuild the task list from saved data on page load.
- Handle missing or invalid saved data without crashing.

### 🌟 Stretch Goal

Add a filter that shows only complete tasks, only incomplete tasks, or all tasks. You may also sort tasks by priority or due date.
