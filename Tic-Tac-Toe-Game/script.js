let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset");
let result=document.querySelector("#msg");
console.log(boxes);
console.log(resetBtn);


let turn=true;//PlayerX,PlayerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],  
];
const showWinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;

}
const checkWinner=()=>{
    for(let pattern of winPattern)
    {
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!="")
        {
            if(pos1==pos2 && pos2==pos3)
            {
              console.log("Winner is ",pos1);
              if(pos1=="X"){showWinner(" Player1 - X")}
              else{
                showWinner(" Player2 - 0");
              }
              
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("I am button ",box);
        if(turn)
        {//PlayerX
            box.innerText="X";
            turn=false;
        }
        else{
            //PlayerO
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const reset=()=>{
        boxes.forEach((box)=>{
          box.innerText="";
        });
        msg.innerText="";
        boxes.forEach((box)=>{
            box.disabled=false;
            turn=true;
        });
};
resetBtn.addEventListener("click",reset);