var div = document.createElement('div');//创建一个元素
document.body.appendChild(div);//将元素插入body的子元素
div.className = "demo";
// document.body.onclick = function (x) {
//     console.log(x);
//     console.log(x.clientX, x.clientY);
//     div.style.top = x.clientY + 'px';
//     div.style.left = x.clientX + 'px';
// }
var dragging = false;
var lastX;
var lastY;
div.onmousedown = function (e) {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
}
div.onmouseup = function () {
    dragging = false;
}
document.body.onmousemove = function (x) {
    console.log(x);
    console.log(lastX, lastY);
    console.log(x.clientX, x.clientY);
    if (dragging === true) {
        console.log("offset", div.offsetLeft, div.offsetTop);
        console.log("delta", x.clientX - lastX, x.clientY - lastY);
        div.style.top = div.offsetTop + x.clientY - lastY + 'px';
        div.style.left = div.offsetLeft + x.clientX - lastX + 'px';
        lastX = x.clientX;
        lastY = x.clientY;
    }

}
