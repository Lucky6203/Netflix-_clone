function storeCredentials() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }

    // Here you can add code to perform the sign-in process
    // For now, let's just log the stored credentials
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to the desired HTML file
    window.location.href = "index.html";
}

// Populate fields with remembered credentials on page load
window.onload = function() {
    var rememberedEmail = localStorage.getItem("email");
    var rememberedPassword = localStorage.getItem("password");

    if (rememberedEmail && rememberedPassword) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("password").value = rememberedPassword;
        document.getElementById("rememberMe").checked = true;
    }
};
