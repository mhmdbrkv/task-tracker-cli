const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const dirName = "data";
const fileName = "tasks.json";
const dirPath = path.join(__dirname, "..", dirName);

const updateTask = async () => {
  try {
    const [, , , id, data] = process.argv;

    if (!id || !data) {
      console.log("Task id and data is required for update.");
      return;
    }

    let taskList = [];
    if (fs.existsSync(path.join(dirPath, fileName))) {
      const file = await fsp.readFile(path.join(dirPath, fileName), "utf-8");
      if (file.trim()) taskList = JSON.parse(file);
    }

    taskList = taskList.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          description: data,
          updatedAt: new Date().toISOString(),
        };
      } else return task;
    });

    await fsp.mkdir(dirPath, { recursive: true });
    await fsp.writeFile(
      path.join(dirPath, fileName),
      JSON.stringify(taskList, null, 2),
      "utf-8"
    );
    console.log(`Task with id: ${id} updated successfully!`);
  } catch (err) {
    console.log("Error updating task:", err);
  }
};

module.exports = { updateTask };
