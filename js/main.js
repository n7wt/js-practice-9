// Создаю константу в которой получаю ul через айдишник
const ulList = document.getElementById("ulList");

// Задаю константы с созданными элементами
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");

// Заполняю элементы контентом
li1.textContent = "First";
li2.textContent = "Second";
li3.textContent = "Third";
li4.textContent = "Fourth";

// Добавляю в ul созданные ранее узлы/элементы
ulList.appendChild(li1);
ulList.appendChild(li2);
ulList.appendChild(li3);
ulList.appendChild(li4);

// Вывод в консоль
console.log(ulList);
