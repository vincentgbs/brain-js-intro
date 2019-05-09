const trainingData = null;

const net = new brain.NeuralNetwork();

globalVar = {
    train: function() {
        net.train(trainingData);
    },
    run: function() {
        console.log(net.run('example'));
    }
};
