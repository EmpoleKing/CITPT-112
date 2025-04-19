document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitButton = document.getElementById('submitButton');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    const validateForm = () => {
        let isValid = true;

        // Username validation
        if (usernameInput.value.trim() === '') {
            nameError.style.display = 'block';
            usernameInput.classList.add('invalid');
            isValid = false;
        } else {
            nameError.style.display = 'none';
            usernameInput.classList.remove('invalid');
            usernameInput.classList.add('valid');
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('invalid');
            emailInput.classList.add('valid');
        }

        // Password validation regex
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,}$/;
        // Password validation
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.style.display = 'block';
            passwordError.textContent = 'Password must be at least 10 characters long, include one uppercase letter, ' +
                                        'one number, and one special character (!, @, #, $, etc.)';
            passwordInput.classList.add('invalid');
            isValid = false;
        } else {
            passwordError.style.display = 'none';
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
        }

        // Confirm password validation
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.style.display = 'block';
            confirmPasswordInput.classList.add('invalid');
            isValid = false;
        } else {
            confirmPasswordError.style.display = 'none';
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
        }

        submitButton.disabled = !isValid;
    };

    form.addEventListener('input', validateForm);
});