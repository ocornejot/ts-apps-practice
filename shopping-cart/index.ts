import Product from "./Product";
import Cart from "./Cart";
import User from "./User";

const elote = new Product("Elote", 15, 1);
const pizza = new Product("Pizza", 30, 2);
const coquita = new Product("Coquita", 10, 5);
const hotdog = new Product("Hotdog", 20, 3);
const bionico = new Product("Bionico", 5, 1);

const octavio = new User("Octavio");
const claudia = new User("Claudia");

const cart = new Cart(octavio);
cart.add(elote);
// cart.add(pizza);
cart.add(coquita);
cart.add(hotdog);
cart.add(bionico);

cart.remove(bionico);

cart.setDiscount(5, "percentage");
// cart.setDiscount(10, "fixed");

console.log(cart.getTotal());