// Login data statis
const staticUsers = [
    { username: "devis", password: "123" },
    { username: "devis1", password: "123" }
];

// Fungsi Register
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Periksa apakah username sudah ada
    let userExists = staticUsers.find(user => user.username === username);
    if (userExists) {
        alert("Username sudah terdaftar.");
    } else {
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "login.html";
    }
}

// Fungsi Login
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Periksa kredensial
    let validUser = staticUsers.find(user => user.username === username && user.password === password);
    if (validUser) {
        alert("Login berhasil!");
        sessionStorage.setItem("username", username); // Simpan username ke session
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau password salah.");
    }
}

// Fungsi Muat Dashboard
function loadDashboard() {
    let username = sessionStorage.getItem("username");
    if (username) {
        document.getElementById("usernameDisplay").innerText = username;
    } else {
        window.location.href = "login.html"; // Redirect jika tidak ada sesi
    }
}
