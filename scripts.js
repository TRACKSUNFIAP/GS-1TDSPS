function validarLogin() {
    document.getElementById("error-message").innerHTML = "";

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerHTML = "Por favor, preencha todos os campos.";
        return false;
    }

    if (username === "admin@admin" && password === "1234") {
        window.location.href = "./visaoGeral/index.html";
    } else {
        document.getElementById("error-message").innerHTML = "Usuário ou senha inválidos.";
        return false;
    }
}
