class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr) {
        const map = new Map();

        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);

            if (map.get(arr[i]) > 1) {
                return true;
            }
        }

        return false;
    }
}
