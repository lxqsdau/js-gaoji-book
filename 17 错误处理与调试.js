
try {
    window.dd()
} catch(error) {
    console.log(error.message)
}


function test() {
    try {
        return 2
    } catch {
        return 4
    } finally {
        return 6
    }
}

console.log(test())
window.onerror = function(message, url, line) {
    console.log(message, url, line)
    return false
}
throw new Error('123')