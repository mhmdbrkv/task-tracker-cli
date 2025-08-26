const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const dirName = "data";
const fileName = "tasks.json";
const dirPath = path.join(__dirname, "..", dirName);

const removeTask = async () => {
  try {
    const [, , , id] = process.argv;

    if (!id) {
      console.log("Task id is required for remove.");
      return;
    }

    let taskList = [];
    if (fs.existsSync(path.join(dirPath, fileName))) {
      const file = await fsp.readFile(path.join(dirPath, fileName), "utf-8");
      if (file.trim()) taskList = JSON.parse(file);
    }

    taskList = taskList.filter((task) => task.id != id);

    await fsp.mkdir(dirPath, { recursive: true });
    await fsp.writeFile(
      path.join(dirPath, fileName),
      JSON.stringify(taskList, null, 2),
      "utf-8"
    );
    console.log(`Task with id: ${id} removed successfully!`);
  } catch (err) {
    console.log("Error removing task:", err);
  }
};

module.exports = { removeTask };
