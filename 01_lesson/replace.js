let input = prompt('Enter a phrase:');

// Реализация здорового человека:
alert(input.replace(/\s+/g, ' '));

// Реализация через цикл:
let spaceDetected = false;
let result = ''

for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (char === ' ') {
        if (spaceDetected) {
            continue;
        } else {
            spaceDetected = true;
        }
    } else {
        if (spaceDetected) {
            spaceDetected = false;
        }
    }

    result += char;
}

alert(result);
