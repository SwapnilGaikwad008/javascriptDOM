// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
//  var header = document.querySelector('#main-header');
//  header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }


//TRAVESING THE DOM

//var itemList = document.querySelector('#items');
//ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode.parentNode);


//ParentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "gray";
// console.log(itemList.parentNode.parentNode);

//ChildNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

 //FirstChild
// console.log(itemList.firstChild);

 //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

//LastChild
// console.log(itemList.lastChild);

//FirstElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 2';

//nextSibling
//console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//Previous Siblings
// console.log(itemList.previousSibling);
// itemList.previousElementSibling.style.color = "green";

//CreateElement
// //create a Div
// var newDiv = document.createElement('div');

// //Add Class
// newDiv.className = 'hello div';

// //Add id
// newDiv.id = 'hello divid';

// //Add attr
// newDiv.setAttribute('title','Hello World');

// //create test node
// var newDivtext = document.createTextNode('Swapnil Rocks');

// //Add text to div
// newDiv.appendChild(newDivtext);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = "30px";
// container.insertBefore(newDiv, h1);


//ButtonClick Function
// function buttonClick(){
//     alert("Button Clicked");
// }


//Creating a button click EventListener
// var button = document.getElementById('button').addEventListener
// ('click', buttonClick);


//  function buttonClick(e){
//     document.getElementById("header-title").textContent = "Document";
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// var output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';

// console.log(e.type);

// console.log(e.clientX);
// console.log(e.clientY);

// console.log(e.offsetX);
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
//}

//MouseOver 

var button = document.getElementById('button');
var box = document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent);
// button.addEventListener('dblclick',runEvent);

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent); 
// box.addEventListener('mouseout',runEvent);
// box.addEventListener('mousemove',runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select =document.querySelector('select');
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

//itemInput.addEventListener('focus',runEvent);
//itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);

// select.addEventListener('change',runEvent);
// itemInput.addEventListener('input',runEvent);

form.addEventListener('submit',runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('Event type '+e.type);

    console.log(e.target.value);
//    document.getElementById('output').innerHTML ='<h3>'
//    +e.target.value+'</h3>';
  //  output.innerHTML = '<h3>MouseX: '+e.offsetX+'</h3><h3>MouseY: '+e.offsetY+ '</h3>';

 // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}





































