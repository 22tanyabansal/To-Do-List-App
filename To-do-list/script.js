window.addEventListener('load',()=>{
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#task-input");
    const list = document.querySelector("#tasks");

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task= input.value;
        if(!task){
            return;
        }
        const task_list = document.createElement("div");
        task_list.classList.add("task");

        const task_content = document.createElement("div");
        task_content.classList.add("content");
        task_list.appendChild(task_content);

        const task_input = document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = task;
        task_input.setAttribute("readonly","readonly");
        task_content.appendChild(task_input);

        const task_delete = document.createElement("button");
        task_delete.classList.add("delete");
        task_delete.innerHTML = "Delete";

        task_content.appendChild(task_delete);
        list.appendChild(task_list);  

        input.value = "";

        task_delete.addEventListener('click',()=>{
            list.removeChild(task_list);
        });
    });
});

