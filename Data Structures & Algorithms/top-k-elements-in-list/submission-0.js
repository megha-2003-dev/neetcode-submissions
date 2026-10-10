class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = {};

        for(let num of nums){
            if(count[num]){
                count[num]++
            } else {
                count[num] = 1;
            }
        }
        let newEntries = Object.entries(count);
        let sortEntries = newEntries.sort((a,b) => b[1] - a[1]);
        let countEntries = sortEntries.slice(0, k);
        let result = countEntries.map(pair => Number(pair[0]));
        return result;
        
    }
}
