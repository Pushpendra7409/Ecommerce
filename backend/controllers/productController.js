import Product from '../models/productModel.js'



//Create Product -- Admin 

export const createProduct = async (req,res,next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
}

// Get all products
export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
};