let gameSeq=[];
let userSeq=[];

let btns=["b1", "b2","b3","b4"]; //class

let  started =false;
let level =0;

let h2=document.querySelector("h2");


document.addEventListener("keypress", function () {
    if(started==false)
    {
        started=true;
        console.log("game started");

        levelup();
    }
});

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200); 
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200); 
}


function levelup(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx =Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        //console.log("same value");
        if(gameSeq.length == userSeq.length){
           setTimeout( levelup() ,1000 );
        }

    }else{
        h2.innerHTML=`game over! Your score was <b>${level}</b><br> Press any key to start`;
        reset();
    }
        
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}

function btnPress(){
    console.dir(this);
    let btn = this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


