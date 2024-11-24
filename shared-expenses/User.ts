import { v4 as uuidv4 } from 'uuid';
import { formatCurrency } from './utils';

type UserDebt = {
    user: User,
    amount: number
}

class User {
    #id: string;
    #balance: number;
    userDebts: UserDebt[] = [];

    constructor(public name: string) {
        this.#id = uuidv4();
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

    addUserDebt(user: User, amount: number) {
        const userDebt = this.userDebts.find(debt => debt.user.id === user.id);

        if (userDebt) {
            userDebt.amount += amount;
            return;
        }
        this.userDebts.push({ user, amount });
    }

    getDebtsBalance() {
        const debtsList: string[] = [];
        this.userDebts.forEach(userDebt => {
            
            if (userDebt.amount > 0) {
                debtsList.push(`${userDebt.user.name} owes ${formatCurrency(userDebt.amount)} to ${this.name}`);
            } else {
                let amount = Math.abs(userDebt.amount);
                debtsList.push(`${this.name} owes ${formatCurrency(amount)} to ${userDebt.user.name}`);
            }
        });
        console.table(debtsList);
    }
}

export default User;