window.addEventListener("load", main);

function main() {
    const form = document.getElementById("login-form");
    // O codigo abaixo e suas derivações são checagem realizadas com relação ao login, porém, sem o uso
    // de um DB, sendo apenas para verificação de código
    form.addEventListener("submit", checkUser);
};

function checkUser(e) {
    e.preventDefault();
    const registeredUsers = JSON.parse(sessionStorage.getItem("users")) || [];
    const userLogin = document.getElementById("usuario").value;
    const passwordUser = document.getElementById("password").value;
    const resultAccess = document.querySelector(".result-acess");
    let message = '';
    let userFound = false;

    for (let i = 0; i < registeredUsers.length; i++) {
        if (registeredUsers[i].emailLogin === userLogin && registeredUsers[i].password === passwordUser) {
            message = `Seja Bem-vindo de volta ${registeredUsers[i].name}`;
            userFound = true;
            break;
        }
    }
    if (!userFound) {
        message = 'Conta não cadastrada!'
    };
    resultAccess.innerHTML = '';
    resultAccess.appendChild(document.createTextNode(message));
}