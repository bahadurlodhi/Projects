let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGanebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno=true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
  turno=true;
  enablebtn();
  msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
      if(turno){
        box.innerText="K";
        turno=false;
      }     
      else{
        box.innerText="B";
        turno=true;
      }
      box.disabled=true;
      checkwinner();
  });
});
const disabledbtn=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};
const enablebtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
   msg.innerHTML=`<h1>Congratulation,Winner is ${winner}</h1>`;
   msgContainer.classList.remove("hide");
   disabledbtn();
}
const checkwinner=()=>{
  for(let pattern of winPatterns){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val==pos2val && pos2val==pos3val){
        console.log("Winner",pos1val)
        showWinner(pos1val);
      }
    }
  }
};

newGanebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);