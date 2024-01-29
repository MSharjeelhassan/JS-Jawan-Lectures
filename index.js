// alert("hello javasriprt, it is for user only")

//console.log("it is for programmer;s comment")

// var person= "zaid";

//var 10person (illegal)
// var person10 (legal)
// var person-1 (illegal)
// var person_1 (legal)
// var $person(illegal)
// var per%son (illegal)
// var alert (illegal)
// var person name (illegal)
// var per!son (illegal)
// var pers*son (illegal)


// alert(person)

// var marks=75
// console.log (marks)

// var firstName = "sharjeel"

// console.log (firstName)


// var a=10;
// var b=a+1;
// var b=++a;
//  var b=a++
// var b=--a

// console.log(a, "A value")
// var b=a--
// var b=--a

// var b=--a*(a*2)
// console.log(b,"B value")
// console.log(a, "A value")


// Prompt practise


// var userName=prompt("Enter your name");
// var age=prompt("enter your age");
// console.log(userName,age);

// var age = 12;

// if(age ===21){console.log("Condition true")}

// == , === equal to
// != , !== not equal to
// > greater than
// < less than
// >= grater than equal to
// <=less than equal to
// var student=false;

// if(age>=18){console.log("Allow")} else if(student==true){console.log("Allow on student card")} else{console.log("Nikal beta")}
// if(age>=18){console.log ("Allow")} if



// var age = 8;
// var cnic = true;
// var studentCard = true;

// if(age >=18)if (cnic==true){console.log("Allow")};

//  if (age >=18 && cnic==true && studentCard==true){console.log("Allow this person")}else{console.log("Bhag sale")}

// if(age>=18 || cnic==true || studentCard==true){console.log("Chal beta khamoshi sa nikal jaa")}



// var age = prompt("Enter age");
// var cnic = prompt("Enter 5 digit number")
// var studentCard = true;

// if (age >= 18 && cnic.length == 5) {
//     console.log("Mubarak ho chalo jao beta")
// } else { 
//     console.log("Time waste mat karo ghr jao r Sahee NIC ya age dalo") 
// }




// var arr = ["asad", "BAQAR", "C","Rahman"]
// console.log(arr)

// arr [3]="saad"

// console.log (arr)

// arr [8]="Rahman Daket"

// console.log (arr)


// arr.push("Last")

// console.log(arr)
// console.log(arr[8])


// push end main add karta hy
// pop end main remove karta hy
// shift start main remove karta hy
// unshift start main zero index sa pehlay kuch bhi add karta hy
// slice jo hy wo aik chunk ya selected part show karta hy console main baqi jo array value hain wo show nai karta
// slice ka format hy likhne ka jo next steps main likhonga, jo last index show karna hy us sa next index ki value likhni hoti hy tb jakar wo apka bataya howa last index show kareyga
// splice main index add aur remove kar saktey hain, r splice ko likhne ka format hy aik, start main ap index ki starting batatey hain r comma ka bad jitne values remove karni hain wo likh lain again after comma ap jo cheez add karna chahtry hain wo likh lain


// arr.pop();
// console.log(arr)
// last main jo C tha wo remove kardia pop na

// arr.shift()
// console.log(arr)
// dakhen start main jo asad tha usey remove kardia


// arr.unshift("Sir basit is our boss")
// console.log(arr)

// unshift zero index sa pehlay add kardayga

// var a = arr.slice(0,3)
// console.log(a)



// console.log(arr)

// var a=arr.splice(2,0,"1","2","3","4")
// console.log(a)
// console.log(arr)

// var a=["abc", "kjl", "yut", "omn", "abc","mno","xyz"];
// var b=[1,2,3,4,5];

// if we want to find the "qwe" value in our array, this approach will work.

// var i =a.indexOf("qwe");
// console.log (i);

// the value of -1 shows that this value is not here in the array.

// now if i want to find any string value in the array then we can go for this approach.

// // lets take example of qwe again

// var i = a.indexOf("qwe");
// if (i != -1){
//     console.log("Word found");

// }
// else {
//     console.log("Not found")
// }

// // If i want to know about the number of strings in the Array, than i have to use the lenght method

