//TODO: implement jQuery functions as dfineUtil
(function() {

    var _array = Array.prototype;
    _array.contains = function(list) {
        var count = 0;
        if(!(list instanceof Array)) {
            list = [list];
        }
        for(var i = 0; i < list.length; i++) {
            for(var j = 0; j < this.length; j++) {
                if(list[i] === this[j]) {
                    count++;
                    break;
                }
            }
        }
        return count == list.length;
    };
    _array.each = function(callback) {
        var _this = this;
        for(var i = 0; i < _this.length; i++) {
            callback.call(_this, _this[i], i)
        }
    };
    _array.map = function(callback) {
        var _this = this, res = [];
        _this.each(function(v, i) {
            res[i] = callback.call(_this, v, i);
        });
        return res;
    };
    _array.collect = function(callback) {
        var _this = this, collects = [];
        _this.each(function(v, i) {
            var satisfied = callback.call(_this, v, i);
            if(satisfied) {
                collects.push(v)
            }
        });
        return collects;
    };

    _array.trim = function() {
        var _this = this;
        _this.each(function(v, i) {
            if(typeof v == 'string') {
                _this[i] = v.trim();
            }
        });
    };

    var dFine;
    dFine = function() {};
    dFine.prototype = {

    };

    dFine.classes = {};

    /**
     * JavaScript has five pure types: object, function, string, number & boolean
     * we will define some new types and modify few of existing types
     * such as array <- object, regexp <- object float <- number, integer <- number
     * @param target
     */
    dFine.typeOf = function(target) {

    };
    dFine.is = function(target, type) {
        return
    };

    dFine.isObject = function() {

    };

    dFine.isFunction = function() {

    };

    dFine.isRegExp = function() {

    };

    dFine.isArray = function() {

    };

    dFine.isNumber = function() {

    };

    dFine.isInteger = function() {

    };

    dFine.isFloat = function() {

    };

    dFine.merge = function() {
        var target = arguments[0],
            sources = arguments.collect(function(v, i) {
                return i > 0 && v instanceof Object
            }),
            resolver = arguments[arguments.length - 1] instanceof Function ? arguments[arguments.length - 1] : undefined,
            deep = arguments[arguments.length - 1] instanceof Boolean ? arguments[arguments.length - 1]
                : (arguments[arguments.length - 2] instanceof Boolean ? arguments[arguments.length - 2] : true);

    };

    dFine.extend = function() {

    };

    dFine.clazz = function(origin, prototype) {
        var name = origin.split(' extends ')[0],
            parents = origin.split(' extends ')[1];
        if(parents) {
            parents = parents.split(',').trim();
        }
        var Type = dFine.classes[name] = function() {
            var type = name;
            var origin = name + parents.map(function(v, i) { return '>' + v; }).toString();
            this.df9 = {
                typeOf: function() {
                    return type;
                },
                instanceOf: function(type) {
                    return parents.contains(type)
                }
            }
        };

        Type.prototype = prototype instanceof Function ? new prototype() : prototype;
        return Type;
    };

    window.dFine = dFine;
})();