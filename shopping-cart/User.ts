import { v4 as uuidv4 } from 'uuid';

export interface IUserValidator {
    id: string;
    name: string;
}

class User implements IUserValidator {
    #id: string;
    name: string;

    constructor(name: string) {
        this.#id = uuidv4();
        this.name = name;
    }

    get id() {
        return this.#id;
    }
}

export default User;