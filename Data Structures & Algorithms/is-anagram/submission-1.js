class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        // let countS = {};
        // let countT = {};
        // for (let char of s){
        //     if(countS[char]){
        //         countS[char]++
        //     } else {
        //         countS[char] = 1;
        //     }
        // }
        // for (let char of t){
        //     if(countT[char]){
        //         countT[char]++
        //     } else {
        //         countT[char] = 1;
        //     }
        // }
        // for (let key in countS){
        //     if(countS[key] !== countT[key]){
        //         return false;
        //     }
        // }
        // return true;
        let sSort = s.split("").sort().join();
        let tSort = t.split("").sort().join();
        return sSort == tSort;
    
    }
}
