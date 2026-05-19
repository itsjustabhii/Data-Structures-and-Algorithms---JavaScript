/**
 * Valid Parentheses (Stacks)
 * You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.
 *
 * The input string s is valid if and only if:
 * - Every open bracket is closed by the same type of close bracket.
 * - Open brackets are closed in the correct order.
 * - Every close bracket has a corresponding open bracket of the same type.
 *
 * Return true if s is a valid string, and false otherwise.
 */

function isValid(s){
    // Use a stack to keep track of opening brackets
    const stack = []

    for (let i = 0; i < s.length; i++) {
        const char = s[i]

        // If the current character is an opening bracket, push it onto the stack
        if (char === '{' || char === '(' || char === '[') {
            stack.push(char)
        } else {
            // For a closing bracket, pop the most recent opening bracket
            let prevVal = stack.pop()

            // If the popped opening bracket does not match the current closing bracket, the string is invalid
            if (prevVal === '{' && char !== '}') return false
            if (prevVal === '(' && char !== ')') return false
            if (prevVal === '[' && char !== ']') return false
        }
    }

    // The string is valid only if there are no unmatched opening brackets left in the stack
    return stack.length === 0
}

console.log(isValid("()[{]{}")) // false
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false