class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxFrequency = 0;
        let maxLength = 0;
        let count = new Map();
        for(let right = 0; right < s.length; right++){
            let char = s[right];
            count.set(char, (count.get(char) || 0) + 1);
            maxFrequency = Math.max(maxFrequency, count.get(char));
            while(right - left + 1 - maxFrequency > k){
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1); 
        }
        return maxLength;
    }
}
