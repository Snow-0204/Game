let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#boxr");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true; //player 'X', player'O'

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

//Input 'X' And 'O' Inside The Boxes
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if(turnX) {
                box.innerText = "X";
                box.classList.add("x-color");
                turnX = false;
            } else {
                box.innerText = "O";
                box.classList.add("o-color");
                turnX = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    const disableBoxes = () => {
        for (let box of boxes) {
            box.disabled = true;
        }
    };

    const enableBoxes = () => {
        for (let box of boxes) {
            box.disabled = false;
            box.innerText = "";
        }
    };

    const showWinner = (winner) => {
        msg.innerText = `Congratulations The Winner Is Player ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

//To Check Winner
    const checkWinner = () => {
        for (let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log("Winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
        }
    };

    newGameBtn.addEventListener("click", resetGame);
    resetBtn.addEventListener("click", resetGame);