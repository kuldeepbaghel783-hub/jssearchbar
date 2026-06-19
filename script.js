// Arrow Function returning a Promise
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }
    });
};

// Test Case 1
divideNumbers(10, 2)
    .then(result => console.log("Case 1:", result))
    .catch(error => console.log("Case 1:", error));

// Test Case 2
divideNumbers(20, 4)
    .then(result => console.log("Case 2:", result))
    .catch(error => console.log("Case 2:", error));

// Test Case 3
divideNumbers(15, 3)
    .then(result => console.log("Case 3:", result))
    .catch(error => console.log("Case 3:", error));

// Test Case 4 (Division by Zero)
divideNumbers(25, 0)
    .then(result => console.log("Case 4:", result))
    .catch(error => console.log("Case 4:", error));

// Test Case 5
divideNumbers(100, 5)
    .then(result => console.log("Case 5:", result))
    .catch(error => console.log("Case 5:", error));
