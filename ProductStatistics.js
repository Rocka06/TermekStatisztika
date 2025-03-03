export class ProductStatistics {
    constructor(productList) {
        if (productList == null || productList == undefined || productList.length == 0) {
            throw Error("Invalid list");
        }
        this.productList = productList;
    }

    getAveragePrice() {
        let amount = 0;
        this.productList.forEach(element => {
            amount += element.price;
        });
        return amount / this.productList.length;
    }

    getMostExpensiveProduct() {
        let product = null;
        this.productList.forEach(element => {
            if (product == null) {
                product = element;
            }

            if (product.price < element.price) {
                product = element;
            }
        });

        return product;
    }

    getCheapestProduct() {
        let product = null;
        this.productList.forEach(element => {
            if (product == null) {
                product = element;
            }

            if (product.price > element.price) {
                product = element;
            }
        });

        return product;
    }

    getAveragePriceByCategory(category) {
        let amount = 0;
        let count = 0;

        this.productList.forEach(element => {
            if (element.category == category) {
                amount += element.price;
                count += 1;
            }
        });

        if (count == 0) throw Error();
        return amount / count;
    }

    getAveragePriceGroupByCategory() {
        let valueCounter = new Map();
        let returnValue = new Map();

        this.productList.forEach(element => {
            if (valueCounter.has(element.category)) {
                valueCounter.get(element.category).value += element.price;
                valueCounter.get(element.category).counter += 1;
            }
            else {
                valueCounter.set(element.category, { value: element.price, counter: 1 })
            }
        });

        for (const key of valueCounter.keys()) {
            returnValue.set(key, valueCounter.get(key).value / valueCounter.get(key).counter);
        }

        return Object.fromEntries(returnValue.entries());
    }
}