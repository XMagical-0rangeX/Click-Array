function buildRectArray(){
    for(i=0;i<7;i++){
        rectArray.push(rectForm(-1));
    }
}
function drawRect(){
    
    for (i=0;i<rectArray.length;i++){
        Fill(rectArray[i].color);
        Rect(rectArray[i].x,rectArray[i].y,rectArray[i].w,rectArray[i].h, "fill");
        rectArray[i].y+=rectArray[i].sped;
        if (rectArray[i].y >= cnv.height){
            rectArray[i]=rectForm(i);
        }
    }
    
}
function rectForm(i){
    if (i>-1){
       return {x:RandNum(cnv.width)-50,y:0,w:RandNum(25)+100,h:RandNum(5)+20,sped:RandNum(5)+1,color: rectArray[i].color}
    } else {
        return {x:RandNum(cnv.width)-50,y:0,w:RandNum(25)+100,h:RandNum(5)+20,sped:RandNum(5)+1,color:"grey"}
    }
   
}
function rectclick(){
    return{x:RandNum(cnv.width)-50,y:0,w:RandNum(25)+100,h:RandNum(5)+20,sped:RandNum(5)+1,color:`rgb(${RandNum(255)},${RandNum(255)},${RandNum(255)})`}
}
function collide(){
    for(i=0;i<rectArray.length;i++){
      if (mouseIsPressed && ptInRectangle(mouseX,mouseY,rectArray[i])){
        rectArray[i] = rectclick();
        break;
    }  
    }
    
}