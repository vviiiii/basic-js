const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    //throw 'Not implemented';
    if (typeof sampleActivity != 'string' ||
        Number.isNaN(parseFloat(sampleActivity)) ||
        parseFloat(sampleActivity) > 15 ||
        parseFloat(sampleActivity) <= 0) return false;

    let rateConstant = 0.693 / HALF_LIFE_PERIOD,
        year = (Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity))) / rateConstant;

    return Math.ceil(year);
};