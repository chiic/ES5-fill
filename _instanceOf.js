function _instanceOf(aSon, pT) {
    if(aSon === undefined || aSon === null) {
        throw new Error('Cannot set undefined or null');
    } else {
        var proto = aSon.__proto__;
        while(proto !== null) {
            if(proto === pT.prototype) return true;
            proto = proto.__proto__;
        }
        return false;
    }
}

var p = _instanceOf({}, Function);
console.log(p)