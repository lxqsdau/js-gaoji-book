/**
 * 2018年4月21
 * 附录A
 */ 
// 1 let
// 
// 'use strict'
// message = '9'
for (let i = 0;i < 3; i+=1) {
    // let i = 2;
    // console.log(i)
}
// console.log(i);
// let 表达式
var num = 8;


// const
const a = 8;
const arr = []
arr.push('1')

// 函数
function sum(num1, num2, ...num3) { // 剩余参数
    // console.log(arguments[0])
    // console.log(num3)
    // console.log(this)
}

sum(1, 2, 3, 4);
sum(...[0, 9, 8, 7]) // 分布参数
// 痛下
sum.apply(this, [0, 9, 8, 7])

// 默认参数值
function fn(num1, num2 = 7) {
    // console.log(num2)
}
fn()
fn(1, 4)

// 生成器
function * my() {
    yield Promise.resolve(6);
    // console.log(a3)
    yield a3 =9;
    console.log(a3)
}
let gen = my()
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// 迭代器
// const obj = {
//     [Symbol.iterator] : function () {
//         return {
//             next: function () {
//                 return {
//                     value: 1,
//                     done: true
//                 };
//             }
//         };
//     }
// };
// console.log(obj)

let arr2 = ['a', 'b', 'c'];
let iter = arr2[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

// 解构赋值
let [name, age] = [1, 2]
// console.log(name)
// console.log(age)

let x = 'x';
let y = 'y'; // 这里要加分号
[x, y] = [y, x]
// console.log(x)
// console.log(y)

// 代理对象
let proxy = new Proxy({}, {
    get: function() {
        // console.log('get')
    }
})
proxy.a = 1;
proxy.a


// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.age)
    }
    get it() {
        return '123456'
    }
    set it(value) {
        console.log('setter: '+value);
        return '123'
    }
}
let liu = new Person('liu', 20);
console.log(liu)

liu.say()
liu.it = 0
console.log(liu.it);


var color = 'red';
// delete color;
console.log(color)

var obj = {
    name: 1,
    name: 2
}
console.log(obj)

function add(num) {
    num = '3'

    console.log(num)
    console.log(arguments[0])
}
add(1, 2)

// function fa(num) {
//     if (num <= 1) {
//         return 1
//     } else {
//         return num * arguments.callee(num-1)
//     }
// }
// console.log(fa(4))

if (true) {
    name()
    function name() {
        console.log('jjj')
    }
}

var aa = eval("var abc = 9; abc");
console.log(aa)

// var eval = 0

var color = 'red'
function getColor() {
    console.log(this)
    // console.log(this.color)
}
getColor()

// with (location) {

// }

// var num33 = 056
// console.log(num33)

var ba = parseInt("010")
console.log(ba)