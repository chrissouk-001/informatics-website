// Login Modal Functions
function showLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Initialize auth functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to login buttons
    const loginButtons = document.querySelectorAll('.login-button');
    loginButtons.forEach(button => {
        button.addEventListener('click', showLoginModal);
    });
    
    // Add event listeners to login form
    const loginForm = document.querySelector('#loginModal form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            
            if (email && password) {
                // Here you would normally send this to a server
                console.log('Login attempt:', email.value);
                
                // For demo purposes, simulate login success
                showNotification('Επιτυχής σύνδεση!', 'success');
                closeLoginModal();
            }
        });
    }
    
    // Setup register link
    const registerLink = document.querySelector('#loginModal a[href="#"]');
    if (registerLink) {
        registerLink.addEventListener('click', function(event) {
            event.preventDefault();
            closeLoginModal();
            showNotification('Η λειτουργία εγγραφής δεν είναι διαθέσιμη στο demo', 'info');
        });
    }
}); 