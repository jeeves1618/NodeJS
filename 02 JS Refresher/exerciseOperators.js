const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and
 prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

 */
//1. Create one player array for each team (variables 'players1' and 'players2')
let players1 = [...game.players[0]];
console.log(players1);
let players2 = [...game.players[1]];
console.log(players1);

/*
2. The first player in any player array is the goalkeeper and the others are field players. 
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
*/
let [gk, ...fieldPlayers] = [...game.players[0]];
console.log(gk);
console.log(fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

//4. During the game, Bayern Munich (team 1) used 3 substitute players.
//So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let players1Final = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
let { team1 } = { ...game.odds };
let { team2 } = { ...game.odds };
let { x: draw } = { ...game.odds };
console.log(team1, team2, draw);
let { team1: Team1, team2: Team2, x: Draw } = { ...game.odds };
console.log(Team1, Team2, Draw);
/*
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
*/

let printGoals = function (...playerNames) {
  //function (...playerNames) user spread operator and takes all 6 player names as input
  let [...playerArray] = playerNames;
  console.log(playerArray, playerArray.length);
};

printGoals("Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl");

//7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 && console.log("The odds are in favour of team 1");
team1 < team2 || console.log("The odds are in favour of team 2");
