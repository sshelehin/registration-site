document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        // Сохранение данных в LocalStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        const messageElement = document.getElementById('message');
        messageElement.textContent = `Регистрация успешна! Добро пожаловать, ${username}.`;
        messageElement.classList.remove('error');
        messageElement.classList.add('success');
        messageElement.style.opacity = 1;

        setTimeout(function() {
            window.location.href = 'login.html'; // Переход на страницу входа
        }, 1000);
    } else {
        const messageElement = document.getElementById('message');
        messageElement.textContent = 'Пожалуйста, заполните все поля!';
        messageElement.classList.remove('success');
        messageElement.classList.add('error');
        messageElement.style.opacity = 1;
    }
});
