//ЗАДАЧА 1

//Обертка для каррирования
function curry(func) {
  let argsArray = [];

  //Функция, накапливающая результаты
  function curried(...args) {
    argsArray.push(...args);
    return curried;
  }

  //Переопределение методов
  curried.valueOf = curried.toString = function() {
    const result = func.apply(this, argsArray);

    //Обнуляем значение массива аргументов, чтобы каждый вызов был независиимым
    argsArray.length = 0;
    return result;
  }

  return curried;
}

//Функция сложения
function sum(...args) {
  return args.reduce((sum, value) => sum + value, 0);
}

//Доп пример: функция умножения
function multiply(...args) {
  return args.reduce((sum, value) => sum * value, 1);
}

//Тесты
const funcSum = curry(sum);
const funcMultiply = curry(multiply);

console.log("ЗАДАЧА 1");

//Математическая операция
console.log("Сумма (1 + 2 + 3 + 4) = ", funcSum(1)(2)(3)(4) + 0) // 1 + 2 + 3 + 4 = 10
console.log("Умножение (1 * 2 * 3) = ", funcMultiply(1)(2)(3) + 0) // 1 * 2 * 3 = 6
console.log();

//Вывод
console.log(`Сумма (1 + 3 + 2 + 3 + 6 + 6) = ${funcSum(1)(3)(2)(4)(6)(6)}`) // 1 + 3 + 2 + 4 + 6 + 6 = 22
console.log(`Умножение (2 * 10) = ${funcMultiply(2)(10)}`) // 2* 10 = 20
console.log();


//ЗАДАЧА 2

//Функция для создания объекта из всей строки
function createObjFromStr(str) {
  const wordsArray = str.split('.');

  //Функция для создания объекта из одного слова
  function createObj(index) {
    let obj = {}

    //Заканичваем рекурсию на последнем слове
    if(index === wordsArray.length - 1) {
      obj[wordsArray[index]] = {};
    }

    //Пока есть слова рекурсивно создаем объекты
    if(index < wordsArray.length - 1) {
      obj[wordsArray[index]]  = createObj(index + 1)
    }
    return obj;
  }

  return createObj(0);
}

// Тесты
const str = "one.two.three.four.five";

console.log("ЗАДАЧА 2");

console.log(createObjFromStr(str));
