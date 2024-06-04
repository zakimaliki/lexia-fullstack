var errorLine = document.getElementById('error-line');
errorLine.innerHTML = "";
document.getElementById('login-btn').addEventListener('click', validateForm);

async function validateForm(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password: pass }),
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();

        // Check if token exists in response
        if (data.token) {
            alert("Login successful");
            // Store token in localStorage or sessionStorage as needed
            sessionStorage.setItem('token', data.token);
            window.location.href = '../html/main-course.html';
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        errorLine.innerHTML = "Error: " + error.message;
    }
}
