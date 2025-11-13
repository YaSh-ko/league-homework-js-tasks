//ЗАДАЧА 1

//Обертка для каррирования
function curry(func) {

  //Функция, накапливающая результаты
  function createCurried(prevArgs = []) {
    function curried(...newArgs) {

      if(newArgs.length === 0 ) return func(...prevArgs);

      const argsArray = [...prevArgs, ...newArgs];
      return createCurried(argsArray);
    }

    curried.toString = () => func(...prevArgs);
    curried.valueOf = () => func(...prevArgs);

    return curried;
  }

  return createCurried();
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
console.log(+funcSum(1)(2));



//ЗАДАЧА 2

//Функция для создания объекта из всей строки
function createObjFromStr(str) {

  if(str.trim().length === 0) return {};

  const wordsArray = str.trim().split('.');

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
const str = "one.two";

console.log("ЗАДАЧА 2");

console.log(createObjFromStr(str));
