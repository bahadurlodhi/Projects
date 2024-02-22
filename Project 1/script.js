var timer=59;
var score=0;
var hitrm=0;
function increaseScore(){
 score+=10;
 document.querySelector("#scoreval").textContent=score;
}
function makeNewHit(){
     hitrm=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrm;
}
function makebubble(){
var clutter="";
for(let i=1;i<=114;i++){
    var count=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${count}</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runtimer(){
var timerint=setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML=`<h1> Game Over </h1>`;
    }
},2000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum=Number(dets.target.textContent);
    if(clickednum === hitrm)
    increaseScore();
    makebubble();
    makeNewHit();
})

runtimer();
increaseScore();
makeNewHit();
runtimer();
makebubble();



// var timer = 59;
// var score = 0;
// var hitrm = 0;

// function increaseScore() {
//     score += 10;
//     document.querySelector("#scoreval").textContent = score;
// }

// function makeNewHit() {
//     hitrm = Math.floor(Math.random() * 10);
//     document.querySelector("#hitval").textContent = hitrm;
// }

// function makebubble() {
//     var clutter = "";
//     for (let i = 1; i <= 114; i++) {
//         var count = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${count}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML = clutter;

//     // Add event listeners to bubbles
//     document.querySelectorAll('.bubble').forEach(bubble => {
//         bubble.addEventListener("click", function (dets) {
//             var clickednum = Number(dets.target.textContent);
//             if (clickednum === hitrm)
//                 increaseScore();
//             makebubble();
//             makeNewHit();
//         });
//     });
// }

// function runtimer() {
//     var timerint = setInterval(function () {
//         if (timer > 0) {
//             timer-=1;
//             document.querySelector("#timerval").textContent = timer;
//         } else {
//             clearInterval(timerint);
//             document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1>`;
//         }
//     }, 2000)
// }

// document.querySelector("#pbtm").addEventListener("click", function (dets) {
//     var clickednum = Number(dets.target.textContent);
//     if (clickednum === hitrm)
//         increaseScore();
//     makebubble();
//     makeNewHit();
// });

// increaseScore();
// makeNewHit();
// runtimer();
// runtimer();
// makebubble();
