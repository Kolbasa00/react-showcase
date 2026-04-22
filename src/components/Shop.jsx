import { useState, useEffect, useContext } from "react";
import API_URL from "../../config";

import Preloader from "./Preloader.jsx";
import GoodsList from "./GoodsList.jsx";
import Cart from "./Cart/Cart.jsx";
import { customContext } from "./Cart/CartContext.jsx";
import CartList from "./Cart/CartList.jsx";
import Alert from "./Alert.jsx";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const { order, isCartShow, alertName, setAlertName } =
    useContext(customContext);

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    fetch(API_URL)
      .then((Response) => Response.json())
      .then((data) => {
        data && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto flex-1 py-7">
      <Cart quantity={order.length}></Cart>
      {loading ? (
        <Preloader></Preloader>
      ) : (
        <GoodsList goods={goods}></GoodsList>
      )}
      {isCartShow && <CartList></CartList>}
      {alertName && <Alert name={alertName} closeAlert={closeAlert}></Alert>}
    </main>
  );
}

export default Shop;
