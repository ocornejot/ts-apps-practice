import { v4 as uuidv4 } from 'uuid';

class Product {
    name: string;
    price: number;
    quantity: number = 1;
    #id: string;

    constructor(
        name: string,
        price: number,
        quantity: number
    ) {
        this.#id = uuidv4();
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    get id() {
        return this.#id;
    }


}

export default Product;