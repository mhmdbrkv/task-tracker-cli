#!/usr/bin/env node

const addTask = require("./src/addTask");
const [, , prompt, task] = process.argv;

if (prompt === "add" && task) {
  addTask(task);
}
