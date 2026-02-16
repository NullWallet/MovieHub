document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    alert("Welcome, " + username + "! Login successful.");

    window.location.href = "pages/home.html";
});
