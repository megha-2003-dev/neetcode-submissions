class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left = 0;
        let windowSize = s1.length;
        if (s1.length > s2.length) {
            return false;
        }
        const count1 = new Map();
        for (let char of s1) {
            count1.set(char, (count1.get(char) || 0) + 1);
        }
        const count2 = new Map();
        for (let i = 0; i < windowSize; i++) {
            count2.set(s2[i], (count2.get(s2[i]) || 0) + 1);
        }

        function matches(count1, count2, s1) {
            for (let char of s1) {
                if (count1.get(char) !== count2.get(char)) {
                    return false;

                }
            }
            return true;
        }

        if (matches(count1, count2, s1)) {
            return true;
        }
        for (let right = windowSize; right < s2.length; right++) {
            count2.set(s2[left], count2.get(s2[left]) - 1);
            left++;
            count2.set(s2[right], (count2.get(s2[right]) || 0) + 1);
            if (matches(count1, count2, s1)) {
                return true;
            }
        }
        return false;
    }
}
