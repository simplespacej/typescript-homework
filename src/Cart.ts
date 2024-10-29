import { Movie } from './Movie';

export class Cart {
    private items: Movie[] = [];

    addItem(item: Movie): void {
        this.items.push(item);
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    getItems(): Movie[] {
        return this.items;
    }

    getTotalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getTotalPriceWithDiscount(discount: number): number {
        const total = this.getTotalPrice();
        return total - (total * discount / 100);
    }
}
