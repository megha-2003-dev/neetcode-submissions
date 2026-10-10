class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";
        for (let str of strs){
            let length = str.length;
            encoded = encoded + length + "#" + str;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = [];
        let  i = 0;
        while (i< str.length){
            let sepratorIndex = str.indexOf("#", i);
            let length = Number(str.slice(i, sepratorIndex));
            let start = sepratorIndex + 1;
            let end = start + length;
            let word = str.slice(start, end);
            result.push(word);
            i = end;
        }
        return result;
    }
}
