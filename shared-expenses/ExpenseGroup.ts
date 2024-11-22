import User from "./User";
import Expense from "./Expense";

class ExpenseGroup {
    users: User[] = [];
    expenses: Expense[] = [];
    totalAmount: number = 0;

    inserUser(user: User) {
        this.users.push(user);
    }

    removeUser(user: User) {
        this.users = this.users.filter(item => item.id !== user.id);
    }

    addExpense(expense: Expense) {
        this.expenses.push(expense);
    }

    removeExpense(expense: Expense) {
        this.expenses = this.expenses.filter(item => item.id !== expense.id);
    }

    divideExpenses() {
        let totalAmount = 0;
        this.expenses.forEach(expense => {
            totalAmount += expense.amount;
            const splittedAmount = expense.getSplitedAmount(this.users.length);
            this.users.forEach(user => {
                if (user.id === expense.payer.id) {
                    user.balance += splittedAmount;
                }

                user.balance -= splittedAmount;
            })
        });
        this.totalAmount = totalAmount;
    }
}

export default ExpenseGroup;