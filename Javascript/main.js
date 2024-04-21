const canvas=document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width=window.innerWidth-100;
canvas.height=window.innerHeight-100;

// ctx.fillStyle='green';
// ctx.fillRect(10,10,100,100);

let dino={
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle='green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle='red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}








let cactus = new Cactus();
let tiemCount=0;

// dino.draw();
// cactus.draw();




function frameDo(){
    requestAnimationFrame(frameDo);
    tiemCount++;
    
    ctx.clearRect(0,0, canvas.width,canvas.height);
    dino.draw();
    cactus.draw();
    // dino.x++;
    // dino.draw();

}

frameDo();


