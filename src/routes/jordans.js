const express = require('express');
const conectarBancoDados = require('../midllwares/conectarBD');
const tratarErrosEsperados = require('../functions/tratarErrosEsperados');
const EsquemaProduto = require('../models/produto');
const router = express.Router();

router.post('/criar', conectarBancoDados, async function(req, res) {
  try{
    // #swagger.tags = ['Jordans']
    let { posicao, nome, preco, imgFrente, imgLado, imgTras, descricao, tamanhos, cor, tipo } = req.body;
    const respostaBd = await EsquemaProduto.create({ posicao, nome, preco, imgFrente, imgLado, imgTras, descricao, tamanhos, cor, tipo });

    res.status(200).json({
      status: "Ok",
      statusMenssagem: "Produto criado com sucesso",
      resposta: respostaBd
    })
    
  }catch(error) {
      tratarErrosEsperados(res, error);
  }
});

router.get('/obter', conectarBancoDados, async function(req, res) {
  try{
    // #swagger.tags = ['Jordans']
    const respostaBd = await EsquemaProduto.find({});

    res.status(200).json({
      status: "Ok",
      statusMenssagem: "Produto criado com sucesso",
      resposta: respostaBd
    })
    
  }catch(error) {
      tratarErrosEsperados(res, error);
  }
});

router.get('/obter/:id', conectarBancoDados, async function(req, res) {
  try {
    // #swagger.tags = ['Jordans']
    let idProduto = req.params.id;

    const checkProduto = await EsquemaProduto.findOne({ _id: idProduto });
    if(!checkProduto){
      throw new Error("Produto não encontrado");
    }

    const produtoEncontrado = await EsquemaProduto.findOne( {_id: idProduto } );
      res.status(200).json({
        status: 'ok',
        statusMensaagem: "Produto obtido com suceso!",
        resposta: produtoEncontrado
      })
    
  } catch (error) {
    return tratarErrosEsperados(res, error)
  }
});

router.get('/cor/:cor', conectarBancoDados, async function(req, res) {
  try {
    // #swagger.tags = ['Jordans']
    let corProduto = req.params.cor;

    const checkProduto = await EsquemaProduto.find({ cor: corProduto });
    if(!checkProduto){
      throw new Error("Produto não encontrado");
    }

    const produtoEncontrado = await EsquemaProduto.find( { cor: corProduto } );
      res.status(200).json({
        status: 'ok',
        statusMensaagem: "Produto obtido com suceso!",
        resposta: produtoEncontrado
      })
    
  } catch (error) {
    return tratarErrosEsperados(res, error)
  }
});

router.get('/tipo/:tipo', conectarBancoDados, async function(req, res) {
  try {
    // #swagger.tags = ['Jordans']
    let tipoProduto = req.params.tipo;

    const checkProduto = await EsquemaProduto.find({ tipo: tipoProduto });
    if(!checkProduto){
      throw new Error("Produto não encontrado");
    }

    const produtoEncontrado = await EsquemaProduto.find( { tipo: tipoProduto } );
      res.status(200).json({
        status: 'ok',
        statusMensaagem: "Produto obtido com suceso!",
        resposta: produtoEncontrado
      })
    
  } catch (error) {
    return tratarErrosEsperados(res, error)
  }
});



module.exports = router;
