// detecting numbers in "images"

const net = new brain.NeuralNetwork();
const trainingData = [
    { input: zero, output: { zero: 1 } },
    { input: one, output: { one: 1 } },
    { input: two, output: { two: 1 } },
    { input: three, output: { three: 1 } },
    { input: four, output: { four: 1 } },
    { input: five, output: { five: 1 } },
    { input: six, output: { six: 1 } },
    { input: seven, output: { seven: 1 } },
    { input: eight, output: { eight: 1 } },
    { input: nine, output: { nine: 1 } }
];

globalVar = {
    train: function() {
        net.train(trainingData, { log: (stats) => console.log(stats) });
    },
    run: function() {
        const result = brain.likely(toArray(
            '### ###' +
            '#  #  #' +
            '#     #' +
            '#######' +
            '#     #' +
            '#     #' +
            '#######'
        ), net);
        console.log(result);
    }
};
