#!/usr/bin/env node

const { addTask } = require("./src/addTask");
const { updateTask } = require("./src/updateTask");
const { removeTask } = require("./src/removeTask");
const { markInProgress, markDone } = require("./src/markTask");
const { listTasks } = require("./src/listTasks");

const [, , action] = process.argv;

switch (action) {
  case "add":
    addTask();
    break;

  case "update":
    updateTask();
    break;

  case "delete":
    removeTask();
    break;

  case "mark-in-progress":
    markInProgress();
    break;

  case "mark-done":
    markDone();
    break;

  case "list":
    listTasks();
    break;

  default:
    console.log("Unknown action");
    break;
}
