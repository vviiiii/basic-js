module.exports = function createDreamTeam(members) {
    //throw 'Not implemented';
    let secretName = '';
    if (!Array.isArray(members)) return false;

    secretName = members.filter(el => typeof el === 'string').map(element => {
        return element.trim()[0].toUpperCase();
    });

    return secretName.sort().join('');
};