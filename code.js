var frameRate = 12, numFrames = 24, frameIndex = 0;
var imageList, canvas;

function loadImages(basePath, extension) {
    imageList = new Array();
    for (var i = 0; i < numFrames; i++) {
        var img = new Image();
        img.src = basePath + i.toString() + "." + extension;
        imageList.push(img);
    }
}

function update() {
    canvas.drawImage(imageList[frameIndex], 0, 0);
    frameIndex = (frameIndex + 1) % numFrames;
}

window.addEventListener("load", function() {
    var ele = document.getElementById("canvas");
    if (!ele.getContext) {
        alert("Error creating canvas context");
        return;
    }
    canvas = document.getElementById("canvas").getContext("2d");
    loadImages("rickroll/rickroll", "png");
    update();
    setInterval(update, 1000 / frameRate);
}, false);
