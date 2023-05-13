
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";
import mongooseConfig from "../../lib/mongoose";

export default async function handler(req, res) {
  await mongooseConfig();

  const { category } = req.query;

  try {
    let products;
    let categories;

    if (category && category !== "all") {
      products = await Product.find({ category }).populate("category");
    } else {
      products = await Product.find().populate("category");
    }

    categories = await Category.find({}, "name");

    res.status(200).json({ products, categories });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
}