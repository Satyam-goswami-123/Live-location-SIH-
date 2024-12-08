document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting (default behavior)
    
    // Capture the entered values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration
    const validUsername = 'dear';
    const validPassword = '123';

    // Check if the entered credentials match
    if (username === validUsername && password === validPassword) {
        // If valid, redirect to the home page
        window.location.href = '2homepg.html';
    } else {
        // If invalid, show an alert
        alert('Invalid username or password');
    }
});