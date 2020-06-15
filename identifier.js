let timestamp = 1328140800;
let claster = 42;
let type = 4;
let user = 2689;

let identifier = convert(timestamp, 8)
    + convert(claster, 2)
    + convert(type, 1)
    + convert(user, 6);

console.log(identifier)

function convert(number, maxLength) {
    let hex = number.toString(16);

    if (hex.length < maxLength) {
        return '0'.repeat(maxLength - hex.length) + hex;
    } else if (hex.length > maxLength) {
        alert('error');
    } else {
        return hex;
    }
}