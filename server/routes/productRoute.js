const express = require("express");
const router = express.Router();
const { getProducts, addProduct, deleteProduct, updateProduct } = require("../controllers/productController");
const { upload } = require("../utils/fileUpload");

router.get("/", getProducts);
router.post("/:id", addProduct);
router.patch("/:id", upload.single("image"), updateProduct);
router.delete("/:id", deleteProduct)

module.exports = router;
