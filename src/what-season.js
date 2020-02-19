module.exports = function getSeason(date) {
    //throw 'Not implemented';
    let desiredSeason = 'Unable to determine the time of year!',
        desiredMonth;

    if (!date) {
        return desiredSeason;
    } else {
        desiredMonth = date.getMonth();
    }

    if (!(Object.prototype.toString.call(date) === '[object Date]')) throw new Error('Error');

    let seasons = {
        'winter': [11, 0, 1],
        'spring': [2, 3, 4],
        'summer': [5, 6, 7],
        'autumn': [8, 9, 10]
    };

    for (let season in seasons) {
        if (seasons[season].includes(desiredMonth)) {
            desiredSeason = season;
        }
    }
    return desiredSeason;
};