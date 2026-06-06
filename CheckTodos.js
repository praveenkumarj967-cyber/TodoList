let todolist=localStorage.getItem("TodoList");
let parsedTodoList=JSON.parse(todolist);
let unorderedList=document.getElementById("unorderedList");
let count=1;
function clicking(todo)
{
    let labelEl=document.getElementById("label"+todo.uniqueNo);
    let inputCheck=document.getElementById("input"+todo.uniqueNo);
    if(inputCheck.checked)
    {
        todo.isChecked=true;
        labelEl.classList.add("checked");
    }
    else{
        todo.isChecked=false;
        labelEl.classList.remove("checked");
    }
    localStorage.setItem("TodoList",JSON.stringify(parsedTodoList));
}
function Listing(todo,count)
{
    let listDiv=document.createElement("div");
    let ListItem=document.createElement("li");
    ListItem.id="todo"+todo.uniqueNo;
    let lableElement=document.createElement("label");
    lableElement.classList.add("label");
    lableElement.id="label"+todo.uniqueNo;
    let inputCheckBox=document.createElement("input");
    inputCheckBox.type="checkbox";

    lableElement.classList.add("lable1");
    ListItem.classList.add("listItem","mr-3");
    if(count>1){
        ListItem.classList.add("mt-3");
    }
    inputCheckBox.id="input"+todo.uniqueNo;
    lableElement.setAttribute("for","input"+todo.uniqueNo);
    lableElement.textContent=todo.TodoHeading;
    ListItem.appendChild(inputCheckBox);
    ListItem.appendChild(lableElement);
    listDiv.classList.add("ListDiv");
    listDiv.appendChild(ListItem);
    unorderedList.appendChild(listDiv);
    if(todo.isChecked)
    {
        lableElement.classList.add("checked");
        inputCheckBox.checked=true;
    }
    inputCheckBox.onclick=function(){
        clicking(todo);
    };
}

for(let item of parsedTodoList)
{
    if(item.TodoHeading !== undefined && item.TodoHeading !== "")
    {
        Listing(item,count);
        count++;
    }
}