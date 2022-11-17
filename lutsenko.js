//Make an algorithm: if the entered number is greater than 7, then output “Привет” 
function moreSeven(number) {
    if (number > 7) {
    console.log('Привет'); } 
};

moreSeven(8);
moreSeven(6);


//Make an algorithm: if the entered name matches Вячеслав, then output “Привет, Вячеслав”, if not, then output “Нет такого имени”
function viacheslav(name) {
    if (name === "Вячеслав") {
        console.log("Привет, Вячеслав"); 
    } else {
        console.log("Нет такого имени"); 
    };
};

viacheslav("Вячеслав");
viacheslav("Вася");


//Make an algorithm: there is a numeric array at the input, it is necessary to output the elements of the array that are multiples of 3
var array = [3, 5, 9, 10, 12];
var arrayDevidedOn3 = array.filter(function (numbers) {
    return numbers % 3 == 0;
});

console.log(arrayDevidedOn3);

