let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let btn=document.querySelector(".btn");
let msg=document.querySelector(".msg");
let winner=document.querySelector(".winner");
let turn0 = true;
let count=0;
const wins=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
const resetgame = ()=> {
    turn0=true;
    count=0;
    enableboxes();
    msg.classList.add("hide");
    winner.innerText="";
}
const gamedraw = () => {
    winner.innerText="Game was Draw";
    msg.classList.remove("hide");
    disableboxes();
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        } else{
            box.innerText="X";
            turn0=true;
            }
            box.disabled=true;
            count++;
             let iswinner = checkWinner();
        if( count===9 && !iswinner)
        {
            gamedraw();
        }
    });
});
const disableboxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
    }
} 
const showWinner=(win) =>{
       winner.innerText=`Congratualations, ${win} Won the Game`;
       msg.classList.remove("hide");
       disableboxes();
}
const checkWinner = () =>{
    for(pattern of wins) {
        /* console.log(pattern[0],pattern[1],pattern[2]);
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText); */
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 != "" && pos2 != "" && pos3 != "")
            {
                if( pos1 === pos2 && pos2 === pos3)
                {
                    console.log("Winner",pos1);
                    showWinner(pos1);
                    return true;
                }
            }
    }
}
resetbtn.addEventListener("click", resetgame);
btn.addEventListener("click", resetgame);