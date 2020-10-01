let newTodo = document.querySelector(".newTodo");
let addTodo = document.querySelector(".addTodo");
let ul = document.querySelector("ul")
let alertInfo = document.querySelector(".alertInfo")
let x = document.querySelectorAll(".fa-times-circle")
let editTodo = document.querySelector(".editTodo");
let editTaskBox = document.querySelector(".editTask")

const createTask = () => {
    if(newTodo.value!==""){

        let newP = document.createElement("p");
        let newLi = document.createElement("li");
        let menu = document.createElement("div");
        menu.classList.add("menuEl");
        menu.innerHTML = ' <i class="far fa-times-circle"></i><i class="fas fa-edit"></i>'
        newP.textContent=`${newTodo.value} ` ;
        newLi.appendChild(newP);
        newLi.appendChild(menu);
        ul.appendChild(newLi);
        newTodo.value="";
        alertInfo.classList.add("noDisplay")
    }
    

}

const enterCheck = () => {
    if(event.keyCode==13){
        createTask();
    }
}

const actionOnUl = (e) =>{
    if(e.target.closest('p')){
        e.target.closest('p').classList.toggle("line-through");
    }
    else if(e.target.closest('i').classList.contains("fa-times-circle")){
        ul.removeChild(e.target.closest('li'))
        if (ul.childElementCount == 0){
            alertInfo.classList.remove("noDisplay")
        }
    }
    else if(e.target.closest('i').classList.contains("fa-edit")){
        editTask(e.target.closest('li').querySelector("p"));
        
    }
        
        

}


const editTask = (e) =>{
    
    editTaskBox.classList.remove("noDisplay");
    editTodo.value = e.textContent;
    accept.addEventListener("click", () => {
        if(editTodo.value!==""){
        
        e.textContent = editTodo.value;
        editTaskBox.classList.add("noDisplay");
    }
    })
    cancel.addEventListener("click", () => {

        editTaskBox.classList.add("noDisplay");
    })

}


addTodo.addEventListener("click", createTask);
ul.addEventListener("click", actionOnUl)
newTodo.addEventListener('keyup', enterCheck);








