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







let deltaTime; //현재 시간,델타타임
let previousTime=performance.now();
let tiemCount=0;
let cactusList=[];
let timer=0;
// dino.draw();
// cactus.draw();




function Update(currentTime){
    requestAnimationFrame(Update);
    timer++;
    currentTime=performance.now();

    deltaTime=(currentTime-previousTime)/100;   

    previousTime=currentTime;

    ctx.clearRect(0,0, canvas.width,canvas.height);
    dino.draw();
    if(timer % 120*deltaTime===0){
        let cactus=new Cactus();
        cactusList.push(cactus);
    }
    for(idx in cactusList){
        cactusList[idx].draw();
        cactusList[idx].x--;
    }

}

requestAnimationFrame(Update);
// requestAnimationFramed()파라미터는 performance.now(); 와 비슷한 DOMHighResTimeStamp 

