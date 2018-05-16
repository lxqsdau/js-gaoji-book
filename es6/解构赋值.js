// // 数组的解构赋值
// let [a, b, ...c] = [1, 2, 3]

// // 默认值
// let [d = 1, e = 4] = [2, null]
// // 只有数组成员严格等于undefined，默认值才有效


// // 是表达式，只有用到的之后才会求值
// function f() {
//     // console.log('f')
// }
// let [x = f()] = []

// // 默认值可以引用其他变量，变量已经声明的
// let [z = 1, y = z] = [2] // z = 2 y =2 一步步执行

// 对象的解构赋值
// 指定默认值
// let {x, y = 9} = {x: 1};

// // 函数参数的解构赋值
// function add([x, y]) {
//     // console.log(x, y)
// }

// add([1, 2])

// function mode({x=2, y=9}) {
//     // console.log(x ,y)
// }
// mode({})

// // 用途
// // 遍历Map解构
// let map = new Map();
// map.set('a', 1)
// map.set('b', 2)

// for (let [key, value] of map) {
//     console.log(key, value)
// }


// 字符串方法

let str = "abcde";
// console.log(str.repeat(3))
// console.log(str.includes('cd', 3))
// console.log(str.startsWith('a', 3))
// console.log(str.endsWith('b', 2)) // 前两个


console.log('x'.padStart(5, '012345'))
console.log('x'.padEnd(5, '012345'))














