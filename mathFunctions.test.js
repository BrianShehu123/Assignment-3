const mathFunctionsTest = require('./mathFunctions');

describe('we are doing addition', () => {
    test('should add two numbers', () => {
    expect(mathFunctionsTest.add(-1, 2)).toBe(1);
  })
})


describe('we are doing subtraction', () => {
    test('should subtract two numbers', () => {
    expect(mathFunctionsTest.subtraction(1, 2)).toBe(-1);
  })
})

describe('we are doing multiplication', () => {
    test('should multiply two numbers', () => {
    expect(mathFunctionsTest.multiplication(-1324, 0)).toBe(0);
  })
})

describe('we are doing division', () => {
    test('should divide two numbers', () => {
    expect(mathFunctionsTest.division(1, 0)).toBe("Error: Division by zero");
  })
})