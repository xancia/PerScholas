/* 
    Variables
*/
const userInput = document.getElementById("name-input");
const shipName = document.querySelector(".ship-name");
const attackButton = document.getElementById("attack-button");
const retreatButton = document.getElementById("retreat-button");
const battleLog = document.getElementById("battle-log-list");
const missle = document.getElementById("missle-button");
let enemySelected = false; // This is to prevent the battle from starting until an enemy is selected
let hitCheck = false; // conditional for checking hits

/*
    Classes & Objects
*/

class Battleship {
  static shipCount = 0;
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  updateHealth(currentShip, damage, hitCheck) {
    if (hitCheck) {
      currentShip.hull -= damage;
    }
  }

  accuracyCheck(shipAccuracy) {
    if (Math.random() < shipAccuracy) {
      return true;
    } else {
      return false;
    }
  }
}

// Our Ship Area with added upgrades
let shipShield = Math.floor(Math.random() * (10 - 5) + 5);
const ourShip = new Battleship(20, 5, 0.7);
ourShip.hull += shipShield;
ourShip.misslePower = 15;
ourShip.missleCount = 5;

//Enemy ship generation area
const enemyShips = [];
let enemyShipHull = Math.floor(Math.random() * (6 - 3) + 3);
let enemyShipFirepower = Math.floor(Math.random() * (4 - 2) + 2);
let enemyShipAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
let enemyShipCount = Math.floor(Math.random() * (10 - 2) + 5);
let enemyShipNumber = 0;
for (let i = 0; i < enemyShipCount; i++) {
  enemyShips.push(
    new Battleship(enemyShipHull, enemyShipFirepower, enemyShipAccuracy)
  );
}

/*
    Game Functions
*/

// startGame removes the user input listener and enables the attack and retreat button
const startGame = () => {
  userInput.removeEventListener("change", userNameInput);
  logText(
    `You Have Encountered ${enemyShips.length} Enemy Alien Ships. Pick to Attack or Retreat`
  );

  attackButton.addEventListener("click", attack);

  retreatButton.addEventListener("click", retreat);
};

//Attack handles 90% of the battle logic and game function
const attack = () => {
  missle.removeEventListener("click", missleFunction); // removes missle button functionality so the user doesn't press it accidentally
  if (!enemySelected) {
    // if enemy hasn't been selected run the chooseEnemy function
    chooseEnemy();
  }
  // check remaining enemy ship
  if (enemySelected) {
    // checks to see if an enemy has been selected before running the code
    enemySelected = false; // resets enemySelected for next round
    userInput.removeEventListener("change", enemySelection); // remove user input to avoid unintended behavior
    if (enemyShips[enemyShipNumber]) {
      // if enemy exists, proceed with attack
      battleFormula(ourShip, enemyShips[enemyShipNumber]);
      if (hitCheck) {
        // check for hit
        logText(
          `You did ${ourShip.firepower} damage to Enemy Ship number ${
            enemyShipNumber + 1
          }.`
        );
      } else {
        logText(`You Missed.`);
      }

      // Check if enemy still alive
      if (enemyShips[enemyShipNumber].hull > 0) {
        battleFormula(enemyShips[enemyShipNumber], ourShip); // enemyship
        if (hitCheck) {
          logText(
            `You took ${
              enemyShips[enemyShipNumber].firepower
            } damage from Enemy Ship Number ${enemyShipNumber + 1}.`
          );

          // check if we are still alive
          if (ourShip.hull <= 0) {
            logText("Your Ship Has Been Destroyed. Game Over.");
            attackButton.removeEventListener("click", attack);
            retreatButton.removeEventListener("click", retreat);
            return;
          }
        } else {
          logText(`Enemy Ship Number ${enemyShipNumber + 1} Missed!`);
        }
      } else {
        logText(`You have destroyed Enemy Ship Number ${enemyShipNumber + 1}!`);
        enemyShips.splice(enemyShipNumber, 1); // remove enemy from array

        // check if there are any remaining enemies
        if (enemyShips[0]) {
          logText(
            `There are ${enemyShips.length} enemies remaining. How to proceed? Please select to ontinue the Attack or Retreat.`
          );
          retreatButton.addEventListener("click", retreat);
        } else {
          logText(`There are no more Enemies remaining. You have Won!`);
          attackButton.removeEventListener("click", attack);
          retreatButton.removeEventListener("click", retreat);
        }
        return;
      }

      logText(
        `You have ${ourShip.hull} Hull strength remaining. The Enemy has ${enemyShips[enemyShipNumber].hull} Hull strength left. There are ${enemyShips.length} enemies remaining. How to proceed? Please select to ontinue the Attack or Retreat.`
      );
      retreatButton.addEventListener("click", retreat);
    }
  } else {
    attackButton.removeEventListener("click", attack);
    retreatButton.removeEventListener("click", retreat);
  }
};

// prompt user to select enemy number
const chooseEnemy = () => {
  ourShip.firepower = 5;
  logText(
    `Please Input the Enemy Ship Number that you want to attack from 1 - ${enemyShips.length}`
  );
  userInput.placeholder = `Choose from 1 - ${enemyShips.length}`;
  userInput.addEventListener("change", enemySelection);
};

// handles the logic for saving the chosen enemy ship into a variable enemyShipNumber - 1 (to account for array index)
const enemySelection = (event) => {
  if (event.target.value > enemyShips.length || event.target.value <= 0) {
    logText("You Have Inputed an Invalid Number, Try Again.");
    chooseEnemy();
  } else {
    let userSelection = event.target.value;
    enemySelected = true;
    event.target.value = "";
    event.target.placeholder = "";
    enemyShipNumber = userSelection - 1;
    attackButton.addEventListener("click", attack);
    missle.addEventListener("click", missleFunction);
    logText(
      "Select Attack to Proceed with Regular Attack or Select Missle to use Missle"
    );
  }
};

//simple battle formula
const battleFormula = (ship1, ship2) => {
  hitCheck = ship1.accuracyCheck(ship1.accuracy);
  ship2.updateHealth(ship2, ship1.firepower, hitCheck);
};

//simple game over
const retreat = () => {
  logText("You Have Fled. Game Over.");
  attackButton.removeEventListener("click", attack);
  retreatButton.removeEventListener("click", retreat);
};

// Checks the amount of li in the battle log, if greater than 7, remove top one
const logChecker = () => {
  let firstChild = battleLog.firstChild;
  if (battleLog.childElementCount > 7) {
    battleLog.removeChild(firstChild);
  }
};

// function responsible for editting the battle log
const logText = (text) => {
  let li = document.createElement("li");
  li.textContent = text;
  battleLog.appendChild(li);
  logChecker();
};

// function used to start the game and set ship name
const userNameInput = (event) => {
  let ourShipName = event.target.value;
  shipName.textContent = `Ship Name: ${ourShipName}`;
  event.target.value = "";
  event.target.placeholder = "";
  startGame();
};

// function to change ship firepower to missle's firepower
const missleFunction = () => {
  if (ourShip.missleCount > 0) {
    ourShip.firepower = ourShip.misslePower;
    ourShip.missleCount--;
  } else {
    logText("You have no more Missles, proceeding with regular Attack.");
  }
  attack();
};

/*
    Event Listeners
*/

userInput.addEventListener("change", userNameInput);
