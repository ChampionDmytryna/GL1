
// Function Declaration
console.log(sum(1, 2))
function sum(a, b) {
    return a + b;
}


console.log(sum(1, 2))

// Function Expression

var sum = function (a, b) {
    return a + b;
}
    console.log(sum(1, 2))





var f = () => {
    console.log(22)
}
f()

vs

function f() {
    console.log(22)
}
f()


// //1 param
let f1 = el => {
    return el
}
console.log(22)



// //2 or more params
let f2 = (el, el1) => {
    return el + el1
}
console.log(f2(22,2))


// //return
let f3 = el => console.log(el > 3 ? true : false)
f3(2)


let f4 = elem => console.log(elem ** 2)
f4(20)


let f4 = elem => elem ** 2
console.log(f4(20)


test = () => {
    console.log(arguments)
}
test(1, 23)



let test = (name) => {
    this.name = name
}
console.log(test("Yura"))






//array.forEach(function (elem, index, array) { //code })
//Always return undefined
let arr = [1, 4, 3, 2, 22]
for (let i = 0; i < arr.length; i++) {
    console.log("Elem is " + arr[i]);
}



let arr = [1, 4, 3, 2, 22]
let s = arr.forEach((e, i, a) => {
    console.log(`${i+1} elem is ${e}`);
    console.log(a)
});

let arr = [1, 4, 3, 2, 22]
let s = arr.forEach((e, i, a) => {
    console.log(i + " elem is " + e);
    console.log(a)
});



//array.map(function (elem, index, array) { //code })
//Always return array with the same length
let arr = [1, 4, 3, 2, 22]
var result = [];
for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] ** 2;
}
console.log(result)



let arr = [1, 4, 3, 2, 22]
 var result = arr.map(e => e + 2);
 console.log(result)




//array.filter(function (elem, index, array) { //code })
//Return array
let arr = [1, 4, 3, 2, 22]
var result = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 2) {
        result.push(arr[i])
    }
}
console.log(result)


let arr = [1, 4, 3, 2, 22]
 var result = arr.filter(e => e > 2)
 console.log(result)



//array.sort(function (a,b) { //code })
//Return sorted array, if return value > 0 --> replace values
let arr = [1, 4, 3, 2, 22]
var result = arr.sort((a, b) => a - b)
//var result = arr.sort()
 console.log(result)

// //array.reduce(function (acc,elem) { //code },acc)
// //Return some variable
let arr = [1, 4, 3, 2, 22]
var result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (result > 5) {
        console.log("Sum is bigger than 5")
    } else {
        console.log("Sum is less than 5")
    }
}


let arr = [1, 4, 3, 2, 22]
var result = arr.reduce((acc, e) => {
    acc += e;
    if (acc >= 5) {
        console.log("Sum is bigger than 5")
    } else {
        console.log("Sum is less than 5")
    }
    return acc
}, 0)


var nums = [10, 20, 30, 40, 50];
var sum = nums.reduce((el, n) => {
  return el + n;
}, 0);
console.log(sum)


//array.some(function (elem) { //code })
//Return true/false
let arr = [1, 4, 3, 2, 22]
var result = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        result = true;
        break;
    }
}
console.log(result)



let arr = [1, 4, 3, 2, 22]
result = arr.some(e => e === 2)
console.log(result) 


// //array.every(function (elem) { //code })
// //Return true/false
let arr = [1, 4, 3, 2, 22]
var result = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 45) {
        result = true ;
        break;
    }
}
console.log(result)


let arr = [1, 4, 3, 2, 22]
result = arr.every(e => e < 4)
console.log(result)


//for
let arr = [1, 4, 3, 2, 22]
for (let e of arr) {
    console.log(e)
}




for(let i=0;i<10;i++){
    console.log(i)
}



for(let e in {ahh:2}){
    console.log(e)
}




let e = e => e.toString().split(``).reduce((acc, el) => acc += +el, 0)

console.log(e(123456))


//парні
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i = 0; i < numbers.length; i++)
   {if(i % 2 == 1){console.log(numbers[i]);}}


//непарні
   let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(i = 0; i < numbers.length; i++)
   {if(i % 2 == 0){console.log(numbers[i]);}}



let arr = ['Med', 34, 'veno', 45];

function temp(test){
   for(i = 0; i<arr.length; i++){
   if (!isNaN(test[i] )) {
      console.log(test[i])
   }
}
}
 temp(arr);



 function wordsCount(data){
    var reg = /[a-z]{2,}/gi;
    return reg
    } 
    wordsCount("My name is Name") //{my:1,name:2,is:1}





    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
    let yearRegex = /\d+/g    //d+ виводить все більше ніж 1 цифра в числі
    var res = text.match( yearRegex )
    if(res.filter(e => e = res))
    console.log(`Years: ${res}`);

