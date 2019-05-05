// console.log(rawData[0]);
function scaleDown(step) {
    return {
        open: step.open  / 138,
        high: step.high  / 138,
        low: step.low  / 138,
        close: step.close  / 138,
    };
}
// console.log(scaleDown(rawData[0]));

// reverse of normalize stepDown
function scaleUp(step) {
    return {
        open: step.open * 138,
        high: step.high * 138,
        low: step.low * 138,
        close: step.close * 138,
    };
}
// console.log(scaleUp(scaleDown(rawData[0])));
const scaledData = rawData.map(scaleDown);

// we want the neural net to recognize smaller patterns and predict off those
const trainingData = [
    scaledData.slice(0, 5),
    scaledData.slice(5, 10),
    scaledData.slice(10, 15),
    scaledData.slice(15, 20)
];
// console.log(trainingData);
const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 4,
    hiddenLayers: [8, 8],
    outputSize: 4,
});

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("train").addEventListener("click", function() {
        net.train(trainingData, {
            learningRate: 0.005,
            errorThresh: 0.02,
            log: (stats) => console.log(stats)});
    });

    document.getElementById("run").addEventListener("click", function() {
        // console.log(scaleUp(net.run(trainingData[0])));
        console.log(
            net.forecast([
                trainingData[0][0],
                trainingData[0][1],
            ], 3).map(scaleUp) // get next 3 steps & scale up
        );
    });
});
