import Product from "./Product";
import { IUserValidator } from "./User";

type DiscountType = "percentage" | "fixed";
interface Discount {
    type: DiscountType;
    value: number;
}

const defaultDiscount: Discount = {
    type: "percentage",
    value: 0,
}

class Cart {
    products: Product[] = [];
    user: IUserValidator;
    #discount: Discount = defaultDiscount;
    #iva = 1.16;

    constructor(user: IUserValidator) {
        this.user = user;
    }

    add(product: Product) {
        this.products.push(product);
    }

    remove(product: Product) {
        this.products = this.products.filter(item => item.id !== product.id);
    }

    setDiscount(discount: number, type: DiscountType) {
        this.#discount = {
            type,
            value: discount
        }
    }

    getTotal() {
        const price =  this.products.reduce((total, product) => total + product.price * product.quantity, 0);
        const discount = this.#applyDiscount(price);
        const iva = this.#getIva(price);
        const total = (price - discount) * this.#iva;

        return {
            price: price.toFixed(2),
            iva: iva.toFixed(2),
            discount: discount.toFixed(2),
            total: total.toFixed(2),
        }
    }

    #getIva(price: number) {
        return (price * this.#iva) - price;
    }

    #applyDiscount(total: number) {
        const { value: discount, type } = this.#discount;

        if (type === "percentage") {
            const discountValue = this.#discount.value / 100;
            return (total * discountValue);
        }

        if (type === "fixed") {
            return (total - discount);
        }

        return 0;
    }
}

export default Cart;