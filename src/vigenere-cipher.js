class VigenereCipheringMachine {
    constructor(modification = true) {
        this.modification = modification;
    }

    encrypt(message, key) {
        if (!message || !key)
            throw new Error();

        let msg = message.toUpperCase();
        let keyMsg = key.repeat(Math.ceil(msg.length / key.length)).slice(0, msg.length).toUpperCase();

        let encryptArr = [];

        for (let i = 0, j = 0; i < msg.length; i++) {
            if (msg[i].toUpperCase() != msg[i].toLowerCase()) {
                encryptArr.push(String.fromCharCode(((msg.charCodeAt(i) + keyMsg.charCodeAt(j)) % 26 + 1) + 64));
                j++;
            } else {
                encryptArr.push(msg[i]);
            }
        }

        return this.modification ? encryptArr.join('') : encryptArr.reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key)
            throw new Error();

        let msg = message.toUpperCase();
        let keyMsg = key.repeat(Math.ceil(msg.length / key.length)).slice(0, msg.length).toUpperCase();

        let encryptArr = [];
        let j = 0;

        for (let i = 0, j = 0; i < msg.length; i++) {
            let resChar = '';
            if (msg[i].toUpperCase() != msg[i].toLowerCase()) {
                encryptArr.push(String.fromCharCode(((msg.charCodeAt(i) + 26 - keyMsg.charCodeAt(j)) % 26 + 1) + 64));
                j++;
            } else {
                encryptArr.push(msg[i]);
            }
        }

        return this.modification ? encryptArr.join('') : encryptArr.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;