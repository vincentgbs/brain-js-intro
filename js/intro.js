const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];

globalVar = {
    train: function() {
        net.train(trainingData, {
            log: (error) => console.log(error),
            logPeriod: 100
        });
        document.getElementById("console").innerHTML = "Training...";
    },
    run: function() {
        // console.log(net.run([0, 0]));
        // console.log(net.run([0, 1]));
        // console.log(net.run([1, 0]));
        // console.log(net.run([1, 1]));
        let result = net.run([0, 0]);
        console.log(result);
        document.getElementById("console").innerHTML = "Result: " + result;
    }
};
