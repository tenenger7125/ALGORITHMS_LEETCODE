/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isLineOk = board.every((row, idx) => {
        const rowObj = row.reduce((acc,cur)=>{
            if (!Number.isInteger(parseInt(cur))) return acc;
            acc[cur] === undefined ? acc[cur] = 1 : acc[cur]++;

            return acc;
        },{})
        
        const columnObj = board.map(row => row[idx]).reduce((acc,cur)=>{
            if (!Number.isInteger(parseInt(cur))) return acc;
            acc[cur] === undefined ? acc[cur] = 1 : acc[cur]++;

            return acc;
        },{});
        
        return Object.values(rowObj).every(count=>count === 1) && Object.values(columnObj).every(count=>count === 1);
    });
    
    return isLineOk && isSquareOk(board);
};
    
function isSquareOk (board) {
    const result = []
    
    for (let i=0; i<board.length; i += 3) {
        
        for (let j=0; j<board.length; j += 3) {
            const square = [];
            
            for (let k=i; k<i+3; k++) {
                
                for (let l=j; l<j+3; l++) {
                    square.push(board[k][l])
                }
            }

            const squareObj = square.reduce((acc,cur)=>{
                if (Number.isInteger(parseInt(cur))) {
                    acc[cur] === undefined ? acc[cur] = 1 : acc[cur]++;
                }

                return acc;
            },{})

            if (Object.values(squareObj).every(count=>count === 1) === false) return false
        }
    }
    
    return true;
}