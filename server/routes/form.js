import { Router } from "express";

export const form = Router();
const users = [];

form.post('/form', (request, response) => {
    const user = {
        nome: request.body.name,
        sobrenome: request.body.lastname,
        email: request.body.email,
        dataDeNascimento: request.body.dateofbirth,
        cpf: request.body.cpf,
        emailLogin: request.body.emailLogin,
        senha: request.body.password
    };
    users.push(user);
    console.log(users);
    return response.status(200).json({ message: 'Cliente Cadastrado com Sucesso!' });
});
