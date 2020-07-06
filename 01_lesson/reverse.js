const input = prompt('Enter a phrase:');

// Реализация здорового человека:
alert(input.split('').reverse().join(''));

// Реализация через цикл:
let result = ''
for (let i = 1; i <= input.length; i++) {
    result += input[input.length - i];
}

alert(result)