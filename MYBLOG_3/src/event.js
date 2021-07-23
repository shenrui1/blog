'use strict';
const eventProxy = {
    onObj: {},
    oneObj: {},

    on: function(key, fn) {
        if(this.onObj[key] === undefined) {
            this.onObj[key] = [];
        }
        fn(this.onObj[key]);
    },

    // one: function(key, fn) {
    //     if(this.oneObj[key] === undefined) {
    //         this.oneObj[key] = [];
    //     }
    //     this.oneObj[key].push(fn);
    // },

    // off: function(key) {
    //     this.onObj[key] = [];
    //     this.oneObj[key] = [];
    // },

    emit: function() {
        let key, args;
        if(arguments.length == 0) {
            return false;
        }
        key = arguments[0];
        args = [].concat(Array.prototype.slice.call(arguments, 1));
        this.onObj[key] = args[0];
    }
};

export default eventProxy;