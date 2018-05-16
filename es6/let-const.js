// let 不存在变量提升
// console.log(a)
let a = 0

// 暂时性死去

var b = 9;
if (true) {
    // b = 0;
    let b = 8; // b 绑定这个区域
}

typeof c
// let c

function d(x = 8, y = 9) {
    // let x = 9
}
d()

var tem = 9
function e() {
    // console.log(tem)
    let tem = 8
    if (true) {
        // let tem = 7
        // console.log(tem)
    }
}
e()

// 块级作用域
{
    let a = 0;
    // console.log(a)
}

// 函数
// function f() {
//     console.log('外部')
// }
// (function(){
//     if (true) {
//         function f() {
//             console.log('s')
//         }
//     }
//     f()
// })()


// function f() { console.log('I am outside!'); }

(function () {
    // console.log(f, 'gf')
  if (true) {
      var gf = 0
    // 重复声明一次函数f
    function f() { console.log('I am inside!'); }
  }

  
}());

// const 
const ff = 0



var g = 9
// console.log(window.g)


// 变量提升
console.log(fg)

var fg = 9
function fg() {}

console.log(fg)



