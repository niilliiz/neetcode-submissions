class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {
        const map = new Map();

        for (let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                return true;
            }

            map.set(arr[i], 1);
        }

        return false;
    }
}
