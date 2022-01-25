class Rectangle {
    constructor(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }

    get area() {
        return this.calculArea();
    }

    calculArea() {
        return this.largeur * this.longueur;
    }
}

const carre = new Rectangle(10,10);
console.log(carre.area);
