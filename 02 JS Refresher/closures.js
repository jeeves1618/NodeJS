const scoreEngine = function () {
  let player1 = null,
    player2 = null;

  let player1Runs = 0;
  let player2Runs = 0;

  return function (player, runsScoredInTheBall) {
    if (player1 === null) {
      player1 = player;
    } else if (player2 === null && player1 !== player) {
      player2 = player;
    }

    if (player === player1) player1Runs = player1Runs + runsScoredInTheBall;
    if (player === player2) player2Runs = player2Runs + runsScoredInTheBall;
    console.log(`${player1} Not Out   ${player1Runs}`);
    console.log(`${player2} Not Out   ${player2Runs}`);
  };
};

let scoreKeeper = scoreEngine();
scoreKeeper("S.R.Tendulkar", 1);
scoreKeeper("V.Sehwag", 4);
scoreKeeper("S.R.Tendulkar", 1);
scoreKeeper("V.Sehwag", 6);
scoreKeeper("S.R.Tendulkar", 4);
scoreKeeper("S.R.Tendulkar", 1);

/*

When we invoke the scoreEngine function, it returns a function to us and gets out of execution context. 
We are storing the returned function in a variable called scorekeeper and are able to access the variables 
within the scoreEngine function even after it has gone out of execution context. 

This is because of the closures in JS. Closures gives the functions created within a function, an access to the 
variable environment of the parent function even though it has gone out of the execution context. 

This way of accessing variable through closure has higher priority. 

Below is just a rewrite of the above function slighly differently.

Definitions:
We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can’t even
access closed-over variables explicitly. A closure is NOT a tangible JavaScript object.

setTimeout function is another classic example of closures. 
*/
const scoreEngineNext = function () {
  let player1 = null,
    player2 = null;

  let player1Runs = 0;
  let player2Runs = 0;

  function coreEngine(player, runsScoredInTheBall) {
    if (player1 === null) {
      player1 = player;
    } else if (player2 === null && player1 !== player) {
      player2 = player;
    }

    if (player === player1) player1Runs = player1Runs + runsScoredInTheBall;
    if (player === player2) player2Runs = player2Runs + runsScoredInTheBall;
    console.log(`${player1} Not Out   ${player1Runs}`);
    console.log(`${player2} Not Out   ${player2Runs}`);
  }

  return coreEngine;
};

let scoreKeeperNext = scoreEngineNext();
scoreKeeperNext("Sourav Ganguli", 1);
scoreKeeperNext("Gowtham Gambhir", 4);
scoreKeeperNext("Sourav Ganguli", 1);
scoreKeeperNext("Gowtham Gambhir", 6);
scoreKeeperNext("Sourav Ganguli", 4);
scoreKeeperNext("Sourav Ganguli", 1);

console.dir(scoreKeeper);
