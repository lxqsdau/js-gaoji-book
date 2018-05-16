
let s = new Set([1, 2, 3, 4, 2, 4])

console.log([...s])
// NaN 相等 其他的都是比较绝对相等

s.add(8);
s.delete(1)
var o = {}
s.add(o)
s.add(o)
s.add({})
console.log(s)
console.log(s.has(2))
console.log(Array.from(s))
for(let key of s.entries()) {
    console.log(key)
}

// 数组去重
console.log(...new Set([1, 2, 3, 1, {}, {}]))


// map 
console.log([...s].map((item) => item + 1))




// Map
let map = new Map().set('b', '2').set('c', 3)
map.set('a', 1)

console.log(map.size)

console.log(map.get('b'))
// map.delete('b')
console.log(map.has('b'))

console.log(map.entries())

for(let item of map.entries()) {
    console.log(item)
}

console.log(...map)


console.log(new Map([...map].map(([key, value]) => [key+1, value])))