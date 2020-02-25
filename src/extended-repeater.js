function repeatString(str, repeatTimes, separator, addition) {
    if (+repeatTimes <= 1) return str;
    else return str + separator + repeatString(str, +repeatTimes - 1, separator);
}

module.exports = function repeater(str, options) {
    //throw 'Not implemented';
    let { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = options;
    let resString = '' + str;
    let result = '';

    if ('' + addition != 'undefined') {
        for (let j = 0; j < additionRepeatTimes; j++) {
            if (j === 0) {
                resString += addition;
            } else {
                resString += additionSeparator + addition;
            }
        }
    }

    for (let i = 0; i < repeatTimes; i++) {
        if (i === 0) {
            result += resString;
        } else {
            result += separator + resString;
        }

    }
    return result;
}