const { ProductModels } = require("../model/productSchema");

exports.getIdProduct = async (req, res) => {
  const { id } = req.params;
  const ids = parseInt(id);

  const products = await ProductModels.findOne({ id: ids });

  res.send({ products });
};

exports.getProduct = async (req, res) => {
  const { price, category, brand, search, page } = req.headers;

  const prices = parseInt(price) || 1;

  const limit = 20;
  const skip = (page - 1) * limit;

  let query = {};

  if (category) {
    query.category = category;
  }

  if (brand) {
    query.brand = brand;
  }

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
  }
  const products = await ProductModels.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ price: prices });
  res.send({ products });
};
