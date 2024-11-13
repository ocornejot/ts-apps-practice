import Task from "./Task";
import TaskList from "./TaskList";

const taskList = new TaskList();

const task = new Task("test");
const task2 = new Task("task 2");
const task3 = new Task("task 3");

taskList.add(task);
taskList.add(task2);
taskList.add(task3);

task.complete();
task.edit("test2");


console.log(taskList);

taskList.remove(task2);


console.log('all', taskList.filterByType("all"));
console.log('pending', taskList.filterByType("pending"));
console.log('completed', taskList.filterByType("completed"));

