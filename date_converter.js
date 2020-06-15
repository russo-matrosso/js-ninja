let americanDate = prompt('Date in american format:');

// Реализация здорового человека:
let parsedDate = americanDate.split('/');
let russianDate = [parsedDate[1], parsedDate[0], parsedDate[2]].join('.');

alert(russianDate);

// Реализация через slice:
let month = americanDate.slice(0, 2);
let day = americanDate.slice(3, 2);
let year = americanDate.slice(6);

let russianDate = `${day}.${month}.${year}`

alert(russianDate);
