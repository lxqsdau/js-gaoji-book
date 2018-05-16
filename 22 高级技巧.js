// 作用域安全的构造函数
function Person(name, age) {
    if (this instanceof Person) {
        this.name = name;
        this.age = age;
    } else {
        return new Person(name, age)
    }
    
}
function A() {

}
Person.prototype = new A()

var p = Person('li3', 3);
// console.log(p.a)
// console.log(p.name)
// console.log(window.name)

console.log(p instanceof A)


// 惰性载入函数
function create() {
    console.log('第一次')
    if (window.a) {
        create = function() {
            console.log('1')
        }
    } else {
        create = function() {
            console.log('2')
        }
    }
}

create()
create()
create()

// 第二种方式
var pre = (function(){
    if (window.b) {
        return '0'
    } else {
        return '1'
    }
})()

// 函数绑定
function bindA(fn, context) {
    return function() {
        return fn.apply(context, arguments)
    }
}

setTimeout(function() {
    // console.log(this)
}, 10)

// 函数柯里化
function curry(fn, ...arg1) {
    return (...arg2) => {
        return fn.apply(null, [...arg1, ...arg2])
    }
}
let curryEs6 = (fn, ...agr1) => (...agr2) => fn.apply(null, [...agr1, ...agr2])
function add(num1, num2) {
    return num1 + num2
}

let currad = curryEs6(add, 5, 6);
console.log(currad())


// 对象防篡改
var person = {name: 'liu'}
Object.preventExtensions(person);
person.age = 9
console.log(person.age)
console.log(Object.isExtensible(person))
person.name = '123'
console.log(person.name)

const person2 = {name: 'hha'}
Object.seal(person2)
console.log(Object.isSealed(person2));

person2.name = "098"
console.log(person2.name)

const person3 = {name: 'free'}
Object.freeze(person3)
console.log(person3.name)
person3.name = "333"
console.log(person3.name)

console.log(Object.isFrozen(person3))



// 数组分块
const arr = [1, 2, 3, 4, 5, 6, 7];
function chunk(data, process) {
    setTimeout(function() {
        let item = data.shift();
        process(item);
        if (data.length > 0) {
            setTimeout(arguments.callee, 1000)
        }
    }, 1000);
}
chunk(arr, (item) => {
    // console.log(item)
})


// 函数节流
function throttle(method, context, delay, text) {
    clearTimeout(method.id);
    method.id = setTimeout(function() {
        method.call(context,text);
    }, 500)
}

window.onresize = function() {
    console.log('1')
    throttle(function() {
        console.log('12')
    })
}

function queryData(text){
    console.log("搜索：" + text);
}
// var input = document.getElementById("search");
// input.addEventListener("keyup", function(event){
//     throttle(queryData, null, 500, this.value);
//     // queryData(this.value);
// });

// function throttle(fn,context,delay,text){
//     clearTimeout(fn.timeoutId);
//     fn.timeoutId = setTimeout(function(){
//         fn.call(context,text);
//     },delay);
// }

// 自定义事件
function EventSelf() {
    this.handleer = {}
}
EventSelf.prototype = {
    constructor: EventSelf,
    addEvent: function(type, handle) { // 箭头函数创建，当前的作用域是window
        if (!this.handleer[type]) {
            this.handleer[type] = []
        }
        this.handleer[type].push(handle)
    },
    fire: function(event) {
        if (this.handleer[event.type]) {
            let handleL = this.handleer[event.type].length
            console.log(handleL, 'handleL')
            for (let i = 0; i < handleL; i++) {
                this.handleer[event.type][i](event);
            }
        }
    }
}

function eventExample(event) {
    console.log(event)
}
var target = new EventSelf();
target.addEvent('message', eventExample);
target.fire({type: 'message'})


var dragging = null, diffX = 0, diffY = 0;

// 拖拽
function handleEvent(event) {
    switch(event.type) {
        case 'mousedown':
            dragging = event.target
            diffX = event.clientX - dragging.offsetLeft;
            diffY = event.clientY - dragging.offsetTop;
            break;
        case 'mousemove':
        if(dragging) {
            dragging.style.left = (event.clientX - diffX) + 'px';
            dragging.style.top = (event.clientY - diffY) + 'px';
        }
           
            break;
        case 'mouseup':
            dragging = null
            break;           
    }
}
var div = document.getElementById('api')
div.addEventListener('mousedown', handleEvent)
div.addEventListener('mousemove', handleEvent)
div.addEventListener('mouseup', handleEvent)