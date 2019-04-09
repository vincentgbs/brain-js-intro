// Count to 5
// 1-5, 5-1
const trainingData = [
    [1,2,3,4,5],
    [5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

console.log(net.run([1,2,3,4]));
console.log(net.run([5,4,3,2]));

// bonus 10-5, 5-10
const trainingData2 = [
    [5, 6, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5]
];

net.train(trainingData2);

console.log(net.run([5, 6, 7, 8, 9]));
console.log(net.run([10, 8, 9, 7, 6]));
