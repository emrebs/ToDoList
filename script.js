const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const updateTask = document.querySelector("#updateTask");

eventListener ();

function eventListener(){
    // formun submit edilmesi
    form.addEventListener("submit", addNewItem);
    // tek bir element silme
    taskList.addEventListener("click",deleteItem);
    // bütün elementlerin silinmesi
    btnDeleteAll.addEventListener("click",deleteAllItem);
    // editleme işlemi
    updateTask.addEventListener("click", editItem);

}

// Yeni bir liste eklendi
function addNewItem(e){
    e.preventDefault();

    if (input.value === ''){
        alert('Lütfen Doldurun');
    }

    const li = document.createElement('li');
    li.classList = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    const a = document.createElement('a');
    a.classList = 'delete-item float-end';
    a.setAttribute = ('href', '#');
    a.innerHTML = '<i class="bi bi-x-circle"></i>'

    li.appendChild(a);
    taskList.appendChild(li);
}

function deleteAllItem (e) {
    e.preventDefault();

    if (confirm ('Emin misin?')){
        taskList.innerHTML = '';
    }


}

function deleteItem (e) {
if (e.target.className === "bi bi-x-circle"){
    if (confirm("Emin misin?")) {
        e.target.parentElement.parentElement.remove();
    }
}
}

function editItem (e) {
    e.preventDefault();

}






