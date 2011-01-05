var canvas, width, height, image;

function initCanvas() {
    width = canvas.width;
    height = canvas.height;
    var img = new Image();
    img.addEventListener("load", function() {
        canvas.drawImage(this, 0, 0);
    }, false);
    img.src = "rickroll/rickroll0.png"
}

function update() {

}

window.addEventListener("load", function() {
    var ele = document.getElementById("canvas");
    if (!ele.getContext) {
        alert("Error creating canvas context");
        return;
    }
    canvas = document.getElementById("canvas").getContext("2d");
    initCanvas();
    setInterval(update, 35);
}, false);
