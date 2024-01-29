// function shape(cls){
// var a = document.getElementById('shape');
// a.className = cls
// }

// className jo hy wo js ka reserve keyword hy, hm na yeh kiya hy ka var a main div "shape ko get kiya id sa, phr a.className sa hm na cls jo parameter hy usko change karwate rahe"


// function addClass(){
//     var b = document.getElementById("shape");
//     b.className += " border" //+= yeh karta hy ka jo pehlay sa class hy uske sath dosri class dal dayta hy, " border", is main blank space border ka sath is liye rakha hy ka class name sahee sa aye.

// }

function addData (){
    var ab =document.getElementById("input");
    var bc = document.getElementById("display");
    bc.innerHTML = ab.value; //hm na is main ab ki value paragraph main dali hy tou kiya yeh hy ka ab ki vaue ab.value sa li r usko equal to bc para jo ka input value nai hy usey bc.innerHTML sa enter kara di thats it.!!
}


// var pera = document.getElementsByTagName("P");
// console.log(pera);
// console.log(pera[0])
// pera[0].style.color ="red";
// console.log(pera[0]);

var parents = document.getElementById("parent");
var son = parents.getElementsByTagName("P");
console.log(parents);
console.log(son);
// son.style.color = "blue"

for(let i =0; i<son.length;i++){
    son[i].style.color ="blue"
}