let rectArray = [];
buildRectArray();
loop();
function loop(){
    Fill("green");
    Rect(0,0,cnv.width,cnv.height, "fill");
    drawRect();
    collide();
    requestAnimationFrame(loop);
}
