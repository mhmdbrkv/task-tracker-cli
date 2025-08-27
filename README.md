# 📝 Task Tracker CLI

A simple **command-line interface (CLI)** application built with **Node.js** for managing your daily tasks.  
You can add, update, delete, mark progress, mark completion, and list tasks easily from the terminal.

This project is inspired by the [Task Tracker project on roadmap.sh](https://roadmap.sh/projects/task-tracker).

---

## 🚀 Features

- Add a new task
- Update an existing task
- Delete a task
- Mark a task as **in progress**
- Mark a task as **done**
- List all tasks with their status

---

## 📦 Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/task-tracker-cli.git
   cd task-tracker-cli
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make the CLI executable:

   ```bash
   chmod +x index.js
   ```

4. (Optional) Link the CLI globally so you can run it anywhere:
   ```bash
   npm link
   ```

---

## ⚡ Usage

Run the CLI with one of the following commands:

```bash
node index.js <action>
```

Or, if linked globally:

```bash
task-cli <action>
```

### Actions

- **Add a new task**

  ```bash
  task-cli add
  ```

- **Update an existing task**

  ```bash
  task-cli update
  ```

- **Delete a task**

  ```bash
  task-cli delete
  ```

- **Mark a task as in progress**

  ```bash
  task-cli mark-in-progress
  ```

- **Mark a task as done**

  ```bash
  task-cli mark-done
  ```

- **List all tasks**

  ```bash
  task-cli list
  ```

- **List tasks by status**

  ```bash
  task-cli list done
  task-cli list todo
  task-cli list in-progress
  ```

---

## 📂 Project Structure

```
task-tracker-cli/
│── index.js         # Entry point for CLI
│── package.json
└── src/
    ├── addTask.js
    ├── updateTask.js
    ├── removeTask.js
    ├── markTask.js
    └── listTasks.js
```

---

## 🛠️ Tech Stack

- Node.js
- JavaScript (CommonJS modules)
- File system for storing tasks (JSON-based)

---

## 📌 Future Improvements

- Add due dates and priorities
- Add search and filter options
- Support exporting/importing tasks
- Improve task listing with colors and formatting

---

## 👤 Author

**Mohamed Baraka**  
🔗 [GitHub](https://github.com/mhmdbrkv) | [LinkedIn](https://linkedin.com/in/mohamed-baraka-3b832a250) | [Portfolio](https://mhmdbrkv.github.io/portfolio)
