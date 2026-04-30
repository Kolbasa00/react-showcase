import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isCartShow: false,
  alertName: "",
};

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { goods, loading, order, isCartShow, alertName } = state;

  const closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: itemId } });
  };

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const addQuantityProduct = (itemId) => {
    dispatch({ type: "ADD_QUANTITY_PRODUCT", payload: { id: itemId } });
  };

  const removeQuantityProduct = (itemId) => {
    dispatch({ type: "REMOVE_QUANTITY_PRODUCT", payload: { id: itemId } });
  };

  const handleCartShow = () => {
    dispatch({ type: "HANDLE_CART_SHOW" });
  };

  const setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  const value = {
    addToCart,
    removeFromCart,
    handleCartShow,
    order,
    isCartShow,
    addQuantityProduct,
    removeQuantityProduct,
    alertName,
    closeAlert,
    loading,
    goods,
    setGoods,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
