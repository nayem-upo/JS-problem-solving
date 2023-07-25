// Problem 1: Create a function that takes a string as input and returns the reversed
// version of the string without using the built -in reverse() method.

const reverseString = (string) => {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
console.log(reverseString("hello world")); // Output: dlrow olleh



// Problem 2 : Create a function that takes an array of numbers as input and returns
// the sum of all positive numbers in the array.

const sum = (array) => {
    const newArray = array.filter(positive => positive > 0);
    let summation = 0;
    for (let i = 0; i < newArray.length; i++) {
        summation += newArray[i];
    }
    return summation;
};

console.log(sum([2, -5, 10, -3, 7])); // Output: 19



// Problem 3: Write a JavaScript program to find the most frequent element in an
// array and return it.

const findFrequentElement = (array) => {
    const frequencyMap = {};
    let mostFrequentElement;
    let maxFrequency = 0;

    for (const num of array) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        }
        else {
            frequencyMap[num] = 1;
        }

        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
};
console.log(findFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5])) // Output: 3



// Problem 5: Implement a simple JavaScript calculator.The calculator should take
// two numbers and an operator(+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
        if(operator === '+'){
            return num1 + num2;
        }
        else if(operator === '-'){
            return num1 - num2;
        }
        else if(operator === '*'){
            return num1 * num2;
        }
        else if(operator === '/'){
            return num1 / num2;
        }
        else if(operator === '%'){
            return num1 % num2;
        }

}
console.log(calculate(10, '+', 4)); // Output: 14



// Problem 6: Create a program that generates a random password of a specified length.The password
// should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(passLength) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()_-+=<>?/{}~';

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

    let password = '';

    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}
console.log(generateRandomPassword(8)); // Output: Random Password



// Problem 7: Implement a function that converts a Roman numeral to an integer.The function should
// take a Roman numeral string(e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(romanNumeral) {
    const romanNumeralsMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentSymbol = romanNumeralsMap[romanNumeral[i]];
        const nextSymbol = romanNumeralsMap[romanNumeral[i + 1]];

        if (nextSymbol && currentSymbol < nextSymbol) {
            result -= currentSymbol;
        }
        else {
            result += currentSymbol;
        }
    }

    return result;
}

console.log(romanToInt("XX")); // Output: 20



// Problem 8: Implement a JavaScript function to find the second smallest element
// in an array of numbers.The function should return the second smallest number.

function findSecondSmallest(array) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (const num of array) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        }
        else if (num < secondSmallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log(findSecondSmallest([5, 3, 8, 2, 9, 1, 7, 4, 6])); // Output: 2
