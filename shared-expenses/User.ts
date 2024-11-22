import { v4 as uuidv4 } from 'uuid';
import Expense from './Expense';


class User {
    #id: string;
    #balance: number;

    constructor(public name: string) {
        this.#id = uuidv4()
        this.#balance = 0;
    }

    get id() {
        return this.#id;
    }

    get balance() {
        return this.#balance;
    }

    set balance(value: number) {
        this.#balance = value;
    }
}

export default User;