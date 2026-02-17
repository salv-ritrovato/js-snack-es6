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
