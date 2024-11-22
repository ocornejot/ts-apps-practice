import { v4 as uuidv4 } from 'uuid';
import User from "./User";

class Expense {
    #id: string;
    amount: number;
    concept: string;
    payer: User;

    constructor(amount: number, concept: string, user: User) {
        this.#id = uuidv4();
        this.amount = amount;
        this.concept = concept;
        this.payer = user;
    }

    get id() {
        return this.#id;
    }

    getSplitedAmount(quantity: number) {
        return this.amount / quantity;
    }
}

export default Expense;