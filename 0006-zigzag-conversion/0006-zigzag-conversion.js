/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 도저히 제 머리로 풀 수 없어서, 솔루션을 확인했습니다.

var convert = function(s, numRows) {
  const zigzag = Array(numRows).fill().map((_, idx) => idx);
  zigzag.push(...zigzag.slice(1, -1).reverse());
    
  const rows = new Array(numRows).fill('');
    
  [...s].forEach((c, i) => (rows[zigzag[i % zigzag.length]] += c));
    
  return rows.join('');
};