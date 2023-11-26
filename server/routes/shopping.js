import { Router, response } from "express";

export const cartRouter = Router();
const cart = [];

cartRouter.post('/shopping', (request, response) => {
    const date = request.body;
    for (let x = 0; x < date.length; x++) {
        cart.push(date[x]);
    }
    return response.status(200).json({ message: 'Dados recebidos com sucesso!' });
});

cartRouter.get('/shopping', (request,response) => {
    return response.status(200).json(cart);
});