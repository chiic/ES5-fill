Array.prototype.reReduce = function(cb, initialValue) {
    var _self = this;
    if(!_self.length) {
        throw new TypeError('Reduce of empty array with no initial value')
    }
    var _initValue = initialValue ? initialValue : _self[0];
    for(var i = 1; i < _self.length; i++) {
        _initValue = cb(_initValue, _self[i], i, _self)
    }
    return _initValue;
}
// 
var aa = [1,2,3,4].reReduce((a, b, index, arr) => {
    return a+b;
});
var bb = [[1,2], [3,4], [5,6]].reReduce((a, b, index, arr) => {
    return a.concat(b);
});
console.log(aa, bb); // 10  [1,2,3,4,5,6]