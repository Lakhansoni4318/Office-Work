const ProductSchema = require("../model/ProductSchema");

exports.serverPage = (request, response) => {
  response.send("Hello to the Api Page");
};

exports.createProducts = async (request, response) => {
  try {
    await ProductSchema.deleteMany({});
    const productDataArray = request.body;
    const result = await ProductSchema.insertMany(productDataArray);
    response.status(201).send(result);
  } catch (error) {
    console.error("Error creating products:", error);
    response.status(500).json({ error: "Internal server error" });
  }
};

exports.getProducts = async (request, response) => {
  try {
    const data = await ProductSchema.find({}, { _id: 0 });
    response.status(200).send(data);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal server error" });
  }
};
