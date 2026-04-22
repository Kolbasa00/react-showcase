import { createContext, useState } from "react";

export const customContext = createContext();

export function CartProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const addToCart = (item) => {
    const itemIndex = order.findIndex((el) => el.mainId === item.mainId);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder((prevOrder) => [...prevOrder, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.displayName);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const addQuantityProduct = (itemId) => {
    setOrder((prevOrder) => {
      return prevOrder.map((el) => {
        return el.mainId === itemId ? { ...el, quantity: el.quantity + 1 } : el;
      });
    });
  };

  const removeQuantityProduct = (itemId) => {
    setOrder((prevOrder) => {
      return prevOrder
        .map((el) => {
          return el.mainId === itemId
            ? { ...el, quantity: el.quantity - 1 }
            : el;
        })
        .filter((el) => el.quantity > 0);
    });
  };

  const handleCartShow = () => {
    setCartShow(!isCartShow);
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
    setAlertName,
  };
  return (
    <customContext.Provider value={value}>{children}</customContext.Provider>
  );
}
