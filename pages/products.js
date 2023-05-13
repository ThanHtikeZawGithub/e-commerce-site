import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import ProductsGrid from "../components/ProductGrid";
import { Product } from "../models/Product";
import { Category } from "../models/Category";
import mongooseConfig from "../lib/mongoose";

const Title = styled.h1`
  font-size: 1.5em;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: -40px;
  margin: 20px;
  padding: 10px 0;
  background-color: white;
  border-radius: 10px;
`;


const SelectWrapper = styled.select`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #aaa;
  }

  &:focus {
    outline: none;
    border-color: #555;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

const ProductsPage = ({ products, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => String(product.category._id) === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, filteredProducts]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  return (
    <>
      <Header />
      <Title>All products</Title>
      <ProductWrapper>
        <FilterWrapper>
          <div>
            <label htmlFor="category-select" className="form-label">
              Category:{" "}
            </label>
            <SelectWrapper
              className="form-select form-control"
              name=""
              id="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="all">All</option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </SelectWrapper>
          </div>
        </FilterWrapper>
        <ProductsGrid products={filteredProducts} />
      </ProductWrapper>
    </>
  );
};

export default ProductsPage;

export async function getServerSideProps() {
  await mongooseConfig();

  try {
    const products = await Product.find().populate("category");
    const categories = await Category.find({}, "name");

    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
        categories: JSON.parse(JSON.stringify(categories)),
      },
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      props: {
        products: [],
        categories: [],
      },
    };
  }
}