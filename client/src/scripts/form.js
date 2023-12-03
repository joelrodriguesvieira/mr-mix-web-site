window.addEventListener("load", main);

function main() {
    const form = document.getElementById("unique-form");
    form.addEventListener("submit", sendUser);
};

async function sendUser(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const jsonData = {};

    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    try {
        const response = await fetch('http://localhost:5000/form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        });
        const result = await response.json();
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
    }

    // OBS: O codigo criado a seguir foi criada apenas para validação de login sem utilização de um DB
    const registeredUsers = JSON.parse(sessionStorage.getItem("users")) || [];
    registeredUsers.push(jsonData);
    sessionStorage.setItem("users", JSON.stringify(registeredUsers));
    const form = document.getElementById("unique-form");
    form.reset();
}