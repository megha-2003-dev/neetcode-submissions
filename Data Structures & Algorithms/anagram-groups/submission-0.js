class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let groups = {};
        for (let str of strs){
            let key = str.split("").sort().join("")
            if(groups[key]){
                groups[key].push(str)
            } else{
                groups[key] = [str]
            }
        }
        return Object.values(groups);
    }
}
