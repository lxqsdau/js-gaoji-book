var json = [{
    "name": "liu",
    "age": null,
    "fn": function(){},
    "und": undefined,
    "date": new Date()
}, {
    "a": 1,
    "name": '123'
}]

// let res = JSON.stringify(json, function(key, value) {
//     if (key === 'name') {
//         return '123'
//     }
//     return value
// }, 4)
// console.log(res)
// console.log(JSON.parse(res, function(key, value) {
//     if (key === 'date') {
//         return new Date(value);
//     }
//     return value
// }))


let result = JSON.stringify(json, ["name"])
console.log(result)