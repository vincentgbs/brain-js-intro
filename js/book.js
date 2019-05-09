const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane.',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.'
];

const net = new brain.recurrent.LSTM();

globalVar = {
    train: function() {
        net.train(trainingData, {
            iterations: 999,
            errorThresh: 0.011
        });
    },
    run: function() {
        console.log('Jane' + net.run('Jane'));
        console.log('It was' + net.run('It was'));
    }
};
