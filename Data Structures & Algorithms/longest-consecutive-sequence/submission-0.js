class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;
        for(let num of set){
            if(!set.has(num-1)){
                let count = 1;
                while(set.has(num+1)){
                    count++;
                    num++;
                }
                longest = Math.max(longest, count);
            }

            
        }
        return longest;
    }
}
