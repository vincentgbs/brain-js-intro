let trainingData = [
    // { input: 'I am super happy!', output: 'happy' },
    // { input: 'What a pill!', output: 'sarcastic' },
    // { input: 'I am super unhappy!', output: 'sad' },
    // { input: 'Are we there yet?', output: 'excited' }
];

const net = new brain.recurrent.LSTM();

function logToWindowConsole(text) {
    document.getElementById("console").innerHTML = text;
}

globalVar = {
    train: function() {
        let promise = new Promise( (resolve, reject) => {
            let done = net.train(trainingData, {
                iterations: 100,
                errorThresh: 0.1
            });
            if (done) {
                resolve();
            } else {
                reject();
            }
        });

        promise.then( () => {
            console.log('Training done.');
            document.getElementById("run").removeAttribute("disabled");
        }).catch( () => {
            console.log('Neural net did not train!');
        });
    },
    run: function() {
        const input = document.getElementById('user_input').value;
        logToWindowConsole(input +' -> ' + net.run(input));
    },
    loadLexicons: function() {
        let promise = new Promise( (resolve, reject) => {
            for (i = 0; i < negative.length; i++) {
                trainingData.push({input: negative[i], output:'negative'});
            }
            for (i = 0; i < positive.length; i++) {
                trainingData.push({input: positive[i], output:'positive'});
            }
            if (true) {
                resolve();
            } else {
                reject();
            }
        });

        promise.then( () => {
            console.log('Lexicons loaded.');
            setTimeout(function() {
                document.getElementById("train").removeAttribute("disabled");
            }, 999);
        }).catch( () => {
            console.log('Error loading lexicons.');
        });
    }
};
