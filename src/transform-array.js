module.exports = function transform(arr) {
    //throw 'Not implemented';
    let resArr = [];

    if (!Array.isArray(arr)) throw new Error('Not array');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '--discard-next') {
            if (i + 1 < arr.length) {
                i++;
            }
        } else if (arr[i] === '--discard-prev') {
            resArr.pop();
        } else if (arr[i] === '--double-prev') {
            if (arr[i - 1] !== undefined) {
                resArr.push(arr[i - 1]);
            }
        } else if (arr[i] === '--double-next') {
            if (arr[i + 1] !== undefined) {
                resArr.push(arr[i + 1]);
            }
        } else {
            resArr.push(arr[i]);
        }
    }
    return resArr;
};