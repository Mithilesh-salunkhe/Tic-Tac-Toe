//  Query Items
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// boolean value....
let turn0 = true; //playerX player0

// winning patterns in 2D araay
const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// reset and new game button...
const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// logic behind the chances that payers get to play...
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){    //means turn0 === true
            //playerO
            box.innerText = "O";
            turn0 = false;
        }
        else{
            //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

// used to when the winner is already declared and we cannot click non other button then
const disableBoxes = ()  => {
    for (let box of boxes){
        box.disabled = true;
    }
}

// reset and new game button....
const enableBoxes = ()  => {
    for (let box of boxes){
        box.disabled =false;
        box.innerText =     "";
    }
}

// printing the winner on the screen...
const showWinner = (Winner)  => {
    msg.innerText = `Congratulations , winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

// acessing the values of winning pattern through the for loop... 
checkWinner = () => {
    for(let pattern of WinPatterns){
      // assinging the value of thr indexes
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;

      if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            showWinner(pos1val);
        }
      }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

