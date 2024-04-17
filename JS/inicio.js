document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const tasksContainer = document.getElementById('tasks-container');
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');
    const taskList = document.getElementById('task-list');
    const logoutButton = document.getElementById('logout-button');

    // Datos de usuarios (simulados, sustituye con autenticación real)
    const users = [
        { username: 'usuario1', password: 'clave1', tasks: ['Tarea 1', 'Tarea 2'] },
        { username: 'usuario2', password: 'clave2', tasks: ['Tarea 3', 'Tarea 4'] }
    ];

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Mostrar contenedor de tareas y ocultar contenedor de inicio de sesión
            loginContainer.classList.add('hidden');
            tasksContainer.classList.remove('hidden');
            displayTasks(user.tasks);
            loginError.textContent = '';
        } else {
            loginError.textContent = 'Usuario o contraseña incorrectos';
        }
    });

    logoutButton.addEventListener('click', () => {
        // Ocultar contenedor de tareas y mostrar contenedor de inicio de sesión al cerrar sesión
        tasksContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        usernameInput.value = '';
        passwordInput.value = '';
    });

    function displayTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
        });
    }
});
