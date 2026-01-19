const para = document.querySelector("#para");
const input = document.querySelector("#input");
const addBtn = document.querySelector("#addbtn");
const list = document.querySelector("#list");
let listlen=0;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

function savetodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removetodos(){
    localStorage.removeItem("todos");
}

// function getdata(){
//     localStorage.getItem(todos);
// }

function check(){
    if(listlen===0){
        para.textContent="No todo yet"
    }else{
        para.textContent=""
    }
}

check();
addBtn.addEventListener("click",()=>{
    if(listlen>=0 && input.value !== "" ){
        console.log(`You added ${input.value} in to do list`);
        
        const li = document.createElement("li");
        li.className = "flex justify-between items-center border rounded px-3 py-2";

        const innerpara = document.createElement("p");
        innerpara.textContent = input.value;

        const innerDiv = document.createElement("div");
        innerDiv.className = "flex gap-2";

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "bg-yellow-400 px-2 rounded";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "bg-red-500 text-white px-2 rounded";

        innerDiv.append(editBtn, deleteBtn);
        li.append(innerpara, innerDiv);
        list.appendChild(li);
        input.placeholder = "Enter Todo";
        todos.push(input.value);
        input.value = "";
        listlen++;
        savetodos();

        deleteBtn.addEventListener("click", () => {
            li.remove();
            listlen--;
            check();
            // removetodos();
        });

        editBtn.addEventListener("click", () => {
            const newValue = prompt("Edit todo:", innerpara.textContent);
            if (newValue && newValue.trim() !== "") {
            innerpara.textContent = newValue;
            }
            // savetodos();
        });

    }else if(input.value === ""){
        console.error("Please enter something");
        input.placeholder = "Please enter something"; 
    }
    check();
})





