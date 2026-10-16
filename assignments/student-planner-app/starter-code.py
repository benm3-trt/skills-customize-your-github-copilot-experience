import json
from pathlib import Path


class Task:
    def __init__(self, title, due_date="", completed=False):
        self.title = title
        self.due_date = due_date
        self.completed = completed

    def to_dict(self):
        return {
            "title": self.title,
            "due_date": self.due_date,
            "completed": self.completed,
        }

    @classmethod
    def from_dict(cls, data):
        return cls(
            title=data.get("title", ""),
            due_date=data.get("due_date", ""),
            completed=data.get("completed", False),
        )


class Planner:
    def __init__(self, filename="tasks.json"):
        self.filename = Path(filename)
        self.tasks = self.load_tasks()

    def add_task(self, title, due_date=""):
        """Add a new task to the planner."""
        pass

    def complete_task(self, title):
        """Mark a task as complete by title."""
        pass

    def remove_task(self, title):
        """Remove a task by title."""
        pass

    def list_tasks(self):
        """Return a readable list of tasks."""
        return []

    def load_tasks(self):
        """Read tasks from the JSON file."""
        if not self.filename.exists():
            return []
        with self.filename.open("r", encoding="utf-8") as file:
            data = json.load(file)
        return [Task.from_dict(task) for task in data]

    def save_tasks(self):
        """Write tasks to the JSON file."""
        with self.filename.open("w", encoding="utf-8") as file:
            json.dump([task.to_dict() for task in self.tasks], file, indent=2)


def main():
    planner = Planner()

    # Example usage:
    planner.add_task("Finish math homework", "2026-10-18")
    planner.add_task("Study for science quiz")
    planner.list_tasks()


if __name__ == "__main__":
    main()
