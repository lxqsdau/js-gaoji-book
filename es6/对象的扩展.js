
// Object.is
console.log(Object.is(+0, -0))
console.log(Object.is(NaN, NaN))


// Object.assign 浅拷贝
var obj = {a: {b: 1}, b: 1, c: 3}

var obj2 = Object.assign({}, obj)

obj2.a.b = 9
console.log(obj.a)

// 取值函数的处理
var target = {
    get foo() {return 1}
}

var ass = Object.assign({}, target)
console.log(ass)

console.log(Object.getOwnPropertyDescriptor(obj, 'a'))

console.log(Object.keys(obj))

console.log(Object.getOwnPropertyNames(obj))



let a1 = {a: 1, b: 2, c: 3}
let b1 = {b: 1}
// a1.__proto__ = b1;
console.log(Object.setPrototypeOf(a1, b1) === a1)
console.log(Object.getPrototypeOf(a1))


console.log(Object.entries(a1))


for(let [k,v] of Object.entries(a1)) {
    console.log(k, v)
}

console.log({...a1})

