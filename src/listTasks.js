const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const dirName = "data";
const fileName = "tasks.json";
const dirPath = path.join(__dirname, "..", dirName);

const listTasks = async () => {
  try {
    const [, , , status] = process.argv;
    let taskList = [];
    if (fs.existsSync(path.join(dirPath, fileName))) {
      const file = await fsp.readFile(path.join(dirPath, fileName), "utf-8");
      if (file.trim()) taskList = JSON.parse(file);
      if (status) taskList = taskList.filter((task) => task.status === status);
      return console.log(taskList);
    } else return console.log("File not Found");
  } catch (err) {
    console.log("Error listing tasks:", err);
  }
};

module.exports = {
  listTasks,
};
