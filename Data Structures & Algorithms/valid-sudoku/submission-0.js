class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for(let nums of board){
            let filtered = nums.filter(num => num !== ".");
            let set = new Set(filtered);
            if(set.size !== filtered.length){
                return false;
            }
        }
        for(let i = 0; i < 9; i++){
            let nums = [];
            for(let j = 0; j < 9; j++){
                nums.push(board[j][i]);
            }
            let filtered = nums.filter(num => num!== ".");
            let set = new Set(filtered);
            if(set.size !== filtered.length){
                return false;
            } 
        }
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                let nums = [];
                for(let r = 0; r < 3; r++){
                    for(let c = 0; c < 3; c++){
                        nums.push(board[i * 3 + r][j * 3 + c]);
                    }
                }
                let filtered = nums.filter(num => num !== ".");
                let set = new Set(filtered);
                if(set.size !== filtered.length){
                    return false;
                }
            }
        }
        return true;
    }
}
