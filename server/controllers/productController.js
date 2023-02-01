const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find(req.body).sort("-createdAt");
    res.status(200).json(products);
});

const addProduct = asyncHandler(async (req, res) => {
    const { name, category, quantity, price, description, image } = req.body;
    if (!name, !category, !quantity, !price, !description, !image) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }

    const product = await Product.create({
        name, category, quantity, price, description, image
    })
    if (product) {
        const { name, category, quantity, price, description, image } = product;
        res.status(201).json({
            name, category, quantity, price, description, image
        });
    } else {
        res.status(400);
        throw new Error("Invalid data");
    }
})

// Update Product


const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    // if product doesn't exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    await product.remove();
    res.status(200).json({ message: "Product deleted." });
});

const updateProduct = asyncHandler(async (req, res) => {
    const { name, category, quantity, price, description } = req.body;
    const { id } = req.params;

    const product = await Product.findById(id);

    // if product doesnt exist
    if (!product) {
        res.status(404);
        throw new Error("Product not found");
    }
    // Match product to its user
    if (product.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }

    // Handle Image upload
    let fileData = {};
    if (req.file) {
        // Save image to cloudinary
        let uploadedFile;
        try {
            uploadedFile = await cloudinary.uploader.upload(req.file.path, {
                folder: "Pinvent App",
                resource_type: "image",
            });
        } catch (error) {
            res.status(500);
            throw new Error("Image could not be uploaded");
        }

        fileData = {
            fileName: req.file.originalname,
            filePath: uploadedFile.secure_url,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2),
        };
    }

    // Update Product
    const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id },
        {
            name,
            category,
            quantity,
            price,
            description,
            image: Object.keys(fileData).length === 0 ? product?.image : fileData,
        },
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json(updatedProduct);
});

module.exports = {
    getProducts,
    updateProduct,
    addProduct,
    deleteProduct
};