// var count = a.length;
// console.log(count);

// NOw if i want to find the last string valuie than i can go for a.slice

// var lastElement = a.slice(-1);
// console.log(lastElement);

// now if i want to reverse the Array, i will uise the array method of .reverse, in reverse ()we will not add any number in the bracket

// var rev = a.reverse();
// console.log(rev);


// Now if i wish to combine two arrays together than i will use array method of join

// let take exapmle arrays

// var combineLetters = a.join();
// console.log(combineLetters);

// when we see this console log we see abc and other are seperated by comma and we dont need that so what we will do id that we add ()in the join bracket like this

// var combineLetters = a.join("");
// console.log(combineLetters);


// now if i want to concatentate two arrays together
// var combineArray = a.concat(b);
// console.log(combineArray);
// console.log(a);
// console.log(b);


// check class register for notes

// var existing = a.includes("xyz")
// console.log(existing);


// var i = a.lastIndexOf("abc");
// console.log(i);



// NOw for Loop starts

// syntax for loop is like this,

// for( var i = 0; i<10; i++){
//     console.log(i);
// }

// now i want to replace this var i numbers with the var a, so this is what i will do

// for ( var i =0; i<10; i++){

//     console.log(a[i]);
// }

// Now i want to stop this loop till the var a array value, what i will do in this is that, i will give the limitation of for loop based on the lenght of var a, acha var a boht upar hy tou wahan ja kar dakh lana

// for ( var i =0; i<a.length; i++){

//     console.log(a[i]);
// }

// var a=["abc", "kjl", "yut", "omn", "abc","mno","xyz"];

// var b = "mno"

// for (var i =0; i<a.length; i++){
//     if(b==a[i]){
//         console.log("Yes we found it")
//     }
// }


// for (var i=0; i<10;i++){
//     for(var j = 0; j<5;j++){
//         console.log(i,j)
//     }
// }

// var a = ["A", "B","C", "D","E"];
// var b = [1,2,3,4,5,6,7,8,9];

// for(i=1; i<10;i++)
// {
//    for( j=0;j<5;j++){
//     console.log(i+a[j])
//    }
// }
// var a = ["A", "B","C", "D","E", "f"];
// var b = [1,2,3,4,5,6,7,8,9];

// for(i=0; i<b.length;i++)
// {
//    for( j=0;j<a.length;j++){
//     console.log(b[i]+a[i])
//    }
// }



// var a = "Karachi";
// a = a.toLowerCase();

// var b =prompt("Enter city name");
// b=b.toLowerCase();

// if (a===b){
//     console.log("City Matched");
// // }

// var cityNames=["Karachi", "lahr","islama","newyork","peshwar","lal haveli", "multan","Bahawalpur"];
// var userWrd = prompt("Kuch tou bolo, kis city ka ho");

// // userWrd.toLowerCase();
// // cityNames.toLowerCase();

// for(var i=0; i<cityNames.length; i++){
//     if(userWrd===cityNames[i]){console.log("Acha acha")}else{console.log("hmain na pata apkey city ka")};

//     }

// sir ka code hy yeh jo nechay likha hy line 28 sa onward

// var arr = ["karachi","isal","lahore","muscat"];
// var ab=prompt("Enter City");
// ab = ab.toLowerCase();

// for (var i=0;i<Array.lemght;i++){
//    arr[i]= arr[i].tolowerCase();
// console.log(arr[i]);
// }



//     var a ="HARIS";
//     var letter1=a.slice(0,1);
//     letter1 =letter1.toUpperCase();

//     var otherletters =a.slice(1);
//     otherletters =otherletters.toLowerCase();

// //     var word = letter1 + otherletters;
// //     console.log(word);


// var a = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae maiores voluptas Saturday porro dicta sint non ullam distinctio quisquam vero";

// var word = "Saturday";

// for(var i =0; i<a.length;i++){
//     var checkLetter = a.slice(i, i+8);
//     // i+8 main 8 is liye likha hy coz saturday main 8 letters hain
//     console.log(checkLetter);
//     if(checkLetter==word){
//         console.log("Word Found");
//     }
// }

// // is upar wali example main hum na var a main Saturday word found kiya hy.

