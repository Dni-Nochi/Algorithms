// В будущем сделаю модальное окно для открытия каждой задачи с деталями
// Задачи от Claude

//1. Базовая (закрепление паттерна). Дан массив чисел и target. Верни индекс первого вхождения target, или -1, если его нет.
const arrNum = [1, 2, 10, 9, 3, 4, 1, 28, 9, 3];
function findTarget(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
}

// 2. Дан массив и target. Верни массив всех индексов, где встречается target.
function findTargets(numbers, target) {
  let targets = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      targets.push(i);
    } else {
      console.log('not target');
    }
  }
  return targets;
}

// 3. Дан массив объектов { name: string, age: number }.
//  Найди первого человека старше заданного возраста, верни его целиком (не индекс).

const personsInfo = [
  { name: 'Tima', age: 21 },
  { name: 'Lin', age: 15 },
  { name: 'Tom', age: 22 },
  { name: 'Toni', age: 23 },
];

function findPerson(personsDataBase, target) {
  for (let i = 0; i < personsDataBase.length; i++) {
    if (personsDataBase[i].age > target) {
      return personsDataBase[i];
    }
  }
}

// 4. Front-end-задача (когда будешь готов)
// У тебя есть массив объектов users с полем id.
// Напиши функцию findUserById(users, id), которая линейным поиском находит пользователя — представь,
// что это функция для поиска юзера в уже загруженном списке (например, в Redux-сторе), без похода на бэкенд.
const users = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 21 },
  { id: 91 },
  { id: 10 },
];

function findUserById(usersRedux, id) {
  for (let i = 0; i < usersRedux.length; i++) {
    if (usersRedux[i].id === id) {
      return i;
    }
  }
}

console.log(findUserById(users, 91));
