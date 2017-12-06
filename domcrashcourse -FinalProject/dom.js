var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//Filter event
filter.addEventListener('keyup',filterItems);
//Add item
function addItem(e){
    e.preventDefault();

//Get input values
var newItem = document.getElementById('item').value;

//create new li element
var li = document.createElement('li');

//Add class
li.className = 'list-group-item';
//console.log(li);

//Add text node with input value
li.appendChild(document.createTextNode(newItem));

//create Delete Button Element
var deleteBtn = document.createElement('button');

//Add classes to delete Button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//Append text node
deleteBtn.appendChild(document.createTextNode('x'));

//Append  button to li
li.appendChild(deleteBtn);

//Append li to list
itemList.appendChild(li);
}


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure ?')){
           var li = e.target.parentElement;
           itemList.removeChild(li);
        }
    }

}

function filterItems(e){
    //converts text into lowercase
    var text = e.target.value.toLowerCase();
    //get Li
    var items = itemList.getElementsByTagName('li');
    //Converts into Array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
       // console.log(itemName);
     if(itemName.toLowerCase().indexOf(text) != -1){
         item.style.display = 'block';
     }else{
         item.style.display = 'none';
     }
    });
}




