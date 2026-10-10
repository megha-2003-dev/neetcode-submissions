class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for (let i = 0; i<nums.length; i++){
        //     for(let j = i+1; j<nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return true
        //         }
        //     }
        // }
        // return false;
        // let newNums = nums.sort((a,b) => a-b);
        // for (let i = 0; i<newNums.length - 1; i++){
        //     if(newNums[i] === newNums[i+1]){
        //         return true;
        //     }
        // }
        // return false;
        return new Set(nums).size !== nums.length;
    }
}
