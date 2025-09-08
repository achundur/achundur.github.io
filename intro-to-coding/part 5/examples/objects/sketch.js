let rectObjs = []
function setup(){
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');
}

function draw(){
    background(50);
    noStroke();
    rectMode(CENTER);
    fill(255);

    for(let i = 0; i < rectObjs.length; i++){
        fill(rectObjs[i].fillColor);
        rect(rectObjs[i].xpos, rectObjs[i].ypos, 50, 25);
        rectObjs[i].ypos += 1;
    }


}

function mousePressed(){
    rectObjs.push({xpos: mouseX, ypos: mouseY, fillColor: random(255)});
}