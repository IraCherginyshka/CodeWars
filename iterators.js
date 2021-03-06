const fromToObject = {
    from: 1,
    to: 4
};

const object = {
    first: 'My',
    second: 'name',
    third: 'is',
    fourth: 'Iryna'
};

function iterateObjectByKey(obj) {
    obj[Symbol.iterator] = function () {
        return {
            index: 0,
            keys: Object.keys(obj),
            next() {
                return {
                    value: this.keys[this.index],
                    done: !(this.index++ < this.keys.length)
                };
            }
        };
    };
    for (const element of obj) {
        console.log(element);
    }
}
iterateObjectByKey(object);

function iterateObjectByValue(obj) {
    obj[Symbol.iterator] = function () {
        return {
            index: 0,
            values: Object.values(obj),
            next() {
                return {
                    value: this.values[this.index],
                    done: !(this.index++ < this.values.length)
                };
            }
        };
    };

    for (const element of obj) {
        console.log(element);
    }
}
iterateObjectByValue(object);

function iterateObjectByKeyAndValue(obj) {
    obj[Symbol.iterator] = function () {
        return {
            index: 0,
            keys: Object.keys(obj),
            next() {
                return {
                    value: {
                        key: this.keys[this.index],
                        value: obj[this.keys[this.index]]
                    },
                    done: !(this.index++ < this.keys.length)
                };
            }
        };
    };
    for (const element of obj) {
        console.log(element);
    }
}
iterateObjectByKeyAndValue(object);

function iterateFromTo(obj) {
    obj[Symbol.iterator] = function () {
        return {
            current: this.from,
            last: this.to,
            next() {
                return {
                    value: this.current,
                    done: !(this.current++ <= this.last)
                };
            }
        };
    };

    for (const element of obj) {
        console.log(element);
    }
}
iterateFromTo(fromToObject);
