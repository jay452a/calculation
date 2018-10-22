/**
 * Created by 56234 on 2018/10/18.
 */
function graph() { // 建立邻接表
    var vertics = [] // 储存顶点
    var adjList = {} // 储存邻接表
    this.addVertex = function (v) {
        vertics.push(v)  //添加一个顶点到顶点列表
        adjList[v] = [] //设置键值对V为一个空数组，用来存储该顶点将要连接的点
        console.log(adjList)
    }
    this.addEdge = function (v,w) {
        adjList[v].push(w)  //顶点v项w的边
        adjList[w].push(v)  //定点w项v的边
     }
     this.toString = function () {
         var str = ''
         for (var i=0; i<vertics.length;i++) {
             str+= vertics[i]+ '->'
             var near = adjList[vertics[i]]
             for (var j = 0;j<near.length;j++) {
                 str+=near[j]+ ','
             }
             str+='\n'
         }
         return str
     }
     this.initColor = function () {
         var color = {}
         for (var i = 0; i<vertics.length;i++) {
             color[vertics[i]] = 'white'
         }
         return color
     }
     this.bfs = function (v, callback) { //广度优先搜索图表
         var d = {} //表示距离
         var prev = {} //表示回溯点
         var color = this.initColor()
         var queue = []
         queue.push(v)
         for (var i = 0;i<vertics.length;i++) {  //重置d , prev
             d[vertics[i]] = 0
             prev[vertics[i]] = null
         }
         console.log(d)
         while (queue.length>0) {
            var u = queue.shift()
            var near =  adjList[u] // 获取u点的所有相邻点
            color[u] = 'grey' //访问过
             for(var i=0; i<near.length;i++) {
                if(color[near[i]] === 'white') {
                    color[near[i]] = 'grey'
                    d[near[i]] = d[u] + 1  //遍历一层距离增加1
                    prev[near[i]] = u
                    queue.push(near[i])
                }
             }
             color[u] = 'black' // 当遍历过其相邻顶点后，该顶点才算被探索过
             if(callback) {
                callback(u)
             }
         }
         function getPath() {

         }
         return {
             distance:d,
             predecessors:prev,
             path:getPath
         }
     }

}

var objGraph = new graph()
var myVertex = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I']
for(var i = 0; i<myVertex.length;i++) {
    objGraph.addVertex(myVertex[i])
}
objGraph.addEdge('A', 'B')  // A点连接B点
objGraph.addEdge('A', 'C')
objGraph.addEdge('A', 'D')
objGraph.addEdge('C', 'D')
objGraph.addEdge('C', 'G')
objGraph.addEdge('D', 'G')
objGraph.addEdge('D', 'H')
objGraph.addEdge('B', 'E')
objGraph.addEdge('B', 'F')
objGraph.addEdge('E', 'I')
console.log(objGraph.toString())

function printNode(value){ //{16}
    console.log('Visited vertex: ' + value); //{17}
}
objGraph.bfs(myVertex[0], printNode);
console.log(objGraph.bfs(myVertex[1]), 'distance')