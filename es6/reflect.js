
let obj = {
    a: 1,
    b: 2,
    get c() {
        return this.a
    }
}
console.log(Reflect.has(obj, 'a'))
console.log(Reflect.get(obj, 'a'))

var obj2 = {
    a: 'a',
    get b() {
        return this.a
    },
    c: '4'
}

console.log(Reflect.get(obj, 'c', obj2))


Reflect.set(obj2, 'baz', 4)



console.log(obj2)








