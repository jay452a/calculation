/**
 * Created by 56234 on 2018/10/17.
 */
function set() {  // es5模拟es6的set集合
    var item = {}
    this.add = function (value) {
        if(!this.has(value)) {
            item[value] = value
        }
    }
    this.clear = function () {
        item = {}
    }
    this.size = function () {
        return Object.keys(item).length
    }
    this.has = function (value) {
        return item.hasOwnProperty(value)
    }
    this.delete = function (value) {
        if(this.has(value)) {
            delete item[value]
            return true
        }else{
            return false
        }
    }
    this.values = function () {
       var value = []
        for(var key in item) {
           value.push(item[key])
        }
        return value
    }
}
var setObj = new set()
setObj.add(1)
console.log(setObj.values())
console.log(setObj.has())