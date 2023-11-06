/*
1. add an eventlistener for clicks on the parent container - container
2. add a conditional to check which child element is being targetted
3. modify textcontent of the target element - x or o
4. swap what is being injected each time, starting with x
5. add a conditional for the win condition, 3 boxes in a row lined up, sent alert and clear text contents
6. add safety measures
*/

const container = document.querySelector(".container");
const box = document.querySelectorAll(".box");
const reset = document.querySelector(".reset");
let xCounter = 0;
let oCounter = 0;
let symbol = "X";
let counter = 1;
const xBox = document.querySelector(".xbox");
const oBox = document.querySelector(".obox");

const winCombination = [
  [0, 3, 6],
  [0, 1, 2],
  [0, 4, 8],
  [2, 5, 8],
  [6, 7, 8],
  [2, 4, 6],
  [3, 4, 5],
  [1, 4, 7],
];

//function connected to event listener
const gameFunction = function (evt) {
  if (evt.target.classList[0] == "box") {
    printXO(evt);
  }

  setTimeout(winCondition, 1);
};
// event listener

container.addEventListener("click", gameFunction);

// Print X or O function
const printXO = (evt) => {
  if (!evt.target.textContent) {
    evt.target.textContent = symbol;
    {
      counter++;
      if (counter % 2 == 0) {
        symbol = "O";
      } else {
        symbol = "X";
      }
    }
  }
};

// Style the winning text
const styleWinner = function (box1, box2, box3) {
  box1.classList.add("style-winner");
  box2.classList.add("style-winner");
  box3.classList.add("style-winner");
};

// check winner function
const winCondition = (evt) => {
  let winner = false;
  winCombination.forEach((combination) => {
    if (
      box[combination[0]].textContent &&
      box[combination[0]].textContent == box[combination[1]].textContent &&
      box[combination[0]].textContent == box[combination[2]].textContent
    ) {
      alert(`Player ${box[combination[0]].textContent} Wins!`);
      container.removeEventListener("click", gameFunction);
      styleWinner(
        box[combination[0]],
        box[combination[1]],
        box[combination[2]]
      );
      if (box[combination[0]].textContent == "X") {
        xCounter++;
      } else {
        oCounter++;
      }
      winner = true;

      // Increment Scoreboard
      xBox.textContent = `X winner = ${xCounter}`;
      oBox.textContent = `O winner = ${oCounter}`;
    }
  });
  
  const filledBoxes = [...box].every((box) => box.textContent);

  if (filledBoxes && !winner) {
    alert("It's a tie");
    container.removeEventListener("click", gameFunction);
  }

  //   if (box[0].textContent && box[0].textContent == box[3].textContent && box[0].textContent == box[6].textContent) {
  //       alert(`Player ${box[0].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)

  //   } else if (box[0].textContent && box[0].textContent == box[1].textContent && box[0].textContent == box[2].textContent) {
  //       alert(`Player ${box[0].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[0].textContent && box[0].textContent == box[4].textContent && box[0].textContent == box[8].textContent) {
  //       alert(`Player ${box[0].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[2].textContent && box[2].textContent == box[5].textContent && box[2].textContent == box[8].textContent) {
  //       alert(`Player ${box[2].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[6].textContent && box[6].textContent == box[7].textContent && box[6].textContent == box[8].textContent) {
  //       alert(`Player ${box[6].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[2].textContent && box[2].textContent == box[4].textContent && box[2].textContent == box[6].textContent) {
  //       alert(`Player ${box[6].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[3].textContent && box[3].textContent == box[4].textContent && box[3].textContent == box[5].textContent) {
  //       alert(`Player ${box[6].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[1].textContent && box[1].textContent == box[4].textContent && box[1].textContent == box[7].textContent) {
  //       alert(`Player ${box[6].textContent} Wins!`)
  //       container.removeEventListener('click', gameFunction)
  //   }
  //   else if (box[0].textContent && box[1].textContent && box[2].textContent && box[3].textContent && box[4].textContent && box[5].textContent && box[6].textContent && box[7].textContent && box[8].textContent) {
  //       alert("It's a tie")
  //       container.removeEventListener('click', gameFunction)
  //   }
};

// Reset button
reset.addEventListener("click", () => {
  for (let div of box) {
    div.textContent = "";
    div.classList.remove("style-winner");
  }
  symbol = "X";
  counter = "1";
  container.addEventListener("click", gameFunction);
});
