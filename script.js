// Modal de Login
const loginModal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.btn-login');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
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

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    alert(`Login tentado com: ${email}`);
    loginModal.style.display = 'none';
    // Para um login real, conecte a um backend aqui
});