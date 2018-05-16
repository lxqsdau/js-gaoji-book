let obj = new Proxy({a: 1}, {
    get(target, key, receiver) {
        console.log(target, key, receiver)
        return 1
    },
    set(target, key, value, receiver) {
        console.log(target, key, value, receiver)
        return value
    }
})

console.log(obj.name)

obj.age = 9

console.log(obj.age)