// // Ab hm log is Saturday ko replace karenge new word sa

// var word = "Saturday";
// var secondWord = "Kal chhhuttti hai";
// var startingText;
// var endingText;

// for (var i=0; i<a.length;i++){
//     var checkLetter = a.slice(i, i+8);
//     if(checkLetter== word){
//         console.log(checkLetter,i);
//         startingText = a.slice(0,i);
// console.log(startingText, i);
//         endingText = a.slice(i+8);
//         console.log(startingText);
//         console.log(endingText);

//     }
// }

// a = startingText + secondWord + endingText;

// console.log(a);

//    now agr  main saturday v


// Next Lecture Start

// Rounding ka 3 methods hain, 1 round off 2 ceil 3 floor
// ceil apko agae ka number dayta hy r floor pechlay number round off karkey dauga


// var a = 3.55;
// var b = Math.round(a);

// console.log(b);


// Math.ceil is an operator in jS jo apko forcefully next number pa lay jata hy yani round off karkey next number pa lay jaega

// var a = 46.1;
// var b = Math.round(a);
// console.log(b);

// var a = 46.1;
// var b = Math.ceil(a);
// console.log(b);


// var a = 16.9;
// var b = Math.floor(a);
// console.log(b);


// Generating Random number after decimal 16 numbers will given in radom, its value floats between 0.0000000000000000 to 0.9999999999999999

// var a = Math.random(a);
// var b = Math.round(a);
// console.log(a.lenght); we cannot count the lenght of number, .lenght only works on string.
// console.log(a, b);


// Dice wali example
// var dice = Math.random();
// dice = dice*6;
// var diceQty = Math.ceil(dice);
// console.log(dice, diceQty);

// Box change color
// var box = Math.random();
// console.log(box);
// box = box*255;
// var boxCol = Math.floor(box);
// console.log(box, boxCol);


// Ways to convert String to Numbers

// 1. Number
// 2. parseint
// 3. parsefloat
// 4 adding a + sign

// var a = "100.09";

// var b = Number(a);
// var b =parseInt(a);
// var b =parseFloat(a);
// var b =+a;

// console.log(b + 33);

// Convert number to String

// var a = 100.99;
// var b = a.toString();
// console.log(b);



// Fixing the decimal point to given number, see the method toFixed, as we put 2 in bracket we see only 2 numbers after decimal.
// the imp part is tofixed converts the value of variable to string.
// var a = 34.342559;
// console.log(a*2000);

// var b = a.toFixed(2);
// console.log(b*2000);
// console.log(typeof b);

// Date and time

// var currentDate = new Date("2023-12-01T12:30:50");
//  agr new Date() bracket empty rakhenge tou aj ki date ayegi 
// console.log(currentDate.getDate(), "Dates");
// console.log(currentDate.getFullYear(), "Year");
// console.log(currentDate.getDay(), "Day");
// console.log(currentDate.getMonth(), "month");
// console.log(currentDate.getHours(), "Ghanta");
// console.log(currentDate.getMinutes(), "Mins");
// console.log(currentDate.getSeconds(), "Sec");
// console.log(currentDate.getMilliseconds(), "Millisec");
// through above method we can get date day month and etc of any given date, based on the defined var, like in this example as currentDate



// var currentDate = new Date();

// currentDate.setDate(15);
// console.log(currentDate.getDate(), "Dates");

// currentDate.setFullYear(2024);
// console.log(currentDate.getFullYear(), "Year");


// console.log(currentDate.getDay(), "Day");

// currentDate.setMonth(2);
// console.log(currentDate.getMonth(), "month");

// currentDate.setHours(4);
// console.log(currentDate.getHours(), "Ghanta");

// currentDate.setMinutes();
// console.log(currentDate.getMinutes(), "Mins");

// currentDate.setSeconds(65);
// console.log(currentDate.getSeconds(), "Sec");

// currentDate.setMilliseconds(250);
// console.log(currentDate.getMilliseconds(), "Millisec");



// Now we want to calculate the difference between two dates.

// var dateOfBirth = new Date("01-01-2000");
// var currentDate = new Date();

