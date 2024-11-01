let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let new1= document.querySelector("#new");
let para= document.querySelector("#para");
let winner=document.querySelector(".winner");
let turn0 = true;
const patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = ()=> {
    turn0= true;
    enable();
    winner.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        
        if(turn0){
            box.innerText="O";
            turn0= false;
        } else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})
const disable=() =>{
    for (box of boxes){
        box.disabled= true;
    }
}
const enable =() =>{
    for(box of boxes){
      box.disabled= false;
      box.innerText="";
    }}
const showWinner=(win)=> {
  para.innerText=`congrajulations, Winner is ${win}`;
  winner.classList.remove("hide");
  disable();
}
 const checkWinner=() => {
    for(pattern of patterns){
       
      let pos1= boxes[pattern[0]].innerText;
      let pos2= boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      if (pos1 !="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2===pos3){
           showWinner(pos1);
        }
      }
    }
 }
 new1.addEventListener("click",resetGame);
 reset.addEventListener("click",resetGame);