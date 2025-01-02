document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const loginUsername = document.getElementById('login-username').value;
    const loginPassword = document.getElementById('login-password').value;

    // Получение сохраненных данных из LocalStorage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    const messageElement = document.getElementById('login-message');

    // Проверка данных
    if (loginUsername === savedUsername && loginPassword === savedPassword) {
        messageElement.textContent = `Добро пожаловать, ${loginUsername}!`;
        messageElement.classList.remove('error');
        messageElement.classList.add('success');
        messageElement.style.opacity = 1;

        // Перенаправление на главную страницу или личный кабинет
        setTimeout(function() {
            window.location.href = 'welcome.html';
        }, 1000);
    } else {
        messageElement.textContent = 'Неверное имя пользователя или пароль.';
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.style.opacity = 1;
    }
});
