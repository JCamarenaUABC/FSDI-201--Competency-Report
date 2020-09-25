var links = document.getElementsByTagName('a');

links[0].setAttribute('target','blank');

links[0].setAttribute('class','border');

var input = document.getElementById("type");

input.hasAttribute("class");
input.getAttribute("class");

//create html elements
var h1 = document.createElement('h1');
console.log(h1);


var text = document.createTextNode('Hello');
console.log(text);

h1.appendChild(text);
console.log(h1);

var main=document.getElementById("register-main");
main.appendChild(h1);

input.style.display="none";

var txtname = document.getElementById("name");
var p1 = document.getElementById("p1");
p1.removeChild(txtname);

/*
//Create a list with 3 elements li
var petSection = document.getElementById("petSection").innerHTML="<ul><li>1</li><li>2</li><li>3</li></ul>";


var ul=document.createElement("ul");

for(var i=1;i<=3;i++){
    var li=document.createElement("li");
    textLi=document.createTextNode("Element "+i);
    li.appendChild(textLi);
    ul.appendChild(li); 
}

document.getElementById('petSection').appendChild(ul);

*/


