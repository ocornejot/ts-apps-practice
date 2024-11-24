import User from "./User";
import Expense from "./Expense";
import ExpenseGroup from "./ExpenseGroup";

const user1 = new User("Octavio");
const user2 = new User("Claudia");
const user3 = new User("Bella");

const expense1 = new Expense(1000, "Comida", user1);
const expense2 = new Expense(500, "Bebidas", user1);
const expense3 = new Expense(180, "Cine", user2);
const expense4 = new Expense(1000, "Gasolina", user2);

const expenseGroup = new ExpenseGroup();
expenseGroup.inserUser(user1);
expenseGroup.inserUser(user2);
expenseGroup.inserUser(user3);
expenseGroup.addExpense(expense1);
expenseGroup.addExpense(expense2);
expenseGroup.addExpense(expense3);
expenseGroup.addExpense(expense4);

expenseGroup.divideExpenses();
expenseGroup.showGroupBalance();
const report = expenseGroup.generateReport();
console.log(JSON.stringify(report));


