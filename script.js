document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTask(e.target);
        } else if (e.target.tagName === 'INPUT') {
            toggleTask(e.target);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> <span>${task}</span> <button>Eliminar</button>`;
        taskList.appendChild(li);
    }

    function toggleTask(checkbox) {
        const li = checkbox.parentElement;
        li.classList.toggle('completed');
    }

    function deleteTask(button) {
        const li = button.parentElement;
        taskList.removeChild(li);
    }
});
