import { assert, assertType, describe, it } from "vitest";
import { Product } from "./Product";

it("passes", () => {
    assert.doesNotThrow(() => {
        let product = new Product("asd", "asdasd", 123);

        assert.strictEqual(product.name, "asd");
        assert.strictEqual(product.category, "asdasd");
        assert.strictEqual(product.price, 123);
    })
})

describe("Name argument", () => {
    it("tests if it throws error for an empty name string", () => {
        assert.throws(() => {
            new Product("", "asd", 100);
        });
    });

    it("tests if it throws error for a number name", () => {
        assert.throws(() => {
            new Product(123, "asd", 100);
        });
    });

    it("tests if it throws error for a NULL name string", () => {
        assert.throws(() => {
            new Product(null, "asd", 100);
        });
    });

    it("tests if it throws error for a undefined name string", () => {
        assert.throws(() => {
            new Product(undefined, "asd", 100);
        });
    });
});



describe("Category argument", () => {
    it("tests if it throws error for an empty category string", () => {
        assert.throws(() => {
            new Product("asd", "", 100);
        });
    });

    it("tests if it throws error for a category name", () => {
        assert.throws(() => {
            new Product("asd", 123, 100);
        });
    });

    it("tests if it throws error for a NULL category string", () => {
        assert.throws(() => {
            new Product("asd", null, 100);
        });
    });

    it("tests if it throws error for a undefined category string", () => {
        assert.throws(() => {
            new Product("asd", undefined, 100);
        });
    });
});


describe("Price argument", () => {
    it("tests if it throws error for a 0 price", () => {
        assert.throws(() => {
            new Product("asd", "asd", 0);
        });
    });

    it("tests if it throws error for a < 0 price", () => {
        assert.throws(() => {
            new Product("asd", "asd", -13);
        });
    });

    it("tests if it throws error for a NULL price", () => {
        assert.throws(() => {
            new Product("asd", "asd", null);
        });
    });

    it("tests if it throws error for an undefined price", () => {
        assert.throws(() => {
            new Product("asd", "asd", undefined);
        });
    });
});

