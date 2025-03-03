import { assert, describe, expect, it } from "vitest";
import { ProductStatistics } from "./ProductStatistics";
import { Product } from "./Product";

describe("Constructor", () => {
    it("tests if it throws an error for an empty list", () => {
        assert.throws(() => {
            new ProductStatistics([]);
        });
    });

    it("tests if it throws an error for a null list", () => {
        assert.throws(() => {
            new ProductStatistics(null);
        });
    });

    it("tests if it throws an error for an undefined list", () => {
        assert.throws(() => {
            new ProductStatistics(undefined);
        });
    });
});

describe("functions", () => {
    let list = [
        new Product("asd1", "asdasd", 1),
        new Product("asd2", "asdasd", 2),
        new Product("asd3", "asdasd1", 3),
        new Product("asd4", "asdasd1", 4),
    ]
    let list1 = [
        new Product("asd2", "asdasd", 20),
        new Product("asd1", "asdasd", 10),
        new Product("asd3", "asdasd1", 30),
    ]

    let stat = new ProductStatistics(list);
    let stat1 = new ProductStatistics(list1);

    describe("getAveragePrice", () => {
        it("passes", () => {
            assert.strictEqual(stat.getAveragePrice(), 10 / 4);
        });
        it("passes1", () => {
            assert.strictEqual(stat1.getAveragePrice(), 60 / 3);
        });
    });

    describe("getMostExpensiveProduct", () => {
        it("passes", () => {
            assert.strictEqual(stat.getMostExpensiveProduct(), list[3]);
        });
        it("passes1", () => {
            assert.strictEqual(stat1.getMostExpensiveProduct(), list1[2]);
        });
    });

    describe("getMostExpensiveProduct", () => {
        it("passes", () => {
            assert.strictEqual(stat.getMostExpensiveProduct(), list[3]);
        });
        it("passes1", () => {
            assert.strictEqual(stat1.getMostExpensiveProduct(), list1[2]);
        });
    });

    describe("getCheapestProduct", () => {
        it("passes", () => {
            assert.strictEqual(stat.getCheapestProduct(), list[0]);
        });
        it("passes1", () => {
            assert.strictEqual(stat1.getCheapestProduct(), list1[1]);
        });
    });

    describe("getAveragePriceByCategory", () => {
        it("passes", () => {
            assert.strictEqual(stat.getAveragePriceByCategory("asdasd"), 3 / 2);
        });
        it("passes1", () => {
            assert.strictEqual(stat1.getAveragePriceByCategory("asdasd1"), 30 / 1);
        });

        it("throws an error", () => {
            assert.throws(() => {
                stat1.getAveragePriceByCategory("test");
            });
        });
    });

    describe("getAveragePriceGroupByCategory", () => {
        it("passes", () => {
            assert.deepEqual(stat.getAveragePriceGroupByCategory(), { "asdasd": 3 / 2, "asdasd1": 7 / 2 });
        });
        it("passes1", () => {
            assert.deepEqual(stat1.getAveragePriceGroupByCategory(), { "asdasd": 30 / 2, "asdasd1": 30 });
        });
    });
});