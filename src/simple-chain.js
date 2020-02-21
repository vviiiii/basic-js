const chainMaker = {
    'chain': [],
    getLength() {
        //throw 'Not implemented';
        return this.chain.length;
    },
    addLink(value) {
        //throw 'Not implemented';
        if (typeof value !== 'undefined') {
            this.chain.push(`( ${value} )`);
        } else {
            this.chain.push('( )');
        }
        return this;
    },
    removeLink(position) {
        //throw 'Not implemented';
        if (!Number.isInteger(position) || position < 1 || position > this.getLength()) {
            this.chain = [];
            throw Error;
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }

    },
    reverseChain() {
        //throw 'Not implemented';
        this.chain.reverse();
        return this;
    },
    finishChain() {
        //throw 'Not implemented';
        let resString = this.chain.join('~~');
        this.chain = [];
        return resString;
    }
};

module.exports = chainMaker;