const params = new URLSearchParams(window.location.search);
const id = params.get("id");
let MainContainer=document.getElementById("MoreTasksContainer");


let TodoList=localStorage.getItem("TodoList");
let parsedTodoList=JSON.parse(TodoList);
let index=parsedTodoList.findIndex(function(eachItem){
    if("label"+eachItem.uniqueNo===id)return true;
    return false;
});
let headingEl=document.createElement("h1");
headingEl.textContent=parsedTodoList[index].TodoHeading;
headingEl.classList.add("heading");
let ParaEl=document.createElement("p");
ParaEl.textContent=parsedTodoList[index].TodoItems;
ParaEl.classList.add("para");
if(parsedTodoList[index].isChecked){
    headingEl.classList.add("completedTask");
    ParaEl.classList.add("completedTask");
}
MainContainer.appendChild(headingEl);
MainContainer.appendChild(ParaEl);