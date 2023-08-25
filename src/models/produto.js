const mongoose = require('mongoose');

const esquema = new mongoose.Schema(
    {   
        id: {
            type: Number,
            required: 'é obrigatorio'
        },
        nome: {
            type: String,
            required: 'é obrigatorio'
        },
        preco: {
            type: Number,
            required: 'é obrigatorio'
        },
        imgFrente: {
            type: String,
            required: 'é obrigatorio'
        },
        imgLado: {
            type: String,
            required: 'é obrigatorio'
        },
        imgTras: {
            type: String,
            required: 'é obrigatorio'
        },
        descricao: {
            type: String,
            required: 'é obrigatorio'
        },
        tamanhos: {
            type: Number,
            required: 'é obrigatorio'
        },
        cor: {
            type: String,
            required: 'é obrigatorio'
        },
        tipo: {
            type: String,
            required: 'é obrigatorio'
        }
    },
    {
        timestamps: true
    }
);

const esquemaProduto = mongoose.models.Produto || mongoose.model('Produto', esquema);
module.exports = esquemaProduto;