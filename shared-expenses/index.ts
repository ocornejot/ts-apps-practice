
/*
    - Generar clase de usuarios que compartiran gastos
        - los nombres deben ser unicos
        - Los usuarios deben tener un saldo
        - Ingresos al saldo deben ser positivos
    - Generar clase de gastos relacionada a los usuarios, este será un grupo
        - Registrar persona quién pagó, total del monto y nombre del gasto
        - Dividir el monto entre todos los miembros del grupo y mostrar cuanto debe pagar cada quién.
        - registro de pago de cada persona
            - Unas personas pueden pagar más y otras pueden pagar menos. Es necesario tener registro del saldo de los usuarios.
        - Metodo que muestre saldo/balance de usuarios (positivo/negativo)
        - Metodo para filtrar gaostos por participante
        - Generar reporte en JSON
    - Reporte de pagos pendientes
        - ejemplo: "Juan debe pagar $1000 a Pedro"
*/


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

user1.getDebtsBalance();
user2.getDebtsBalance();


