
let addingContainer=document.getElementById("AddingTasks");
let textAreaEl=document.createElement("textarea");
textAreaEl.setAttribute("rows",9);
textAreaEl.setAttribute("cols",70);
let inputHeadingEl=document.createElement("input");
inputHeadingEl.type="text";
inputHeadingEl.placeholder="Heading of the Task";
addingContainer.appendChild(inputHeadingEl);
let breakEl=document.createElement("br");
addingContainer.appendChild(breakEl);
addingContainer.appendChild(textAreaEl);
textAreaEl.classList.add("textAreas");
let ButtonElement=document.createElement("button");
ButtonElement.textContent="Add";
ButtonElement.classList.add("btn","btn-primary","mt-5","mr-5");
addingContainer.appendChild(ButtonElement);
let todoListArray=localStorage.getItem("TodoList")
if(todoListArray===null){
    todoListArray=[];
}
else{
    todoListArray=JSON.parse(todoListArray);
}
ButtonElement.onclick=function(){
    if(inputHeadingEl.value==="")
    {
        alert("Enter the heading");
    }
    let todos={
    uniqueNo:todoListArray.length+1,
    TodoHeading:inputHeadingEl.value,
    TodoItems:textAreaEl.value,
    isChecked:false
    };
    // console.log("Hello");
    inputHeadingEl.value="";
    textAreaEl.value="";
    todoListArray.push(todos);
    localStorage.setItem("TodoList",JSON.stringify(todoListArray));
    
    
}
let CheckButtonDiv=document.createElement("div");

let CheckTodosButton=document.createElement("button");
CheckTodosButton.textContent="Check Todos";
CheckTodosButton.classList.add("btn","btn-info","mt-auto");
// let breakELe=document.createElement("br");
// addingContainer.appendChild(breakEle);
CheckButtonDiv.appendChild(CheckTodosButton);
addingContainer.appendChild(CheckButtonDiv);

CheckTodosButton.onclick=function(){
    window.location.href="CheckTodos.html";
}

let BackToHomeDiv=document.createElement("div");
let BackToHome=document.createElement("button");
BackToHome.classList.add("btn","btn-success");
BackToHome.textContent="Back To Home";
BackToHomeDiv.classList.add("BackToHome","mt-4");
BackToHomeDiv.appendChild(BackToHome);
addingContainer.appendChild(BackToHomeDiv);

BackToHome.onclick=function()
{
    window.location.href="Todo.html";
}