// restaurants with day of the week you can eat free with kid
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 }, // will assume other days of the week are 0
        output: { [restaurantName]: 1 } // will assume other restaurants are 0
    });
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

// example function to get prediction value instead of the raw output
function restaurantForDay(dayOfWeek) {
    const result = net.run({ [dayOfWeek]: 1 });
    let highestValue = 0;
    let highestRestaurantName = '';
    for (let restuarantName in result) {
        if (result[restuarantName] > highestValue) {
            highestValue = result[restuarantName];
            highestRestaurantName = restuarantName;
        }
    }
    return highestRestaurantName;
}
// console.log(restaurantForDay('Monday'));
// console.log(restaurantForDay('Tuesday'));
// console.log(restaurantForDay('Wednesday'));
// console.log(restaurantForDay('Thursday'));
// console.log(restaurantForDay('Friday'));
// console.log(restaurantForDay('Saturday'));
// console.log(restaurantForDay('Sunday'));

globalVar = {
    train: function() {
        const stats = net.train(trainingData);
        console.log(stats);
        document.getElementById("console").innerHTML = "Training...";
    },
    run: function() {
        // let result = net.run({ 'Monday': 1 });
        let result = restaurantForDay('Monday');
        console.log(result);
        document.getElementById("console").innerHTML = "Result: " + result;
    }
};
