// 函数的默认参数是惰性求值的，每次都会重新计算默认值
let x = 1
function fn(p = x + 1) {
    console.log(p)
}
fn()

x = 9
fn()

// 与结构赋值连用
function fa({x, y} = {}) {
    console.log(x);
    // console.log(y);
}

fa()

// 函数的length属性


function fb(a=1, b) {

}
// 默认参数放在尾部
console.log(fb.length) // 设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。



// rest参数（剩余参数）后面不能有参数
function fc(a, ...b) {
    console.log(b)
}
fc(1, 2, 3)




// name
var fd = function() {

}
console.log(fd.name)

// 箭头函数结构赋值

const fe = ({name, age}) => {
    console.log(name, age)
}
fe({name: 'liu', age: 7})


// this
var handle = {
    str: 'hadle',
    init: function() {
        console.log(this.str)
        document.addEventListener('click', () => {
            console.log(this, 'this')
        })
    }
}
handle.init()

// 不管套用什么，this指向当前作用域



