// function updateWidth(time) {
//     console.log(time)
//     var div = document.getElementById('api');
//     div.style.width = parseInt(div.style.width, 10) + 1 + '%'
//     console.log(div.style.width);

//     if (div.style.width !== '100%') {
//         requestAnimationFrame(updateWidth) 
//     }
// }

function updateWidth(time) {
    console.log(time)
}





// let isDone
// document.addEventListener('mousemove', function() {
//     if (isDone) { // 没有完成
//         return;
//     }
//     // isDone = false
//     requestAnimationFrame((timeStart) => {
//         isDone = true
//         updateWidth(timeStart)
//     })
// })


// 页面可见性
// document.addEventListener('blur', () => {
//     console.log(document.visibilityState)
//     console.log(document.hidden)
// })


// let a = 1;
// function aa() {
//     setTimeout(() => {
//         console.log(a++)
//         aa()
//     }, 100);
// }
// aa()


// 地理定位
// navigator.geolocation.getCurrentPosition(function(pos) {
//     console.log(pos.coords)
// })


// var fileInput = document.getElementById('file');
var api = document.getElementById('api');
// fileInput.onchange = function(e) {
    // console.log(e.target.files)
    // var files = e.target.files;
    // url = window.URL.createObjectURL(files[0]);
    // var reader = new FileReader();
    // reader.readAsText(files[0].slice(0, 100), 'utf-8');
    // reader.onprogress = function(event) {
    //     if (event.lengthComputable) {
    //         api.innerHTML = event.loaded + '/' + event.total
    //     }
    // }
    // reader.onload = function() {
    //     console.log(reader.result)
    //     api.innerHTML = reader.result
        // console.log(reader.result)
        // var img = document.createElement('img')
        // img.src = reader.result
        // img.src = url
        // document.body.appendChild(img)
    // }
// }
// api.onclick = function() {
//     console.log(url)
//     window.URL.revokeObjectURL(url)
// }
// function handle(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log(e.dataTransfer.files)
// }
// api.addEventListener('dragover', handle)
// api.addEventListener('dragenter', handle)
// api.addEventListener('drop', handle)

// var form = new FormData();
// form.append('a', 1);
// form.append('b', 2);
// console.log(form.get('a'))

// console.log(window.performance)


// var worker = new Worker('./worker.js')