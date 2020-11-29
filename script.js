// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
/*
let obj = {
    dog: {
        name: "Bobic",
        age: 2 ,
        color: "black",
},
    human: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    car: {
        model: "lanos",
        color: "white",
        year: 2018,
        volume: 1.2,
        power: 165,
},
    flat: {
        roomCount: 3,
        floor: 2,
        sq: 80,
        isbuild: true,
        owner: "Oksana Mazur"
},
    book: {
        pagecount: 248,
        year: 2018,
        author: "Ivan Franko",
}
}
*/
// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів
/*
let obj2 = {
    taksa: {
        name: "Bobic",
        age: 2 ,
        color: "black",
},
    colly: {
        name: "Delly",
        age: 1 ,
        color: "white",
    },
    sembernar: {
        name: "Adelina",
        age: 6 ,
        color: "red",
},
    dog: {
        name: "Bobic",
        age: 2 ,
        color: "black",
    },
    spaniel: {
        name: "Bobic",
        age: 2 ,
        color: "black",
},
    human1: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    human2: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    human3: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    human4: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    human5: {
        name: "Katya",
        age: 18,
        student: true,
        heigth :165,
},
    car1: {
        model: "lanos",
        color: "white",
        year: 2018,
        volume: 1.2,
        power: 165,
},

    car2: {
        model: "BMW",
        color: "black",
        year: 2017,
        volume: 1.9,
        power: 265,
},

    car3: {
        model: "toyota",
        color: "red",
        year: 2019,
        volume: 1.6,
        power: 185,
},
    car4: {
        model: "infinity",
        color: "purple",
        year: 2020,
        volume: 2,
        power: 245,
},
    car5: {
        model: "renau",
        color: "white",
        year: 2015,
        volume: 1.4,
        power: 180,
},
}
*/

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
/*
let obj3 = {
    house: {
        address: {city: "Lviv", street: "Pasichna", numberOfHouse: 3},
        color: "white",
        countOfFloor: 3,
        isElevator: true,
        flatRoom:[2, 3,1]
},
    driver: {
        name: "Oleh",
        lastName:"Guk",
        age: 23,
        lastWork: ["Bolt", "Uber"],
        address: {city: "Lviv", street: "Horodotska", numberOfHouse: 13},

},
    toy: {
        model: "Teddy",
        isInShop: true,
        properties: {isVoice: true, isRun: false},
        material: soft,
        size: [12, 25, 35],
},
    bag: {
          color: "black",
          size: [35,45,60],
          properties: {material: "skin", weigh: 500},
          isInSale: true,
          isAnyColor: false,

    }
}
*/
// Дан массив:
// let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// - статус Максима
// - ім'я передостаннього об'єкту
// - ім'я третього об'єкта
// - вік Олега
// - вік Олі
// - вік + ім'я 5го об'єкта
// - вік + сатус Анни
// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
/*
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[3].name);
console.log(users[5].name , users[5].age );
console.log(users[5].age , users[5].status );  


// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// - отримує текст з блоку з id "rules"
// - замініть текст параграфа з id 'content' на будь-який інший
// - замініть текст параграфа з id 'rules' на будь-який інший
// - змініть кожному елементу колір фону на червоний
// - змініть кожному елементу колір тексту на синій
// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// - отримати всі елементи з класом fc_rules
// - поміняти колір тексту у всіх елементів fc_rules на червоний
let getFromId = document.getElementById("content");

 let text  = getFromId.innerText;
console.log(text);
console.log(getFromId.innerText = "this is changing text");
getFromId.style.backgroundColor = "red"
getFromId.style.color = "blue";
console.log(document.getElementById("rules").getElementsByClassName('*'))


let idRules = document.getElementById("rules");
let text2 = idRules.innerText;
console.log(text2);
console.log(idRules.innerText = "I AM CHANGING A TEXT");
idRules.style.backgroundColor = "red";
idRules.style.color = "blue";

let clas = idRules.getAttribute("class");
console.log(clas)

let fcRules = document.getElementsByClassName("fc_rules");
console.log(fcRules)

for(let item of fcRules){
    item.style.color = "red"
    }

*/