//Funtion 1

function calculateTax(amount) {
    // 10% tax
    const tax = amount * 0.10;
    return tax;
    }
    const taxOnItem = calculateTax(5000)
    console.log(taxOnItem);

// Function 2

function convertToUpperCase(text) {

    return text.toUpperCase(); //build-in Javacript method that converts all letters to uppercase
    }

    const result = convertToUpperCase("david");
    console.log(result); 

// Function 3
function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
        return num2;
    }
    
console.log(findMaximum(17, 20))

//another way to write this code
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}
console.log(findMaximum(3, 20))

// Function 4

function isPalindrome(word) {

  const reversedWord = word.split("").reverse().join("");
  
  if (word!==reversedWord) {
    return false;
  } else {
    return true;
  }
}
console.log(isPalindrome("chelsea"));

//Function 5

function calculateDiscountedPrice(originalPrice, discountPercentage ) {
    const discountAmount = originalPrice * (discountPercentage/100)
    const discountedPrice = originalPrice - discountAmount 
    return discountedPrice;
}
console.log(calculateDiscountedPrice(1000, 20));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


