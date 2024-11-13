import { v4 as uuidv4 } from 'uuid';

export interface TaskInterface {
    id: string;
    title: string;
    completed: boolean;
}

class Task implements TaskInterface {
    public id: string;
    public title: string;
    public completed: boolean;
    
    constructor(
        title: string
    ) {
        this.id = uuidv4();
        this.title = title;
        this.completed = false;
    }

    complete() {
        this.completed = true;
    }

    toggle() {
        this.completed = !this.completed;
    }

    edit(title: string) {
        this.title = title;
    }
}

export default Task;