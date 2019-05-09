const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' }
];

const net = new brain.recurrent.LSTM();

globalVar = {
    train: function() {
        net.train(trainingData, {
            // iter: low number is inconsistent, but high number takes a long time
            iterations: 200,
            errorThresh: 0.011
        });
    },
    run: function() {
        console.log('I am unhappy! -> ' + net.run('I am unhappy!'));
        console.log('I am very happy -> ' + net.run('I am happy!'));
    }
};



/* RNN INPUT-OUTPUT Explanation */
// const trainingData = [
//     { input: '1', output: '2' }
// ];
// const net = new brain.recurrent.LSTM();
// const inputMap = ['1', 'NEW IDEA', '2'];
// [1,0,0]
// [0,1,0]
// [0,0,1]
