function _instanceOf(aSon, pT) {
    if(aSon === undefined || aSon === null) {
        throw new Error('Cannot set undefined or null');
    } else {
        var proto = Object.getPrototypeOf(aSon);
        while(proto !== null) {
            if(proto === pT.prototype) return true;
            proto = Object.getPrototypeOf(proto);
        }
        return false;
    }
}

var p = _instanceOf(undefined, Object);
console.log(p)