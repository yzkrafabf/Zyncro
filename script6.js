document.getElementById("togglePassword").addEventListener("change", function() {
    let passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});
