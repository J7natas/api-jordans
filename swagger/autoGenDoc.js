const mongooseToSwagger = require('mongoose-to-swagger');
const swaggerAutoGen = require('swagger-autogen')({
    openapi: '3.0.0',
    language: 'pt-BR'
});

const outputFile = './swagger_output.json';
const endPointsFile = ['../index.js']

let doc = {
    info: {
        version: "1.0.0",
        title: "API de sapatos Jordans",
        description: "Documentação da api"
    },
    servers: [
        {
            ulr: "http://localhost:3000/",
            description: "Servidor local"
        },
        {
            url: "https://api-jordans.vercel.app/",
            description: "Servidor de Produção"
        }
    ],
    consumes: ["application/json"],
    produces: ["application/json"]
}

swaggerAutoGen(outputFile, endPointsFile, doc).then(() => {
    console.log("Documentação do swagger gerada encontrasse no arquivo: " +outputFile);
    if(process.env.NODE_ENV !== "production"){
        require("../index.js")
    }
})