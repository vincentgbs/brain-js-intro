const trainingData = [
    '0+0=0',
    '0+1=1',
    '0+2=2',
    '0+3=3',
    '0+4=4',
    '0+5=5',

    '1+0=1',
    '1+1=2',
    '1+2=3',
    '1+3=4',
    '1+4=5',
    '1+5=6',

    '2+0=2',
    '2+1=3',
    '2+2=4',
    '2+3=5',
    '2+4=6',
    '2+5=7',

    '3+0=3',
    '3+1=4',
    '3+2=5',
    '3+3=6',
    '3+4=7',
    '3+5=8',

    '4+0=4',
    '4+1=5',
    '4+2=6',
    '4+3=7',
    '4+4=8',
    '4+5=9',

    '5+0=5',
    '5+1=6',
    '5+2=7',
    '5+3=8',
    '5+4=9',
    '5+5=10',

    // Adding part of 6+ greatly extends training, unless you adjust error
    '6+3=9',
    '6+4=10',
    '6+5=11',
];

// EXPLANATION OF Recurrent Neural Nets
// const inputMap = ['0', '+', '=', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// inputMap.length === inputSize
// BagOfWords Approach
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,1,0,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];
// [0,0,1,0,0,0,0,0,0,0,0,0];
// [1,0,0,0,0,0,0,0,0,0,0,0];

// LongShortTermMemory
const net = new brain.recurrent.LSTM({ hiddenLayers: [20] });

globalVar = {
    train: function() {
        // doesn't finish when running for errorThresh below 0.025
        net.train(trainingData, { errorThresh: 0.030, log: (stats) => console.log(stats) });
    },
    run: function() {
        // reading strings as math problems
        console.log(net.run('4+2=')); // 6, as expected
        // gets it right, sometimes
        console.log(net.run('5+6=')); // 6+5=11, 11
    }
};
