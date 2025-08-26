#!/usr/bin/env node

const { addTask } = require("./src/addTask");
const { updateTask } = require("./src/updateTask");
const [, , action] = process.argv;

switch (action) {
  case "add":
    addTask();
    break;

  case "update":
    updateTask();
    break;

  default:
    console.log("Unknown action");
    break;
}
