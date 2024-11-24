import Product from '../models/productModel.js'
import ErrorHandler from '../utils/errorhandler.js';
import catchAsyncErrors from '../middleware/catchAsyncErrors.js';


//Create Product -- Admin 

export const createProduct = catchAsyncErrors (
    async (req, res, next) => {

        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        });
    });


// Get all products
export const getAllProducts = catchAsyncErrors (async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
});

//Get Product Details

export const getProductDetails = catchAsyncErrors (async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
        };
    

    res.status(200).json({
        success: true,
        product,
    });
});

//Update Product -- Admin
export const updateProduct = catchAsyncErrors (async (req, res, next) => {
    try {
        
        let product = await Product.findById(req.params.id);

        
        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
            };
        
        product = await Product.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {
                new: true, 
                runValidators: true, 
            }
        );

        res.status(200).json({
            success: true,
            product,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});


// Delete Product -- Admin

export const deleteProduct = catchAsyncErrors (async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return next(new ErrorHandler("Product not found", 404));
            };

        res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
