const team83 = [
  "Kapil Dev",
  "Mohinder Amarnath",
  "Kirti Azad",
  "Roger Binny",
  "Sunil Gavaskar",
  "Syed Kirmani",
  "Madan Lal",
  "Sandip Patil",
  "Balwinder Sandhu",
  "Yashpal Sharma",
  "Ravi Shastri",
  "Krishnamachari Srikkanth",
  "Sunil Valson",
  "Dilip Vengsarkar",
];

for (const player of team83) {
  console.log(player);
}

//If you want to get the index of the entries also, please use the entries function
for (const player of team83.entries()) {
  console.log(player);
}

/*

That will output the entries in the form of arrays

[ 0, 'Kapil Dev' ]
[ 1, 'Mohinder Amarnath' ]
[ 2, 'Kirti Azad' ]
[ 3, 'Roger Binny' ]
[ 4, 'Sunil Gavaskar' ]
[ 5, 'Syed Kirmani' ]
[ 6, 'Madan Lal' ]
[ 7, 'Sandip Patil' ]
[ 8, 'Balwinder Sandhu' ]
[ 9, 'Yashpal Sharma' ]
[ 10, 'Ravi Shastri' ]
[ 11, 'Krishnamachari Srikkanth' ]
[ 12, 'Sunil Valson' ]
[ 13, 'Dilip Vengsarkar' ]

if you want to get the index/value in two variables, then use the following syntax.
*/

for (const [playerIndex, playerValue] of team83.entries()) {
  console.log(playerIndex, playerValue);
}

/*

That will outp0 Kapil Dev
1 Mohinder Amarnath
2 Kirti Azad
3 Roger Binny
4 Sunil Gavaskar
5 Syed Kirmani
6 Madan Lal
7 Sandip Patil
8 Balwinder Sandhu
9 Yashpal Sharma
10 Ravi Shastri
11 Krishnamachari Srikkanth
12 Sunil Valson
13 Dilip Vengsarkar
*/
