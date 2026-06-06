let todolist=localStorage.getItem("TodoList");
let parsedTodoList=JSON.parse(todolist);
let unorderedList=document.getElementById("unorderedList");
let count=1;
function Listing(todo,count)
{
    let ListItem=document.createElement("li");
    ListItem.id="todo"+todo.uniqueNo;
    let lableElement=document.createElement("label");
    lableElement.classList.add("label");
    let inputCheckBox=document.createElement("input");
    inputCheckBox.type="checkbox";
    lableElement.classList.add("lable1");
    ListItem.classList.add("listItem");
    if(count>1){
        ListItem.classList.add("mt-3");
    }
    inputCheckBox.id="input"+todo.uniqueNo;
    inputCheckBox.classList.add("inputCheckBox");
    lableElement.setAttribute("for","input"+todo.uniqueNo);
    lableElement.textContent=todo.TodoHeading;
    ListItem.appendChild(inputCheckBox);
    ListItem.appendChild(lableElement);
    
    unorderedList.appendChild(ListItem);
}

for(let item of parsedTodoList)
{
    if(item.TodoHeading !== undefined && item.TodoHeading !== "")
    {
        Listing(item,count);
        count++;
    }
}