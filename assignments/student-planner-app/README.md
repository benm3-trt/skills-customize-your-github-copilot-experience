# 📘 Assignment: Student Planner App

## 🎯 Objective

Build a simple Python app that helps a student keep track of homework, reminders, and completed tasks. The project will combine user input, functions, lists, dictionaries, classes, and file storage.

## 📝 Tasks

### 🛠️ Create the Task Model

#### Description
Create a `Task` class that stores a task title, due date, and completion status.

#### Requirements
Completed program should:

- Define a `Task` class with attributes for `title`, `due_date`, and `completed`.
- Include a method to convert the task into a dictionary.
- Include a class method to create a task from stored data.
- Print a clear example of a task object being created.

### 🛠️ Add and Manage Tasks

#### Description
Build a `Planner` class that stores multiple tasks and lets the user add, view, and complete them.

#### Requirements
Completed program should:

- Keep all tasks in a list or dictionary.
- Add tasks with a title and optional due date.
- Display all tasks in a readable format.
- Mark a task as complete when the user selects it.
- Show an updated task list after changes.

### 🛠️ Save Tasks to a File

#### Description
Extend the planner so tasks persist after the program closes.

#### Requirements
Completed program should:

- Save tasks to a JSON file named `tasks.json`.
- Load tasks from the file when the program starts.
- Keep task data organized in a consistent format.
- Avoid duplicates when the same task title is entered twice.

### 🌟 Stretch Goal

Create a simple menu-driven app that lets the user:

- add a task
- view tasks
- mark a task complete
- remove a task
- exit the planner

This should be run from a `main()` function and provide a polished command-line experience.
