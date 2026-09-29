/**
 * Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.
 * Example 1:
Pattern - Two Pointers → Slow & Fast Pointer → Floyd's Cycle Detection

Input: head = [0,1,2,3]
Output: [3,2,1,0]
Time:  O(n)
Space: O(1)
 */

let head = [0, 1, 2, 3]
function reverseList(head) {
    let prev = null
    let current = head

    while (current !== null) {
        let next = current.next
        current.next = prev

        prev = current
        current = next
    }
    return prev
}

console.log(reverseList(head))