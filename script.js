//Math.random() will give a random number between 0 to 1.
//Math.floor(1.1) is 1.
//Math.ceil(1.2 or 2.01) is 2 and 3 respectively.
function bubble(){
    var bubble="";
    for(var i=0; i<=139; i++){
        let random_number=Math.floor(Math.random()*10);
        bubble+=`<div class="bubble">${random_number}</div>`;
    }
    document.querySelector("#bottom").innerHTML=bubble;
}
// setInterval is a function in JavaScript that is used to repeatedly executea specified 
// function or code block at fixed time intervals. It takes twoparameters: the function 
// to be executed and the time interval (in milliseconds) between each execution.
// To stop the repeated execution, you can use the clearInterval function, passing it the
// ID returned by setInterval.
function timer(){
    var InitialTime=60;
    var time = setInterval(function(){
        if(InitialTime >= 0){
            var decreasetime=InitialTime--;
            document.querySelector("#inctime").textContent=decreasetime;
        }
        else{
            clearInterval(time);
            document.querySelector("#changeHit").textContent="None";
            document.querySelector("#bottom").innerHTML=`<div id="end">
            <h1>Game Over</h1>
            <h1>Score:${score}</h1>
            </div>`;
        }
    },1000);
}

var hitrn=0;
function changeHits(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#changeHit").textContent=hitrn;
}

var score=0;
function increaseScore(){
    score+=10;
    document.querySelector("#incscore").textContent=score;
}

//EventListener.
document.querySelector("#bottom").addEventListener("click",function(details){
    var clickednumber=Number(details.target.textContent);
    if(hitrn===clickednumber){
        increaseScore();
        changeHits();
        bubble();
    }
});
changeHits();
timer();
bubble();






