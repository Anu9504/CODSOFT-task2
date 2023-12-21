function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "Anu" && password === "Anu@123") {
        errorMessage.textContent = "";
        window.location.href = 'file:C:/Users/HP/OneDrive/Desktop/codsoft%20final/dashboard.html'; 
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}
