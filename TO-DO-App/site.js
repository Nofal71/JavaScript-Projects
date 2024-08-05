let input = document.querySelector("#input");
let add_button = document.querySelector("#add_button");
let task_display = document.querySelector(".task_display");

let add_task = () => {
    let data = input.value;
    if (data == "") {
        input.placeholder = "Write your task here...!";
    } else {
        let task = document.createElement("span");
        task.innerHTML = `<p class="task_area"> <input id = "check" type="radio" > ${data} <span id="delete"> <i class="fa-solid fa-xmark"></i> </span> </p>`;
        task_display.appendChild(task);
        input.value = "";
        input.placeholder = "Add more tasks here...";
        complete_task(task, task.querySelector("#check"));
        delete_task(task, task.querySelector("#delete"));
    }
}

let complete_task = (task, check) => {
    let incomplete = true;
    check.addEventListener("click", () => {
        if (incomplete) {
            task.style.textDecoration = "line-through";
            incomplete = false;
        } else {
            task.style.textDecoration = "none";
            check.checked = false;
            incomplete = true;
        }
    });
}

let delete_task = (task, dell) => {
    dell.addEventListener("click", () => {
        task.remove();
    })
}


add_button.addEventListener("click", add_task);