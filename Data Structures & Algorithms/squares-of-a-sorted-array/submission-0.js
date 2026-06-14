class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(arr) {
        let left = 0;
        let right = arr.length - 1;

        const result = Array(arr.length);
        let k = right;

        while (left <= right) {
            const positiveLeft = Math.abs(arr[left]);
            const positiveRight = Math.abs(arr[right]);

            if (positiveLeft > positiveRight) {
                result[k] = positiveLeft ** 2;
                left++;
            } else {
                result[k] = positiveRight ** 2;
                right--;
            }

            k--;
        }

        return result;
    }
}
