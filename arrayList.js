class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
    }
    pop() {
        const lastEle = this.data[this.length - 1]
        delete this.data[this.length - 1];
        this.length--;
        return lastEle;
    }
    get(index) {
        return this.data[index];
    }
    delete(index) {
        const returnVal = this.data[index];
        this._collapseTo(index);
        return returnVal;
    }
    _collapseTo(value) {
        for (let i = value; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}