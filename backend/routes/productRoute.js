import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } from '../controllers/productController.js';

const router = express.Router();

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").delete(deleteProduct);

router.route("/product/:id").get(getProductDetails);

export default router;