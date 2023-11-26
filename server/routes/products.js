import { Router } from "express";

const products = [
    {
        id: 0,
        titulo: "Milk Shake",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/shake-cafe-com-negresco-20042021071914481406.png",
        preco: "11,99"
    },
    {
        id: 1,
        titulo: "Creme de Leitinho",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/creme-de-leitinho-03022021171439083722.png",
        preco: "9,99"
    },
    {
        id: 2,
        titulo: "Açai",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/acai-do-seu-jeito-20042021111606875852.png",
        preco: "11,99"
    },
    {
        id: 3,
        titulo: "Linha Kids",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/milk-shake-de-unicornio-mrmix-produtos-24092021095346164323.png",
        preco: "19,99"
    },
    {
        id: 4,

        titulo: "Mini Sorvete",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/amora-03022021164406667748.png",
        preco: "6,99"
    },
    {
        id: 5,
        titulo: "Picolé",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/top-premium-18012021170620272310.png",
        preco: "4,99"
    },
    {
        id: 6,
        titulo: "Sobremesa da Casa",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/categorias/sobremesas-12042023180245207715.png",
        preco: "13,99"
    },
    {
        id: 7,
        titulo: "Sundae",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/sorvete-expresso-mega-sundae-de-morango-mrmix-produtos-28042021180132518806.png",
        preco: "13,99"
    },
    {
        id: 8,
        titulo: "Maxxi Gelato",
        img: "https://www.mrmixbrasil.com.br/arquivos-upload/produtos/negresco-trufado-20042021105335185257.png",
        preco: "11,99"
    },
];

export const productsRoute = Router();

productsRoute.get('/products', (request,response) => {
    return response.status(200).json(products);
})
