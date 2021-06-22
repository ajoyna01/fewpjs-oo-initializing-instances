class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    }
}
let savoryBreakfast1 = new Breakfast("Omelet", "Coffee");
let savoryBreakfast2 = new Breakfast("Quiche Lorraine", "Black Tea");

savoryBreakfast1;
savoryBreakfast2;

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}
let lightLunch1 = new Lunch("Cobb Salad", "Minestrone", "Sparkliing Water");
let lightLunch2 = new Lunch("Ceasar Salad", "Italian Wedding", "Iced Tea");

lightLunch1;
lightLunch2;

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    }
}
let deliciousDinner1 = new Dinner(
    "Field Greens with Walnuts, Strawberries and Goat Cheese", 
    "Cream of Tomato Basil",
    "Prime Rib",
    "Double Chocolate Cheesecake");

let deliciousDinner2 = new Dinner(
    "Spring Salad with Toasted Cashews and Apricots",
    "Chilled Cucumber Gazpacho",
    "Cornish Hens",
    "Blueberry Cobbler with Creme Fraiche");