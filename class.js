// function shape(cls){
// var a = document.getElementById('shape');
// a.className = cls
// }

// className jo hy wo js ka reserve keyword hy, hm na yeh kiya hy ka var a main div "shape ko get kiya id sa, phr a.className sa hm na cls jo parameter hy usko change karwate rahe"


// function addClass(){
//     var b = document.getElementById("shape");
//     b.className += " border" //+= yeh karta hy ka jo pehlay sa class hy uske sath dosri class dal dayta hy, " border", is main blank space border ka sath is liye rakha hy ka class name sahee sa aye.

// }

// function addData (){
//     var ab =document.getElementById("input");
//     var bc = document.getElementById("display");
//     bc.innerHTML = ab.value; //hm na is main ab ki value paragraph main dali hy tou kiya yeh hy ka ab ki vaue ab.value sa li r usko equal to bc para jo ka input value nai hy usey bc.innerHTML sa enter kara di thats it.!!
// }


// var pera = document.getElementsByTagName("P");
// console.log(pera);
// console.log(pera[0])
// pera[0].style.color ="red";
// console.log(pera[0]);

// var parents = document.getElementById("parent");
// var son = parents.getElementsByTagName("P");
// console.log(parents);
// console.log(son);
// son.style.color = "blue" wrong code

// for(let i =0; i<son.length;i++){
//     son[i].style.color ="blue"
// }

// console.log(document);//this shows you the document i.e html

// console.log(document.childNodes); //this gives you the child of document that is Doc type and HTML, in the form of array

// console.log(document.childNodes[0]); //give the first child of document's childNode [0]
// console.log(document.childNodes[1]); //give the second child of document's childNode [1]

// console.log(document.childNodes[1].childNodes);

// var parents = document.getElementById("parent");
// console.log(parents.lastChild);


// What we are doinh here is we are making an HTML element
/* THIs is my class code
var a = document.getElementById('main');
function createElem(){
    var p = document.createElement('P');
    let b = document.getElementById('input');
    b = b.value;
    p.innerHTML = b;
    p.setAttribute('class','pera');  //this create the attribute in an element, its syntax is first write the attribute than its value, and value can be multiple meaning aik sa zada class 
    p.setAttribute('id','p1');
    console.log(p);
    a.appendChild(p);
    // console.log(b)//this is for my understanding
    var btn = document.createElement("button");
    var txt = document.createTextNode('abc');
    btn.setAttribute('class','border');
    btn.appendChild(txt);
    a.appendChild(btn);


}

function del(){
    a.innerHTML="";
    
    // let b =document.getElementById('input').value = '';
    

}
*/

//Yahn SIR KA CODE HY TO DO LIST WALA UPAR JO LIKHA HY WO MAIN NA CLASS MAIN KHUD TRY KIYA THA, BELOW THIS LINE IS SIRS CODE EXTRACTED FROM THE IMAGES I TOOK FROM CLASS


var a= document.getElementById("main");
var inpu = document.getElementById("input");

function createElem(){
var p = document.createElement('P');
var txt = document.createTextNode(inpu.value);
p.appendChild(txt);
p.setAttribute('class','pera');
p.setAttribute('id','p1');

var delBtn = document.createElement('button');
var delLabel = document.createTextNode('Delete');
delBtn.appendChild(delLabel);
delBtn.setAttribute('onclick','delTodo(this)')
p.appendChild(delBtn)

a.appendChild(p);
}

function delTodo(elem){
    var p= elem.parentNode
    p.remove();
}