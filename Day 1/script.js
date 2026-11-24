function showMyMessage() {
    alert("Hello Students");
    console.log("Hello, Students");
}
/*IN the javascript we can declare a variable using var,And reasign the value to it.and we no need to declare the data types specifically. we can declare a variable using let,And reasign the value to it.and we no need to declare the data types specifically. 
var b=20;
var b=40;
var c=true;
console.log(typeof b);
console.log(typeof c);
console.log(b);
//IN javascript we can reassign the value but cant't able to redeclare.
let d=30;
d=40;
console.log(d);
const a=50;
console.log(a);
//Data types in javascript
//1.premitive data types:number,string,boolean,undefined,null,symbol,bigint
//2.non-premitive data types:object,array,function
//1.number
let num=10;
let num1=20;
console.log(num);
//2.strings
let str="Hello Students";
let str1='Welcome to Css learning';
console.log(typeof str);
console.log(str1);
//3.boolean
let bool=true;
let bool1=false;
console.log(typeof bool);
console.log(bool1);
//4.null
let n=null;
let age=25;
if(age>=18){
    n=true;
}   
console.log(typeof n);
console.log(n);
//5.undefined
let u;
console.log(typeof u);
console.log(u);
//6.symbol
let sym=Symbol("Hello");
console.log(typeof sym);
console.log(sym);
//7.bigint
let bigInt=BigInt(1234567890123456789012345678901234567890);
console.log(typeof bigInt);
console.log(bigInt);
//non-premitive data types
//1.object
let person={
    name:"Aslam",
    age:25,
    college:"Sri Eshwar College of Engineering",
    address:{
        city:"chennai",
        state:"Tamilnadu",
        country:"India"
    },
    contactNumbers:[1234567890],
}
console.log(typeof person);
console.log(person);
console.log(person.name);
console.log(person.address.city);
//2.array
//In javaScript we can declare an array using two ways
const number=[1,2,3,4,5];
//In java 
int[]arr=new int[5];
int arr[]={1,2,3,4,5};
//built in methods in array
//1.push() method
number.push(6);
console.log(number);
//2.pop() method
number.pop();
console.log(number.indexOf(3));
//3.shift() method
number.shift();
console.log(number);
//4.unshift() method
number.unshift(0);
console.log(number);
//5.slice() method
const slicedArray=number.slice(1,4);
console.log(slicedArray);
//6.splice() method
number.splice(2,1);
console.log(number);
//7.concat() method
const newArray=[7,8,9];
const concatenatedArray=number.concat(newArray);
console.log(concatenatedArray);
//8.join() method
const joinedString=number.join("-");
console.log(joinedString);
//9.reverse() method
const reversedArray=number.reverse();
console.log(reversedArray);
//10.sort() method
const sortedArray=number.sort();
console.log(sortedArray);
//3.function
function add(a,b){
    return a+b;
}
let a=10;
let b=20;
let c=add(a,b);
console.log(add(a,b));
//arrow function
const multiply=(a,b)=>{
    return a*b;
}
console.log(multiply(10,20));
//call Back function
function greet(name,callback){
    console.log("Hello "+name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greet("Aslam",sayGoodbye);*/
//synchronous programming
console.log("Start");
function task1(){
    console.log("Task 1");
}
function task2(){
    console.log("Task 2");
}
task1();
task2();
console.log("End");
//asynchronous programming
console.log("Start");
function task1(){
    setTimeout(()=>{
        console.log("Task 1");
    },2000);
}
function task2(){
    console.log("Task 2");
}
task1();
task2();
console.log("End");     
