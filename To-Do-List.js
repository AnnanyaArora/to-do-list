const todolist=[];
renderTodoList();
function renderTodoList(){


let todolisthtml='';
for(let i=0;i<todolist.length;i++){
    const todoObject=todolist[i];
    const name=todoObject.name;
    const duedate=todoObject.duedate;
    
    
    const html=`
    <input type="checkbox" class="js-checkbox" onchange="celebrate(event)"> 
   <div> ${name}</div>
   <div> ${duedate}</div>
    <div>
    <button type="button" 
   class="delete-todo-button "onclick="removeTodo(${i})">Delete</button>
    </div>`
    todolisthtml +=html;
}
document.querySelector('.js-todo-list')
.innerHTML=todolisthtml;
}
function addTodo(){
    const inputnameElement =document.querySelector('.js-name-input');
   const name= inputnameElement.value ;
   if(name ===''){
    alert('Please enter a valid task!');
    return;
   }
   const inputdateElement=document.querySelector('.js-due-date-input');
   const duedate=inputdateElement.value;

   if(duedate ===''){
    alert('please enter date');
    return;
   }

   todolist.push({name: name,duedate:duedate});

   inputnameElement.value='';
   inputdateElement.value='';

   renderTodoList();
   
}
function celebrate(event) {
    if (event.target.checked) {
        showConfetti(event.target);
    }
}

function showConfetti(element) {
    const popper = document.createElement("div");
    popper.innerHTML = "🎉🎊";
    popper.classList.add("popper-effect");
    document.body.appendChild(popper);

    // Get position of checkbox
    const rect = element.getBoundingClientRect();
    popper.style.left = `${rect.left + window.scrollX}px`;
    popper.style.top = `${rect.top + window.scrollY - 20}px`;

    // Remove popper after animation
    setTimeout(() => {
        popper.remove();
    }, 1000);
}
function removeTodo(index){
    todolist.splice(index,1); 
    renderTodoList();
}
