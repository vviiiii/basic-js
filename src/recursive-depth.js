module.exports = class DepthCalculator {
    calculateDepth(arr) {
        // throw 'Not implemented';
        if (Array.isArray(arr)) {
            let depth = arr.reduce((maxDepth, element) => {
                return Math.max(this.calculateDepth(element), maxDepth);
            }, 0);
            return depth + 1;
        } else return 0;
    }
}