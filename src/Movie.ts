export class Movie {
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public price: number
    ) {}

    getInfo(): string {
        return `${this.title} directed by ${this.director}, Price: ${this.price}`;
    }
}
