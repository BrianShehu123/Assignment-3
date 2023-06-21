const shoppingCart = require('./shoppingCart');

describe("add items in the cart, removes items in the cart and calculates the totral price in the end", () => {

    beforeEach(() => {
        // Reseting the cart before each test
        cart = {};
    });

    test("adding items to the cart", () => {
        expect(shoppingCart.addToCart({name: "Ham", cost: 7}, 2)).toBe(undefined);
    })

    test("removing items from the cart", () => {
        expect(shoppingCart.removeFromCart({name: "Ham", cost: 7}, 1)).toBe(undefined);
    })

    test("calculating the items in the cart", () => {
        expect(shoppingCart.calculateTotal({name: "Ham", cost: 7}, 2)).toBe(14);
    })
})