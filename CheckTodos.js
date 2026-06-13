let todolist=localStorage.getItem("TodoList");
let parsedTodoList=[]
if(todolist!==null)parsedTodoList=JSON.parse(todolist)
let unorderedList=document.getElementById("unorderedList");
let count=1;
let mainContainer=document.getElementById("MainContainer");
function clicking(todo)
{
    let labelEl=document.getElementById("label"+todo.uniqueNo);
    let inputCheck=document.getElementById("input"+todo.uniqueNo);
    let DivElement=document.getElementById("listDiv"+todo.uniqueNo);
    if(inputCheck.checked)
    {
        todo.isChecked=true;
        labelEl.classList.add("checked");
        DivElement.classList.add("AfterCompletionTask");
    }
    else{
        todo.isChecked=false;
        labelEl.classList.remove("checked");
        DivElement.classList.remove("AfterCompletionTask");
    }
    localStorage.setItem("TodoList",JSON.stringify(parsedTodoList));
}
function deleting(todo)
{
    
        let indexValue=parsedTodoList.findIndex(function(eachItem){
        if(todo.uniqueNo===eachItem.uniqueNo)return true;
        return false;
    });
    if(indexValue!==-1)
    {
        parsedTodoList.splice(indexValue,1);
        localStorage.setItem("TodoList",JSON.stringify(parsedTodoList));
        let todoElement=document.getElementById("Combined"+todo.uniqueNo);
        unorderedList.removeChild(todoElement);
    }
}
function Listing(todo,count)
{
    let combinedDivWithDel=document.createElement("div");
    combinedDivWithDel.id="Combined"+todo.uniqueNo;
    let DelContainer=document.createElement("div");
    let DelIcon=document.createElement("i");
    DelIcon.classList.add("fa-solid","fa-trash");
    let listDiv=document.createElement("div");
    DelContainer.classList.add("DelContainer");
    let ListItem=document.createElement("li");
    DelContainer.appendChild(DelIcon);
    ListItem.id="todo"+todo.uniqueNo;
    let lableElement=document.createElement("label");
    lableElement.classList.add("label");
    lableElement.id="label"+todo.uniqueNo;
    let inputCheckBox=document.createElement("input");
    inputCheckBox.type="checkbox";
    inputCheckBox.style.borderRadius="5px";
    lableElement.classList.add("lable1");
    lableElement.style.marginLeft="5px";
    ListItem.classList.add("listItem","mr-3");
    if(count>1){
        ListItem.classList.add("mt-3");
    }
    inputCheckBox.id="input"+todo.uniqueNo;
    lableElement.setAttribute("for","input"+todo.uniqueNo);
    lableElement.textContent=todo.TodoHeading;
    ListItem.appendChild(inputCheckBox);
    ListItem.appendChild(lableElement);
    listDiv.id="listDiv"+todo.uniqueNo;
    listDiv.appendChild(ListItem);
    combinedDivWithDel.classList.add("ListDiv");
    combinedDivWithDel.appendChild(listDiv);
    combinedDivWithDel.appendChild(DelContainer);
    combinedDivWithDel.classList.add("d-flex","flex-row");
    unorderedList.appendChild(combinedDivWithDel);
    DelIcon.addEventListener("click",function(){
        deleting(todo);
    });
    if(todo.isChecked)
    {
        lableElement.classList.add("checked");
        listDiv.classList.add("AfterCompletionTask");
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


let TodoButton=document.createElement("button");
let ButtonsDiv=document.createElement("div");
ButtonsDiv.classList.add("ButtonsDiv");
TodoButton.classList.add("btn","btn-primary","ml-5");

TodoButton.textContent="Add Todo";
ButtonsDiv.appendChild(TodoButton);

mainContainer.appendChild(ButtonsDiv);
let HomeBtnDiv=document.createElement("div");
HomeBtnDiv.classList.add("ButtonsDiv");
let BackToHomeBtn=document.createElement("button");
BackToHomeBtn.classList.add("btn","btn-info","mt-3");
BackToHomeBtn.textContent="Back To Home";
HomeBtnDiv.appendChild(BackToHomeBtn);
mainContainer.appendChild(HomeBtnDiv);

TodoButton.onclick=function()
{
    window.location.href="Tasks.html";
}
BackToHomeBtn.onclick=function()
{
    window.location.href="Todo.html";
}