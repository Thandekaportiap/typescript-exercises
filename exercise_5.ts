class Calculator {
    add(num1: number, num2: number): number {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Inputs must be numbers');
      }
      return num1 + num2;
    }
  
    subtract(num1: number, num2: number): number {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Inputs must be numbers');
      }
      return num1 - num2;
    }
  
    multiply(num1: number, num2: number): number {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Inputs must be numbers');
      }
      return num1 * num2;
    }
  
    divide(num1: number, num2: number): number {
      if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Inputs must be numbers');
      }
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    }
  }
  
  // Usage example
  const calculator = new Calculator();
  console.log(calculator.add(5, 2)); // Output: 7
  console.log(calculator.subtract(5, 2)); // Output: 3
  console.log(calculator.multiply(5, 2)); // Output: 10
  console.log(calculator.divide(5, 2)); // Output: 2.5
  console.log(calculator.divide(5, 0)); // Throws an error: Cannot divide by zero