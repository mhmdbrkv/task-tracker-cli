const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const dirName = "data";
const fileName = "tasks.json";
const dirPath = path.join(__dirname, "..", dirName);

async function addTask(task) {
  try {
    let taskList = [];

    if (fs.existsSync(path.join(dirPath, fileName))) {
      const file = await fsp.readFile(path.join(dirPath, fileName), "utf-8");
      if (file.trim()) taskList = JSON.parse(file);
    }

    const taskObject = {
      id: taskList.length + 1,
      description: task,
      status: "todo",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    taskList.push(taskObject);

    await fsp.mkdir(dirPath, { recursive: true });
    await fsp.writeFile(
      path.join(dirPath, fileName),
      JSON.stringify(taskList, null, 2),
      "utf-8"
    );

    console.log("Task added successfully!");
  } catch (err) {
    console.error("Error adding task:", err);
  }
}

module.exports = addTask;
