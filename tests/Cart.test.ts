import { Cart } from '../src/Cart';
import { Movie } from '../src/Movie';

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    test('should add items to the cart', () => {
        const movie = new Movie(1, 'Inception', 'Christopher Nolan', 10);
        cart.addItem(movie);
        expect(cart.getItems()).toContain(movie);
    });

    test('should calculate total price', () => {
        cart.addItem(new Movie(1, 'Inception', 'Christopher Nolan', 10));
        cart.addItem(new Movie(2, 'Interstellar', 'Christopher Nolan', 15));
        expect(cart.getTotalPrice()).toBe(25);
    });

    test('should calculate total price with discount', () => {
        cart.addItem(new Movie(1, 'Inception', 'Christopher Nolan', 10));
        cart.addItem(new Movie(2, 'Interstellar', 'Christopher Nolan', 15));
        expect(cart.getTotalPriceWithDiscount(20)).toBe(20);
    });

    test('should remove item from the cart', () => {
        const movie = new Movie(1, 'Inception', 'Christopher Nolan', 10);
        cart.addItem(movie);
        cart.removeItem(1);
        expect(cart.getItems()).not.toContain(movie);
    });
});
