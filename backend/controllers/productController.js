import Product from '../models/productModel.js'



//Create Product -- Admin 

export const createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
}

// Get all products
export const getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products
    });
};

//Get Product Details

export const getProductDetails = async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Product not found",
        });
    }

    res.status(200).json({
        success: true,
        product,
    });
};

//Update Product -- Admin
export const updateProduct = async (req, res, next) => {
    try {
        
        let product = await Product.findById(req.params.id);

        
        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        
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
};


// Delete Product -- Admin

export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

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
};
