module.exports = function countCats(matrix) {
    //throw 'Not implemented';
    let result = 0,
        cat = '^^';

    for (let i = 0; i < matrix.length; i++) {
        let rowArr = matrix[i];
        for (let j = 0; j < rowArr.length; j++) {
            let el = rowArr[j];
            if (el === cat) {
                result++;
            }
        }
    }

    return result;
};