// Add your Circle class here
class Circle {
    #radius;
    #pi;
    constructor(radius) {
        this.#radius = radius;
        this.#pi = Math.PI;
    }

    get diameter() {
        return this.#radius * 2;
    }

    get circumference() {
        return this.#pi * this.diameter;
    }

    get area() {
        return this.#pi * this.#radius ** 2;
    }

    set diameter(newDiameter) {
        this.#radius = newDiameter / 2;
    }

    set circumference(newCircumference) {
        this.#radius = newCircumference / (2 * this.#pi);
    }

    set area(newArea) {
        this.#radius = Math.sqrt(newArea / this.#pi);
    }
}
