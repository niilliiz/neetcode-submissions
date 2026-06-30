class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let maxArea = 0;

        while (l < r) {
            const width = r - l;
            const minH = Math.min(heights[l], heights[r]);
            const currentArea = width * minH;

            maxArea = Math.max(currentArea, maxArea);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
