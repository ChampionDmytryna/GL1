// 1.
function wordsCount(data){
  if (typeof(data) === 'string') {
    return data.split(" ").reduce((acc, el) => {
      let elToLowerCase = el.toLowerCase();
      acc[elToLowerCase] = acc[elToLowerCase] ? ++acc[elToLowerCase] : 1;
      return acc;
    }, {});
  }
} 
console.log(wordsCount("My name is Name")); //{my:1,name:2,is:1}
  
// 2.
// Написати функцію, яка приймає два значення: масив(arr) та цифру(num). Повертає новий масив,
// елементами якого є квадрати цифр з arr, які є меншими за num
function powArray(arr, num){
  //return arr.reduce((acc, el) => acc.concat(el.toString().split("").filter(e => +e < num).map(e => Math.pow(+e, 2))), []);
	return arr.reduce((acc, el) => acc.concat(el.toString().split("").map(e => Math.pow(+e, 2)).filter(e => e < num)), []);
}
console.log(powArray([1,3,-5,34,4], 10)); //[1, 9, 9]
console.log(powArray([1,3,-5,3,4], 10)); //[1, 9, 9]

// 3.
function checkData(str){
  return [...arguments].slice(1).every(el => typeof(el) === 'object' && el.some(e => e === str));
}

console.log(checkData("bla", [1,2,"Yura", "bla"], ["bla"])); //true
console.log(checkData("bla", [1,2,"Yura"], ["aaaa", "bla"], [1,2,3,4], ["bla", "test"])); //false