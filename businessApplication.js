const trainingData = [
    { input: 'I am super happy!', output: 'happy' },
    { input: 'What a pill!', output: 'sarcastic' },
    { input: 'I am super unhappy!', output: 'sad' },
    { input: 'Are we there yet?', output: 'excited' }
];

const net = new brain.recurrent.LSTM();

function logToWindowConsole(text) {
    document.getElementById("console").innerHTML = text;
}

globalVar = {
    train: function() {
        let promise = new Promise( (resolve, reject) => {
            let done = net.train(trainingData, {
                iterations: 500,
                errorThresh: 0.011
            });
            if (done) {
                resolve();
            } else {
                reject();
            }
        });

        promise.then( () => {
            console.log('Training done');
            document.getElementById("run").removeAttribute("disabled");
        }).catch( () => {
            console.log('Neural net did not train!');
        });
    },
    run: function() {
        const input = document.getElementById('user_input').value;
        logToWindowConsole(input +' -> ' + net.run(input));
    }
};
