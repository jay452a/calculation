/**
 * Created by 56234 on 2018/10/17.
 */
function BinarySearchTree() {
    var Node = function(key){ //{1}声名一个数的节点
        this.key = key;
        this.left = null;
        this.right = null;
    };
    var root = null; //{2} 根元素
    this.insert = function (key) {
        var newNode = new Node(key)
        if(root===null) {
            root = newNode
        }else{
            insertNode(root, newNode)
        }
        function insertNode(node, newNode) {
           if(newNode.key < node.key) {  //二叉树左侧比父元素小
               if(node.left == null) {
                   node.left = newNode
               }else{
                   insertNode(node.left,newNode)
               }
           }else{  //二叉树右侧比父元素大
               if(node.right == null) {
                   node.right = newNode
               }else{
                   insertNode(node.right,newNode)
               }
           }
        }
        console.log(root)
    }
    this.search = function (key) {
        
    }
    this.inOrderTraverse = function (callback) { //中序遍历
        var allNode = []
        inOrderTraverseNode(root)
        function inOrderTraverseNode(node) {
           if(node !=null) {
               inOrderTraverseNode(node.left)
               allNode.push(node.key)
               inOrderTraverseNode(node.right)
           }
        }
        callback(allNode)
    }
    this.preOrderTraverse = function () { //先序遍历

    }
    this.postOrderTraverse = function () { //后序遍历

    }
    this.min = function () {
        
    }
    this.max = function () {
        
    }
    this.remove = function (key) {
        
    }
}

var tree = new BinarySearchTree()
tree.insert(11)
tree.insert(13)
tree.insert(9)
tree.insert(18)
tree.insert(10)
tree.insert(7)
tree.insert(2)
tree.insert(22)
tree.inOrderTraverse(function (data) {
    console.log(data)
})

function test(a) {
    if(a>0) {
        a--
        test(a)
        console.log(a)
    }

}
test(10)