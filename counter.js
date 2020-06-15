const input = prompt('Enter a phrase:');

let vowels = 0;
let consonants = 0;

for (let i = 0; i < input.length; i++) {
    if (/^[aeiou]$/.test(input[i])) {
        vowels++;
    } else if (/^[bcdfghjklmnpqrstvwxyz]$/.test[input[i]]) {
        consonants++;
    }
}

alert(`Vowels: ${vowels}, consonants: ${consonants}, total: ${vowels + consonants}`);