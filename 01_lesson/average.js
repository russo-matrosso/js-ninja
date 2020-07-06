let sum, quantity;
sum = quantity = 0;

for (;;) {
    let input = prompt('Type a number');
    if (input === '') {
       break
    }

    input = parseFloat(input)

    sum += input;
    quantity++;
}

let average = sum / quantity;

alert(`Sum: ${sum}, quantity: ${quantity}, average: ${average}`);