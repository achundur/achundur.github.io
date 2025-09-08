let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let disgruntled = document.getElementById('disgruntled');

function setup(){
let cnv = createCanvas(windowWidth, windowHeight);
cnv.parent('mySketch');
}


function draw(){

    if(mode == 1){
        displayTired();

    }

    if((xpos>800 && xpos<1100) && (ypos>400 && ypos<900)){
        disgruntled.style.display="block";
    }

    if((xpos<400) && (ypos<400)){
        disgruntled.style.display = "none";
        mode = 2;
        console.log(mode)
    }

    if(mode == 2){
        removeElements();
        // background(0);
        disgruntled.style.display="none";
    }

    if(keyIsPressed){
        if(keyCode == UP_ARROW){
            y-=5;
        }
    
        if(keyCode == RIGHT_ARROW){
            x+=5;
        }
    
        if(keyCode == DOWN_ARROW){
            y+=5;
        }
    
        if(keyCode == LEFT_ARROW){
            x-=5;
        }
    }
}



function displayTired(){
    removeElements();
    let tired = createImg('images/tired james 2.jpeg');
    tired.size(200,200);
    tired.id('tired');

    xpos = width/2 - 100 + x;
    ypos = height/2 - 100 + y;

    tired.position(xpos, ypos);

}