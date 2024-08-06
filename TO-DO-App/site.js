const input = document.getElementById("text-box");
const list = document.getElementById("list-container");

const addTask = () => {
    if (input.value === '') {
        input.placeholder = 'You must have to add some task..!'
    } else {
        const li = document.createElement('li');
        list.appendChild(li);
        li.innerText = input.value;
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    saveData()
}


list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})


let saveData = () => {
    localStorage.setItem("data", list.innerHTML);
}

let showData = () => {
    list.innerHTML = localStorage.getItem("data");
}

showData();