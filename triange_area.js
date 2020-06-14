let side = parseFloat(prompt('Right triangle side:'));

if (isNaN(side)) {
    alert('Not a number!')
} else {
    let area = side**2 * Math.sqrt(3) / 4;
    alert(`Triangle area: ${area}`);
}

