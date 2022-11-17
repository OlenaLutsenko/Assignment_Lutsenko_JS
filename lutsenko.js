function moreSeven(number) {
    if (number > 7) {
    console.log('Привет'); } 
};

moreSeven(8);
moreSeven(6);


function viacheslav(name) {
    if (name === "Вячеслав") {
        console.log("Привет, Вячеслав"); 
    } else {
        console.log("Нет такого имени"); 
    };
};

viacheslav("Вячеслав");
viacheslav("Вася");


var array = [3, 5, 9, 10, 12];
var arrayDevidedOn3 = array.filter(function (numbers) {
    return numbers % 3 == 0;
});

console.log(arrayDevidedOn3);

