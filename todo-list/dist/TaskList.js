"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskList {
    constructor() {
        this.list = [];
    }
    add(task) {
        this.list.push(task);
    }
    remove(task) {
        this.list = this.list.filter(t => t.id !== task.id);
    }
    filterByType(type) {
        if (type === "all") {
            return this.list;
        }
        if (type === "pending") {
            return this.list.filter(t => !t.completed);
        }
        if (type === "completed") {
            return this.list.filter(t => t.completed);
        }
    }
}
exports.default = TaskList;
