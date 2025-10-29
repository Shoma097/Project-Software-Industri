// Authentication and user management
const AUTH = {
    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleAdminLogin(e));
        }
    },

    checkAuthStatus() {
        const isLoggedIn = this.isLoggedIn();
        const authLinks = document.querySelectorAll('.auth-link');
        const userMenu = document.querySelector('.user-menu');
        
        if (authLinks.length) {
            authLinks.forEach(link => {
                link.style.display = isLoggedIn ? 'none' : 'block';
            });
        }
        
        if (userMenu) {
            userMenu.style.display = isLoggedIn ? 'block' : 'none';
        }
    },

    handleAdminLogin(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // In a real application, you would validate these credentials against a backend
        // For demo purposes, we're using hardcoded credentials
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('isAdmin', 'true');
            window.location.href = 'admin/admin.html';
        } else {
            this.showError('Invalid credentials');
        }
    },

    handleSignup(e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Validation
        if (!this.validateSignupForm(firstName, lastName, email, password, confirmPassword)) {
            return;
        }

        // Store user data (replace with backend registration)
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', `${firstName} ${lastName}`);
        
        // Redirect to login
        window.location.href = 'login.html';
    },

    handleLogout(e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        window.location.href = 'index.html';
    },

    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    validateSignupForm(firstName, lastName, email, password, confirmPassword) {
        if (!firstName || !lastName) {
            this.showError('Please enter your full name');
            return false;
        }

        if (!this.validateEmail(email)) {
            this.showError('Please enter a valid email address');
            return false;
        }

        if (password.length < 6) {
            this.showError('Password must be at least 6 characters long');
            return false;
        }

        if (password !== confirmPassword) {
            this.showError('Passwords do not match');
            return false;
        }

        return true;
    },

    showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        
        const form = document.querySelector('form');
        const existingError = form.querySelector('.error-message');
        
        if (existingError) {
            existingError.remove();
        }
        
        form.insertBefore(errorDiv, form.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    },

    isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    },

    requireAuth(bookingPage) {
        if (!this.isLoggedIn()) {
            localStorage.setItem('bookingRedirect', bookingPage);
            window.location.href = 'login.html';
            return false;
        }
        return true;
    }
};

// Initialize auth system when DOM is ready
document.addEventListener('DOMContentLoaded', () => AUTH.init());