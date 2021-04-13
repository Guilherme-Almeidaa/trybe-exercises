const ProductModel = require('../models/productModel');

const returnError = async (name) => {
    const returnsError = {
        code: 400,
        message: `Insira o ${name}`
    }
    return returnsError
}

const validateExistsData = async (check) => {
    const returnsError = {
        code: 404,
        message: `O produto não existe`
    }
    const product = await ProductModel.getById(check);
    if (!product) {
        return returnsError
    }
    return {}
}

const validadeId = async (id) => {
    if (!id || id.length === 0) return await returnError('Id')
    const validate = await validateExistsData(id)
    return validate
}

const validateBrand = async (brand) => {
    if (!brand || brand.length === 0) return returnError('Brand')
    return {}
}

const validateName = async (name) => {
    if (!name || name.length === 0) return returnError('Name')
    return {}
}

const validateInfo = async (name, brand) => {
    const validateNameCheck = await validateName(name);
    const validateBrandCheck = await validateBrand(brand);

    if (validateNameCheck.message) return validateName;
    if (validateBrandCheck.message) return validateBrand;

    return {}
}

module.exports = {
    validadeId,
    validateExistsData,
    validateInfo,
    returnError,
}