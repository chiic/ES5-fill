Function.prototype._call = function() {
    var _self = arguments[0], args = [];
    for(var i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    if(_self === null) {
        args.length > 0 ? eval('this(' + args + ')')
                        : this(); 
    } else {
        _self.fn = this;
        eval('_self.fn(' + args + ')');
    }
}