// var currentTime = currentDate.getTime(); 
// var dateOfBirth = dateOfBirth.getTime();
// // In above lines 130 and 131 the time we will get will be calculated in milliseconds, from 1st Jan 1970, this date is default date in JS
// var diff = currentTime - dateOfBirth;

// console.log(currentTime);
// console.log(dateOfBirth);
// console.log(diff);

// var gg = Math.ceil(0.0000000000001);
// console.log(gg);

// var gt = Math.floor(1.00);
// console.log(gt);

// console.log(Math.floor(45));

// console.log(Math.ceil(12.0));


// var d = ["sun", "mon", "tue", "wed", "thurs", "fri", "sat"];
// var y = new Date();
// // console.log(y);
// var day = d[y.getDay()];
// console.log(day);

/*
var a = new Date();
a.setDate((new Date()).getDate()+10);
// is bar hm na yeh kiya  hy ka current date main 10 day barha diye hain
// howa aise hy ka new Date() sa hmain date object mila jo current date day raha hy ab us current date sa hm na get Date kiya yani us date object sa date nikali r phr +10 ka matlab yeh hy ka hm na us main 10 days add kardiye.

// var t = new Date().getDate()+10;
console.log(a);
// var y =setDate(16);
// console.log(y);
// console.log(a);


// Chapter 35 Functions

function abc() {
    console.log("ABC");
}
// 
abc()

// in this example we are taking parameters in function meaning this value will be given to the fuction.yani amount = a -200 main a jo hy wo function ko daynge hm.
function xyz(a){
    var amount = a- 200;
    console.log(amount); 
}
xyz(500);
xyz(1000);
xyz(600);
xyz(700);

// IN another example hm ab a r b dono li value laynge jaise nechay dakhae hy., yeh a aur b ko parameter kahtey hain r yeh bhi variable hi hotey 
function xyzz(a, b){
    var amount = a-b;
    console.log(amount); 
}
xyzz(500, 100);
xyzz(1000, 200);
xyzz(600, 50);
xyzz();
// In line number 39 i have call the function empty, so there will be no calculation because no value of a and b is given to the funct

*/
// Class of 13 JAn 2024

// class test

// // create a function to calculate AbstractRange.date should be pass in parameter
// // test it like

// calcAge("01-1-2001")
// calcAge("02-14-2008")
// calcAge("06-15-1990")

// function test(a) {
//     var age = new Date();
//     var userAge = new Date(a)
//     console.log(age)
//     console.log(userAge)
//     // var calcAge;
//     // console.log(calcAge=Number(a)-age);
//     console.log(age.getFullYear()-userAge.getFullYear())
//     // console.log(userAge.getFullYear())

// }
// // test('01-1-2001')
// // test("02-14-2008")
// test("06-15-1990")


/*return ka rules 1. return pa fuction khatam hojata hy is ka bad scope main kuch bhi hoga wo nai chalega 2. function ka bad jo likha hoga wo return apko daydega 3. return ka bad only 1 hi value wo lay sakta hy(comma laga kar koi dosri value nai day saktey, even agr array bhi hogi tou wo bhi aik hi index ki value layga)*/

// function abc() {
//     return "hello world"
// }
// var helloWorld = console.log(abc())


// function calDiscount(price, discount){
//      var amount = price - discount
    
// }
// console.log(amount)
// calDiscount(100, 10)

// this amount can not be accessed after the scope ends, thats why JS given error as amount is not defined because the var is defined in function scope.
// in order to use this amount we will use "return", this return will give out the value of amount, and the return will follow, the menitoned rules.

// function calDiscount(price, discount){
//     var amount = price - discount
//    return amount
// }
//  var a = calDiscount(600, 60)
// console.log(a)


// calDiscount(100, 10)




// Class test

// write a JS function that reverses a Number.

// example x = 32243;
// expected output = 34223

// function reverse (a){
//     var rev = a.toString().split("").reverse().join("");

//     return rev
// }
// var z = reverse(12345)
// console.log(z)


// Write a JS function that checks whether a passed string is a palindrome or not ? A palindrome is word, phrase or sequesnce that reads the same backward as forward, e.g madam or nurses run.

