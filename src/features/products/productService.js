import axios from "axios";
import { base_url, config } from "../../utils/axiosConfig";

const getProducts = async (userData) => {
  const response = await axios.get(`${base_url}product`);
  if (response.data) {
    return response.data;
  }
};

const getProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  if (response.data) {
    return response.data;
  }
};

const addToWishList = async (productId) => {
  const response = await axios.get(
    `${base_url}product/wishlist`,
    { productId },
    config
  );
  if (response.data) {
    return response.data;
  }
};
export const productService = {
  getProducts,
  getProduct,
  addToWishList,
};
