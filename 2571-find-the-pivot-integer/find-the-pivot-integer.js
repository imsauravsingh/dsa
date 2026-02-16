/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const totalSum = n * (n+1) / 2;
    const output = Math.sqrt(totalSum);

    return Number.isInteger(output) ? output : -1;
};

// Time: O(n)
// Space = O(1)