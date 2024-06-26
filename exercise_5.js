var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        return num1 + num2;
    };
    Calculator.prototype.subtract = function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        return num1 - num2;
    };
    Calculator.prototype.multiply = function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        return num1 * num2;
    };
    Calculator.prototype.divide = function (num1, num2) {
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            throw new Error('Inputs must be numbers');
        }
        if (num2 === 0) {
            throw new Error('Cannot divide by zero');
        }
        return num1 / num2;
    };
    return Calculator;
}());
// Usage example
var calculator = new Calculator();
console.log(calculator.add(5, 2)); // Output: 7
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(calculator.multiply(5, 2)); // Output: 10
console.log(calculator.divide(5, 2)); // Output: 2.5
console.log(calculator.divide(5, 0)); // Throws an error: Cannot divide by zero
