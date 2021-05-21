const ProductModel = require('../models/productModel.js');

const getAllProducts = async (req, res) => {
  const products = await  ProductModel.getAll();
 
  res.status(200);
  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (product === null) {
    res.status(404);
    return res.send({ message: 'Produto não encontrado' });
  }

  res.status(200);
  res.json(product);
};

const createProduct = async (req, res) => {
  const { id, name, brand } = req.body;

  try {
    const newProduct = await ProductModel.add(id, name, brand);

    res.status(200);
    res.json(newProduct);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const deleteProductById = async  (req, res) => {
  try {
    const products = await  ProductModel.remove(req.params.id);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const editProductById = async (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = await ProductModel.addOrUpdate(req.params.id, name, brand);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};