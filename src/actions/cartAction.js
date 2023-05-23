import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  RESET_CART_ITEM,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";
import axios from "axios";

// Add to cart
export const addItemsToCart =
  (id, quantity, size) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity: quantity,
        size: size,
        discount: data.product.discount
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// remove item from cart
export const removeItemsFromCart = (id, size) => async (dispatch, getState) => {
  dispatch({ type: REMOVE_CART_ITEM, payload: { id, size } });
  const {
    cart: { cartItems },
  } = getState();
  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  localStorage.setItem(
    "cartItems",
    JSON.stringify(
      cartItems.filter((item) => item.product !== id || item.size !== size)
    )
  );
};

// reset cart
export const resetCart = () => async (dispatch) => {
  dispatch({ type: RESET_CART_ITEM });

  localStorage.setItem("cartItems", JSON.stringify([]));

  // localStorage.removeItem("cartItems");
};

// Save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
