document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem(email)) {
        document.getElementById('registerMessage').innerText = 'Email já registrado!';
    } else {
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        localStorage.setItem(email, JSON.stringify(user));
        document.getElementById('registerMessage').innerText = 'Registro realizado com sucesso!';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login_email').value;
    const password = document.getElementById('login_password').value;

    const storedUser = localStorage.getItem(email);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            document.getElementById('loginMessage').innerText = 'Login bem-sucedido!';
        } else {
            document.getElementById('loginMessage').innerText = 'Senha incorreta!';
        }
    } else {
        document.getElementById('loginMessage').innerText = 'Usuário não encontrado!';
    }
});
