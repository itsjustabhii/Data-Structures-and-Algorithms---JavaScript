/** Neetcode Hard - Sliding Window
 * Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
 *
 * You may assume that the correct output is always unique.
 * Example 1:
 * Input: s = "OUZODYXAZV", t = "XYZ"
 * Output: "YXAZ"
 */

function minimumWindowSubstring(s, t) {
  const need = new Map();
  for (const ch of t) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let left = 0;
  let right = 0;
  let required = need.size;
  let formed = 0;
  const windowCounts = new Map();
  let minLen = Infinity;
  let minLeft = 0;

  while (right < s.length) {
    const char = s[right];
    windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

    if (need.has(char) && windowCounts.get(char) === need.get(char)) {
      formed += 1;
    }

    while (left <= right && formed === required) {
      const windowLen = right - left + 1;
      if (windowLen < minLen) {
        minLen = windowLen;
        minLeft = left;
      }

      const leftChar = s[left];
      windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);
      if (need.has(leftChar) && windowCounts.get(leftChar) < need.get(leftChar)) {
        formed -= 1;
      }
      left += 1;
    }

    right += 1;
  }

  return minLen === Infinity ? "" : s.slice(minLeft, minLeft + minLen);
}

// Example usage:
console.log(minimumWindowSubstring("OUZODYXAZV", "XYZ")); // "YXAZ"

export default minimumWindowSubstring;
