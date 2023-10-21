const users = [
    { username: "Mayfcb", password: "Fcb23", page: "ficha1.html" }, /*Funcionando*/
    { username: "Dgrk_Dino", password: "15151616", page: "ficha2.html" },/*Funcionando*/
    { username: "Caue", password: "amorex16", page: "ficha3.html" },
    { username: "Jonaseur_232", password: " hjg2312a", page: "ficha4.html" },
    { username: "marcelinho", password: "ben102460", page: "ficha5.html" },
    { username: "usuario2", password: "senha2", page: "ficha6.html" },
];

document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginStatus = document.getElementById("loginStatus");

    // Verificar se o usuário e senha correspondem a um usuário registrado
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirecionar para a página associada ao usuário
        window.location.href = user.page;
    } else {
        loginStatus.innerHTML = "Nome de usuário ou senha incorretos.";
    }
});

