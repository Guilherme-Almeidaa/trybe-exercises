
const express = require('express');
const ProductModel = require('../models/productModel');
const { validadeId, validateInfo,returnError } = require('../services/productService')

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res, next) => {
  const validate = await validadeId(req.params.id)
  if (validate.message) {
    return res.status(validate.code).json({
      message: validate.message
    })
  }
  const product = await ProductModel.getById(req.params.id);

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
 if(!name) {
   const checkName = await returnError('name')
   return res.status(checkName.code).json({
     message:checkName.message
   })
 }

 if(!brand) {
  const checkBrand = await returnError('Brand')
  return res.status(checkBrand.code).json({
    message:checkBrand.message
  })
}
  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {

  const validate = await validadeId(req.params.id)

  if (validate.message) {
    return res.status(validate.code).json({
      message: validate.message
    })
  }
  await ProductModel.exclude(req.params.id);

  res.status(204).end();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const validate = await validadeId(req.params.id);
  
  if (validate.message) {
    return res.status(validate.code).json({
      message: validate.message
    })
  }

  if(!name) {
    const checkName = await returnError('name')
    return res.status(checkName.code).json({
      message:checkName.message
    })
  }
 
  if(!brand) {
   const checkBrand = await returnError('Brand')
   return res.status(checkBrand.code).json({
     message:checkBrand.message
   })
 }
  const products = await ProductModel.update(req.params.id, name, brand);

  res.status(200).json(products);
});

module.exports = router;