// function palindrome(userString){
// var reverse = userString.split("").reverse().join("")
// if(userString === reverse){console.log("ok")}else {console.log("not palindrome")}
// }
// palindrome("madaam")   

// another test from sir, Write a JS function that accepts a string as a parameter and converts the first letter of each word into upper case. example string : "the quick brown fox" Expected output : "The Quick Brown Fox"

// function capital(userData){
// var a = userData.split(" ");
// console.log(a);
// for (var i=0; i<a.length;i++){
//     a[i]=a[i].slice(0, 1).toUpperCase()+a[i].slice(1).toLowerCase();

//     }
// a= a.join(" ")
// return a;
// }
// var b = capital("my name is sharjeel");
// console.log(b)


// Another test question Write a JS function that takes an array of numbers and find the lowest and greatest numbers, sample array [1,2,3,4,5] expected output[1,5]

// function maxMin(input){
//     var a = input;
// for(var i =0; i<a.length ; i++)
// {a[i]=Number(a[i])
// console.log(a[i])
// }

// var a = Math.max(a[i]);
// var b = Math.min(a[i]);
// return a + b

// }
// maxMin([100, 60, 70, 80, 90])


// Switch Statement

// var day = "sat"
// switch(day){
//     case "mon":
//         console.log("Monday alert");
//         break
//  case "tues":
//     console.log("Tuesday alert");
// break
//     case "wed" :
//         console.log("Wednesday alert")
// break
//         case "thur" :
//             console.log("Thursady alert")
// break
//             case "fri":
//                 console.log("Friday agaya hy bhai")
//                 break
//             case "sat":
//                 case "sun":
//                     console.log("chutti alert bhai log")
// break
//                     default:
//                         console.log("is hafte main nai hy")
// }
// var day = 'thur'

// if (day === 'mon') {
//     console.log('Monday agaya');
//     console.log('coding start');

//   } else if (day === 'tues') {
//     console.log('Prepare code practise');

//   } else if (day === ('wed' || 'thur')) {
//     console.log('Write code examples');

//   } else if (day === 'fri') {
//     console.log('jumma hy bhai');

//   } else if (day === 'sat' || 'sun') {
//     console.log('Enjoy the weekend :D');

//   } else {
//     console.log('Not a valid day!');
//   }
  

// While loop

// var i = 0;
// while(i<10){
// i++
// console.log(i)
// }


// DO while loop

// var i = 0;
// do{
//     i++
//     console.log(i)
// }
// while(i<0)


// function clickbuton(){
//     console.log("Button/paragraph clicked");
// }

// here i have created a function and used this fuction in index.html by calling this fuction in an event of click button, we can create an event of click button on anything

// Now lets make a image flip game in css and JS, for this i will go to the css and html.

// function flip(element, value) 
// {console.log(element, value)
//     if(value) {
//     element.style.backgroundImage = "url('image/game.jpg')"
// }

// else{
//     element.style.backgroundImage = "url('image/another.jpg')"
// }

// }


// function flip(element,value) {
//     console.log (element,value)
//     if (value){
//         element.style.backgroundImage = "url('http://img.freepik.com/free-photo/diamonds-arrangement-pink-background_23-2149673629.jpg?w=826&t=st=1705754267~exp=1705754867~hmac=6e6df7a2497150ddc7d9725b060c71f5c5cc2f8b4ade3d5c78a5359b00ff2a64')"
//     } else {
//           element.style.backgroundImage = "url('http://img.freepik.com/free-vector/man-saying-no-concept-illustration_114360-14192.jpg?size=626&ext=jpg')"
        
//     } }

function abc(message){
    console.log(message);
}

function checkField(element){//element jo hy yahan wo koi in built function nai hy yeh just parameter name hy
    if(element.value.length < 3){
        alert(`Input should be grater than 3 letters`)
    }
}

function addValue(){
    console.log("Button Click");
    var a = document.getElementById("inp"); //yeh document.getElementbyId aik in built property hy to call by id.
    console.log(a)
}
function addValue(){
    console.log("Button Click");
    var a = document.getElementById("inp"); //yeh document.getElementbyId aik in built property hy to call by id.
    var b = document.getElementById("inp2");

    console.log(a.value);
    b.value = a.value
}


