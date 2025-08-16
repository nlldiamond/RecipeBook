document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stops page reload

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "1234") {
        location = "Member.html";
    } else if (username === "admin" && password === "5678") {
        location = "owner.html";
    } else {
        alert("Email/Password Incorrect");
        window.location.reload();
    }
});

