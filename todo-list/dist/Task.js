"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Task {
    constructor(title) {
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.completed = false;
    }
    complete() {
        this.completed = true;
    }
    toggle() {
        this.completed = !this.completed;
    }
    edit(title) {
        this.title = title;
    }
}
exports.default = Task;
