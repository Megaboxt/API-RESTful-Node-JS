import { Router } from "express";
import { 
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct, 
} from "../controllers/products.controller.js";


const router = Router();


router.get('/products', getAllProducts);

router.get('/products/:id', getProductById);

router.post('/products/create', createProduct);

router.put('/products/update/:id', updateProduct);

router.delete('/products/:id', deleteProduct);



export default router;