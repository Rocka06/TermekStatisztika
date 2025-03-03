export class Product {
    constructor(name, category, price) {
        if (name == null || name == undefined) {
            throw Error("Invalid name");
        }

        if (category == null || category == undefined) {
            throw Error("Invalid category");
        }

        if (price == null || price == undefined) {
            throw Error("Invalid price");
        }

        if (typeof price !== "number") {
            throw Error("Invalid price");
        }
        if (typeof name !== "string") {
            throw Error("Invalid name");
        }
        if (typeof category !== "string") {
            throw Error("Invalid name");
        }

        if (name.trim() == "") {
            throw Error("Empty name");
        }

        if (category.trim() == "") {
            throw Error("Empty category");
        }

        if (price <= 0) {
            throw Error("Price can't be less than or equal to 0");
        }

        this.price = price;
        this.name = name;
        this.category = category;
    }
}