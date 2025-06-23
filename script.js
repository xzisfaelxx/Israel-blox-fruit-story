// Modal de Login
const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.btn-login');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Simulação de envio do formulário de login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Tentativa de login com: ${email}`);
    // Aqui você pode adicionar lógica para conectar a um backend
    loginModal.style.display = 'none';
});
