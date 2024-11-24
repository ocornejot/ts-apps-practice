import User from "./User";
import Expense from "./Expense";
import { formatCurrency } from "./utils";


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
            let splittedAmount = expense.getSplitedAmount(this.users.length);

            const payer = this.users.find(user => user.id === expense.payer.id);
            const debtors = this.users.filter(user => user.id !== expense.payer.id);

            if (!payer) {
                throw new Error('Payer not found');
            }

            payer.balance += splittedAmount;
            debtors.forEach(debtor => {
                debtor.balance -= splittedAmount;
                payer.addUserDebt(debtor, splittedAmount);
                debtor.addUserDebt(payer, splittedAmount * -1);
            });
        });
        this.totalAmount = totalAmount;
    }

    showGroupBalance() {
        console.log('--------------------------------');
        this.users.forEach(user => console.log(`${user.name} balance: ${user.balance.toFixed(2)}`));
        console.log('TOTAL: ', formatCurrency(this.totalAmount));
        console.log('--------------------------------');
    }

    generateReport() {
        
        let users: any[] = [];
        this.users.forEach(user => {
            users.push({
                id: user.id,
                name: user.name,
                balance: user.balance.toFixed(2),
                debts: user.getDebtsBalance()
            })
        });
        let report = {
            totalAmount: this.totalAmount,
            users
        };

        return report;
    }
}

export default ExpenseGroup;