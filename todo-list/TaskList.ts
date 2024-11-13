import Task from "./Task";

export interface TaskListInterface {
    list: Task[]
}

type TaskListFilterType = "all" | "pending" | "completed";

class TaskList implements TaskListInterface {
    list: Task[] = [];
    add(task: Task) {
        this.list.push(task);
    }

    remove(task: Task) {
        this.list = this.list.filter(t => t.id !== task.id);
    }

    filterByType(type: TaskListFilterType) {
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

export default TaskList;