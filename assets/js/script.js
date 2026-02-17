// TASK 1
const racingBikes =  [{
    name: 'Fire',
    weight: 80
},
{
    name: 'Void',
    weight: 27
},
{
    name: 'Air',
    weight: 73
},
{
    name: 'Earth',
    weight: 23
},
{
    name: 'Water',
    weight: 16
}
]

let lightBike = racingBikes[0];
for (let i = 0; i < racingBikes.length; i++) {
    if (racingBikes[i].weight < lightBike.weight) {
        lightBike = racingBikes[i]
    }
};
console.log(lightBike);

// TASK 2
const soccerTeams = [
  {
    name: "blue",
    goals: 0,
    fouls: 0
  },
  {
    name: "red",
    goals: 0,
    fouls: 0
  },
  {
    name: "violet",
    goals: 0,
    fouls: 0
  },
  {
    name: "purple",
    goals: 0,
    fouls: 0
  },
  {
    name: "cyan",
    goals: 0,
    fouls: 0
  }
];

for (let i = 0; i < soccerTeams.length; i++) {
  soccerTeams[i].goals = Math.floor(Math.random() * 250)
  soccerTeams[i].fouls = Math.floor(Math.random() * 250)
}
console.log(soccerTeams);

const namesFouls = [];

for (let i = 0; i < soccerTeams.length; i++) {
 namesFouls.push({
  name: soccerTeams[i].name,
  fouls: soccerTeams[i].fouls
 })
};

console.log(namesFouls);
