const _ = {};

_.NewClass = class {
    constructor(){
        this.count = 0;
    }
    getCount () {
        return this.count;
    }
}

_.SubClass = class extends _.NewClass{
    
} 
module.exports = _;