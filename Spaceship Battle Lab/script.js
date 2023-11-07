/* 
    Variables
*/
const userName = document.getElementById("name-input");
const shipName = document.querySelector(".ship-name");
const attackButton = document.getElementById("attack-button");
const retreatButton = document.getElementById("retreat-button");
const battleLog = document.getElementById("battle-log-list");

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

const ourShip = new Battleship(20, 5, 0.7);

const enemyShips = [];
let enemyShipHull = Math.floor(Math.random() * (6 - 3) + 3);
let enemyShipFirepower = Math.floor(Math.random() * (4 - 2) + 2);
let enemyShipAccuracy = Math.random() * (0.8 - 0.6) + 0.6;
for (let i = 0; i < 6; i++) {
  enemyShips.push(
    new Battleship(enemyShipHull, enemyShipFirepower, enemyShipAccuracy)
  );
}

/*
    Game Functions
*/
const startGame = () => {
  userName.removeEventListener("change", userNameInput);
  logText(
    `You Have Encountered ${enemyShips.length} Enemy Alien Ships. Pick to Attack or Retreat`
  );

  attackButton.addEventListener("click", attack);

  retreatButton.addEventListener("click", retreat);
};

const attack = () => {
  let hitCheck = false;
  logText("You look for a ship to attack.");
  // check remaining enemy ship
  if (enemyShips[0]) {
    hitCheck = ourShip.accuracyCheck(ourShip.accuracy);
    enemyShips[0].updateHealth(enemyShips[0], ourShip.firepower, hitCheck);
    if (hitCheck) {
      logText(`You did ${ourShip.firepower} damage to an Enemy Ship.`);
    } else {
      logText(`You Missed.`);
    }

    if (enemyShips[0].hull > 0) {
      enemyShips[0].accuracyCheck(enemyShips[0].accuracy);
      ourShip.updateHealth(ourShip, enemyShips[0].firepower, hitCheck);
      if (hitCheck) {
        logText(
          `You took ${enemyShips[0].firepower} damage from the Enemy Ship.`
        );
        if (ourShip.hull <= 0) {
          logText("Your Ship Has Been Destroyed. Game Over.");
          attackButton.removeEventListener("click", attack);
          retreatButton.removeEventListener("click", retreat);
          return;
        }
      } else {
        logText(`Enemy Ship Missed!`);
      }
    } else {
      logText("You have destroyed the Enemy Ship!");
      enemyShips.shift();
      if (enemyShips[0]) {
        logText(
          `There are ${enemyShips.length} enemies remaining. How to proceed? Please select to ontinue the Attack or Retreat.`
        );
      } else {
        logText(`There are no more Enemies remaining. You have Won!`);
        attackButton.removeEventListener("click", attack);
        retreatButton.removeEventListener("click", retreat);
      }
      return;
    }

    if (enemyShips[0]) {
      logText(
        `You have ${ourShip.hull} Hull strength remaining. The Enemy has ${enemyShips[0].hull} Hull strength left. There are ${enemyShips.length} enemies remaining. How to proceed? Please select to ontinue the Attack or Retreat.`
      );
    }
  } else {
    logText("No More Enemies Detected. You Have Won! Congratulations!");
  }
};

const retreat = () => {
  logText("You Have Fled. Game Over.");
  attackButton.removeEventListener("click", attack);
  retreatButton.removeEventListener("click", retreat);
};

const logChecker = () => {
  let firstChild = battleLog.firstChild;
  if (battleLog.childElementCount > 7) {
    battleLog.removeChild(firstChild);
  }
};

const logText = (text) => {
  let li = document.createElement("li");
  li.textContent = text;
  battleLog.appendChild(li);
  logChecker();
};

const userNameInput = (event) => {
  let ourShipName = event.target.value;
  shipName.textContent = `Ship Name: ${ourShipName}`;
  event.target.value = "";
  event.target.placeholder = "";
  startGame();
};
/*
    Event Listeners
*/

userName.addEventListener("change", userNameInput);
