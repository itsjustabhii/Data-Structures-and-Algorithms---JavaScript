/**
 * Check whether a number is even or odd and print the result.
 * @param {number} num - The number to check (expected to be a non-negative integer).
 *
 * Notes:
 * - This function logs a message to the console rather than returning a value.
 * - Negative inputs are treated as invalid and will produce an error message.
 *
 * Example:
 * isEvenOdd(4) // logs "Number is Even!"
 */
function isEvenOdd(num){
    // Input validation: ensure a non-negative number was provided
    if(num < 0){
        console.log('Enter a valid number!')
    } else if(num % 2 == 0){
        // Even numbers have remainder 0 when divided by 2
        console.log('Number is Even!')
    } else {
        // If not negative and not even, the number is odd
        console.log('Number is Odd!')
    }
}

// Example invocation
isEvenOdd(4)