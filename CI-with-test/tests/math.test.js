const { add, subtract, multiply, divide } = require("../src/math");

test("adds numbers correctly", () => {
    expect(add(5, 2)).toBe(7);
});

test("subtracts numbers correctly", () => {
    expect(subtract(10, 3)).toBe(7);
});

test("multiplies numbers correctly", () => {
    expect(multiply(4, 3)).toBe(12);
});

test("divides numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
});

test("throws error for divide by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
