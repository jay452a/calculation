/**
 * Created by 56234 on 2018/10/16.
 */
// 单向链表
function linkedList() {
    var Node = function (element) {
    this.element = element
    this.next = null
    }
    var length = 0
    var head = null
    this.append = function (element) {
        var node = new Node(element)
        var current
        if(head == null) {
            head = node
        } else {
            current = head //让head和current建立浅复制的关系
            while (current.next) {
                console.log(current,2)
                current = current.next //current 和 head的子项建立浅复制关系
                //类似此种关联 b 跟 a的b属性关联，b新建一个属性, a的b也出现一个新属性
                /*var a = {a:1,b:{a:2}}
                var b=a.b
                b.c= 3
                console.log(a,'a')
                console.log(b,'b')*/
            }
            current.next = node
        }
        length++
        console.log(head,'head') //head为最终得到的值
    }
    this.insert = function (element,position) { //找出插入的位置，将后一项往后移
        if(position>=0 && position<=length) {
            var node = new Node(element)  //插入项
            var current = head
            if(position === 0) {
                node.next = current
                head = node
            }else{
                var prev //表示插入位置的前一项
                var index = 0
                while (index++ < position) {
                    prev = current //prev表示插入位置的前一项
                    current = current.next //位置后移
                }
                node.next = current  //node表示当前插入项，node.next只想current表示current在插入项之后
                prev.next = node  // prev.next只想插入项
            }
            length++

        }else{
            return false
        }
        
    }
    this.removeAt = function (position) {
        if(position>-1 && position<length) {
            var current = head
            var prev
            var index = 0
            if(position === 0) {
                head = current.next
            }else{
              while (index++ < position) {
                  prev = current  //prev 和current和head建立联系
                  /*var a = {a:1, b:{a:2}}
                  var b = a
                  var c =b
                  b=b.b
                  c.b = b.b
                  console.log(a, 'a')*/
                  current = current.next
              }
                prev.next = current.next //将current同级的移除
            }
            length--
            return current
        }else{
            return null
        }

    }
    this.remove = function (element) {
        var position = this.indexOf(element)
        this.removeAt(position)
    }
    this.indexOf = function (element) {
        var index = -1
        var current = head
        while (current) {
            index++
            if(current.element === element) {
                return index
            }
            current = current.next
        }
        return -1
    }
    this.isEmpty = function () {
        return length === 0
    }
    this.size = function () {
        return length
    }
    this.getHead = function () {
        return head
    }
    this.toString = function () {
        var current = head
        var string = ''
        while (current) {
            string+=current.element + (current.next?'n':'')
            current = current.next
        }
        return string
    }
}
var obj = new linkedList()
obj.append('1')
obj.append('2')
obj.append('3')
console.log(obj)
obj.removeAt(1)
obj.insert('hehe',2)
console.log(obj.indexOf('3'),'index')


//双向链表
function doubleLinkedList() {
    var Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    var head = null
    var length = 0
    this.append = function (element) {
        var node = new Node(element)
        var current
        var previous
        if(head === null) {
            head = node
        }else{
            current = head
            previous = head
            while (current.next) {
                current = current.next
            }
            current.next = node
            node.prev = {element:previous.element}
        }
        length++
       console.log(head,'db')
    }
}

var doubleObj = new doubleLinkedList()
doubleObj.append('11')
doubleObj.append('12')
doubleObj.append('13')
