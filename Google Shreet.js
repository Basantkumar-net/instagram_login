// script.js

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle button text between 'Show' and 'Hide'
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});